import {TemplateParser, UiField, UiStyle} from 'dncomponents/lib/TemplateParser';
import {BaseTextView, BaseTextViewBuilder} from '../textbox/BaseTextView';
import {TextBoxType} from '../textbox/TextBoxType';
import {MaterialUi} from '../MaterialUi';

export class TextAreaViewImpl extends BaseTextView {

    static readonly VIEW_ID: string = 'default';
    @UiStyle
    focusTextAreaStyle: string;
    @UiStyle
    focusFloatingLabelStyle: string;
    @UiField
    protected inputElement: HTMLTextAreaElement;

    public constructor(templateElement: HTMLTemplateElement) {
        super();
        TemplateParser.create(templateElement, this, true).bind();
        this.currentRoot = this.wrapperRoot;
        this.init();

    }

    private setBorderFocused(b: boolean): void {
        if (b) {
            this.root.classList.add(this.focusTextAreaStyle);
        } else {
            this.root.classList.remove(this.focusTextAreaStyle);
        }
    }

    getInputElement(): HTMLElement {
        return this.inputElement;
    }

    protected getInputElementValue(): string {
        return this.inputElement.value;
    }

    protected setInputElementValue(value: string) {
        this.inputElement.value = value;
    }

}

export class TextAreaViewBuilder extends BaseTextViewBuilder<TextAreaViewBuilder> {

    public static get(): TextAreaViewBuilder {
        return new TextAreaViewBuilder();
    }


    protected init(v: BaseTextView): void {
        if (this.type == null)
            this.type = TextBoxType.OUTLINED;
        super.init(v);
    }

    public build<B extends BaseTextView>(): B {
        if (this.templateElement == null)
            this.templateElement = MaterialUi.getUi().textarea;
        let view = new TextAreaViewImpl(this.templateElement);
        this.init(view);
        return <any>view;
    }
}
