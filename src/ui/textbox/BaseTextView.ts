/**
 * @author nikolasavic
 */
import {TextBoxView} from 'dncomponents/lib/textbox/TextBoxView';
import {UiField} from 'dncomponents/lib/TemplateParser';
import {KeyDownHandler, KeyUpHandler, OnBlurHandler} from 'dncomponents/lib/corecls/handlers';
import {TextBoxBuilderConst} from './TextBoxBuilderConst';
import {Util} from 'dncomponents/lib/corecls/Util';
import {FocusComponentViewBase} from 'dncomponents/lib/views/FocusComponentView';
import {java} from 'j4ts';
import {TextBoxType} from './TextBoxType';
import {TextBoxProperty} from './TextBoxProperty';
import ArrayList = java.util.ArrayList;
import List = java.util.List;

export abstract class BaseTextView extends FocusComponentViewBase implements TextBoxView {

    static readonly VIEW_ID:string = 'default';
    @UiField
    protected wrapperRoot: HTMLElement;
    @UiField
    public root: HTMLElement;
    @UiField
    filledLabel: HTMLElement;
    @UiField
    ripple: HTMLElement;
    //outlined
    @UiField
    outLinedLabel: HTMLElement;
    @UiField
    notchedPanel: HTMLElement;
    //helper panel
    @UiField
    helperPanel: HTMLElement;
    @UiField
    helperText: HTMLElement;
    @UiField
    characterCounter: HTMLElement;
    //current
    currentLabel: HTMLElement;
    currentRoot: HTMLElement;
    maxCharacter: number;

    protected init(): void {
        this.getInputElement().addEventListener('focus', ev => {
            this.root.classList.add(TextBoxBuilderConst.getInstance().focused);
            this.moveLabelToTop(true);
            if (this.ripple != null)
                this.ripple.classList.add(TextBoxBuilderConst.getInstance().lineRippleActive);
        });
    }

    private moveLabelToTop(b: boolean): void {
        if (b) {
            this.currentLabel.classList.add(TextBoxBuilderConst.getInstance().floatingLabelAbove);
            if (this.notchedPanel != null)
                this.notchedPanel.classList.add(TextBoxBuilderConst.getInstance().outlineNotched);
        } else {
            this.currentLabel.classList.remove(TextBoxBuilderConst.getInstance().floatingLabelAbove);
            if (this.notchedPanel != null)
                this.notchedPanel.classList.remove(TextBoxBuilderConst.getInstance().outlineNotched);
        }
    }

    setLabel(label: string): void {
        if (this.currentLabel != null && label != null)
            this.currentLabel.innerHTML = label;
    }

    public getValue(): string {
        return this.getInputElementValue();
    }

    public setValue(value: string): void {
        this.moveLabelToTop(value != null && !(value.length == 0));
        this.setInputElementValue(value);
    }

    public addOnInputChangeHandler(listener: EventListener): void {

    }

    public addOnBlurHandler(handler: OnBlurHandler): void {
        this.getInputElement().addEventListener(handler.getType(), handler);
    }

    public addOnKeyUpHandler(handler: KeyUpHandler): void {
        this.getInputElement().addEventListener(handler.getType(), handler);
    }

    public setError(b: boolean): void {
        if (b) {
            this.root.classList.add(TextBoxBuilderConst.getInstance().invalid);
            this.helperText.classList.add(TextBoxBuilderConst.getInstance().invalidTextMessage);
        } else {
            this.helperText.classList.remove(TextBoxBuilderConst.getInstance().invalidTextMessage);
            this.root.classList.remove(TextBoxBuilderConst.getInstance().invalid);
        }
    }

    public setErrorMessage(errorMessage: string): void {
//        if (helperText != null)
//            helperText.innerHTML = errorMessage;
    }

    public setPlaceHolder(placeHolder: string): void {

    }

    public asElement(): HTMLElement {
        return this.currentRoot;
    }

    public getFocusElement(): HTMLElement {
        return this.getInputElement();
    }

    setTextCount(max: number): void {
        this.maxCharacter = max;
        this.setCounterText();
        Util.addHandler(this.getInputElement(), KeyDownHandler.onKeyDown(evt => {
            if (this.getInputElementValue().length >= this.maxCharacter) {
                if (!(evt.code === 'Backspace'))
                    evt.preventDefault();
                return;
            }
            setTimeout(p => {
                if (this.getInputElementValue().length <= this.maxCharacter)
                    this.setCounterText();
            }, 100);
        }));
    }

    private setCounterText(): void {
        this.characterCounter.innerHTML = this.getInputElementValue().length + '/' + this.maxCharacter;
    }

    abstract getInputElement(): HTMLElement;

    protected abstract getInputElementValue(): string;

    protected abstract setInputElementValue(value: string): void;

}

export abstract class BaseTextViewBuilder<C extends BaseTextViewBuilder<any>> {

    private textBoxProperties: List<TextBoxProperty> = new ArrayList<TextBoxProperty>();

    protected templateElement: HTMLTemplateElement;
    protected type: TextBoxType;
    private label: string;
    private helperText: string;
    private maxCharacter: number;

    //parser
    public static readonly typeId = 'type';
    public static readonly labelId = 'label';
    public static readonly helperTextId = 'helpertext';
    protected static readonly propertyId = 'prop';
    public static readonly characterCounterId = 'charactercounter';

    public BaseTextViewBuilder() {
    }


    public setTextBoxProperties(textBoxProperties: List<TextBoxProperty>): C {
        this.textBoxProperties = textBoxProperties;
        return <any>this;
    }

    public setTemplateElement(templateElement: HTMLTemplateElement): C {
        this.templateElement = templateElement;
        return <any>this;
    }

    public setType(type: TextBoxType): C {
        this.type = type;
        return <any>this;
    }

    public setLabel(label: string): C {
        this.label = label;
        return <any>this;
    }

    public setHelperText(helperText: string): C {
        this.helperText = helperText;
        return <any>this;
    }

    public setCharacterCounter(max: number): C {
        this.maxCharacter = max;
        return <any>this;
    }

    protected init(v: BaseTextView): void {
        if (this.type == TextBoxType.FILLED) {
            v.currentLabel = v.filledLabel;
            v.notchedPanel.remove();
            if (this.checkLabel(v))
                v.currentLabel.remove();
        } else {
            v.currentLabel = v.outLinedLabel;
            v.root.classList.add(TextBoxBuilderConst.getInstance().outlined);
            v.ripple.remove();
            if (this.checkLabel(v))
                (<HTMLElement>v.currentLabel.parentNode).remove();
        }
        v.setLabel(this.label);
        if (this.maxCharacter == 0 && this.helperText == null) {
            v.currentRoot = v.root;
            v.helperPanel.remove();
        }
        if (this.helperText != null)
            v.helperText.innerHTML = this.helperText;

        if (this.maxCharacter > 0)
            v.setTextCount(this.maxCharacter);
        else
            v.characterCounter.remove();

    }

    private checkLabel(v: BaseTextView): boolean {
        if (this.label == null || this.label.length == 0) {
            v.root.classList.add(TextBoxBuilderConst.getInstance().noLabel);
            return true;
        }
        return false;
    }
}
