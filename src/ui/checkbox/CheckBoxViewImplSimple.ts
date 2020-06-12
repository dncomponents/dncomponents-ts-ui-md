import {CheckBoxView} from 'dncomponents/lib/checkbox/CheckBoxView';
import {MainViewSlots, MainViewSlotsImpl} from 'dncomponents/lib/BaseComponent';
import {Util} from 'dncomponents/lib/corecls/Util';
import {OnChangeHandler} from 'dncomponents/lib/corecls/handlers';
import {HandlerRegistration} from 'dncomponents/lib/corecls/events';
import {TemplateParser, UiField} from 'dncomponents/lib/TemplateParser';

export class CheckBoxViewImplSimple implements CheckBoxView {

    static readonly VIEW_ID: string = 'simple';

    @UiField
    public root: HTMLInputElement;

    public constructor(template?: HTMLTemplateElement) {
        if (template) {
            TemplateParser.create(template, this, true).bind();
        }
    }


    getFocusElement(): HTMLElement {
        return this.asElement();
    }

    setEnabled(enabled: boolean) {
        if (this.getFocusElement() != null && this.getFocusElement() instanceof <any>HTMLInputElement) {
            (<HTMLInputElement>this.getFocusElement()).disabled = !enabled;
        } else {
            if (!enabled) this.getFocusElement().setAttribute('disabled', 'true'); else this.getFocusElement().removeAttribute('disabled');
        }
    }

    isDisabled(): boolean {
        let disabled: boolean;
        if (this.getFocusElement() != null && this.getFocusElement() instanceof <any>HTMLInputElement) {
            disabled = (<HTMLInputElement>this.getFocusElement()).disabled;
        } else {
            disabled = this.getFocusElement().hasAttribute('disabled');
        }
        return disabled;
    }


    public setIndeterminate(b: boolean) {
        this.root.indeterminate = b;
    }

    public isChecked(): boolean {
        return this.root.checked;
    }

    public setChecked(b: boolean) {
        this.root.checked = b == null ? false : b;
    }

    public setLabel(html: string) {
    }

    public addOnChangeHandler(changeHandler: OnChangeHandler): HandlerRegistration {
        return changeHandler.addTo(this.asElement());
    }

    public setName(nameOfGroup: string) {
        this.root.setAttribute('name', nameOfGroup);
    }

    public getLabel(): string {
        return '';
    }

    public asElement(): HTMLElement {
        return this.root;
    }

    viewSlots: MainViewSlots = null;

    public getViewSlots(): MainViewSlots {
        if (this.viewSlots == null)
            this.viewSlots = new MainViewSlotsImpl(Util.createDiv());
        return this.viewSlots;
    }
}
