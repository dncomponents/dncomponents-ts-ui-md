import {CheckBoxView} from 'dncomponents/lib/checkbox/CheckBoxView';
import {TemplateParser, UiField} from 'dncomponents/lib/TemplateParser';
import {OnChangeHandler} from 'dncomponents/lib/corecls/handlers';
import {HandlerRegistration} from 'dncomponents/lib/corecls/events';
import {FocusComponentViewBase} from 'dncomponents/lib/views/FocusComponentView';
import {MainViewSlots, MainViewSlotsImpl} from 'dncomponents/lib/BaseComponent';

export class CheckBoxViewImpl extends FocusComponentViewBase implements CheckBoxView {

    static readonly VIEW_ID = 'default';
    @UiField
    root: HTMLElement;
    @UiField
    public checkBoxInput: HTMLInputElement;
    @UiField
    public labelText: HTMLElement;

    constructor();
    constructor(template?: HTMLTemplateElement);
    constructor(template?: HTMLTemplateElement) {
        super();
        if (template) {
            TemplateParser.create(template, this, true).bind();
            this.init();
        }
    };

    init(): void {
        this.labelText.addEventListener('click', ev => {
            if (this.isDisabled()) {
                return;
            }
            this.setIndeterminate(false);
            this.checkBoxInput.checked = !this.checkBoxInput.checked;
            this.checkBoxInput.dispatchEvent(new Event('change', {bubbles: true}));
        });
    }

    public setIndeterminate(b: boolean): void {
        this.checkBoxInput.indeterminate = b;
    }

    public isChecked(): boolean {
        return this.checkBoxInput.checked;
    }

    public setChecked(b: boolean): void {
        this.checkBoxInput.checked = b == null ? false : b;
    }

    public setLabel(html: string): void {
        this.labelText.innerHTML = html;
    }

    getLabel(): string {
        return this.labelText.textContent;
    }

    addOnChangeHandler(changeHandler: OnChangeHandler): HandlerRegistration {
        return changeHandler.addTo(this.asElement());
    }


    public setName(nameOfGroup: string): void {
        this.checkBoxInput.setAttribute('name', nameOfGroup);
    }

    public asElement(): HTMLElement {
        return this.root;
    }


    public getViewSlots(): MainViewSlots {
        return new MainViewSlotsImpl(this.labelText);
    }

    public getFocusElement(): HTMLElement {
        return this.checkBoxInput;
    }

}