import {ClickHandler} from 'dncomponents/lib/corecls/handlers';
import {DropDownItemView} from 'dncomponents/lib/dropdown/DropDownUi';
import {TemplateParser, UiField} from 'dncomponents/lib/TemplateParser';
import {MainViewSlots, MainViewSlotsImpl} from 'dncomponents/lib/BaseComponent';

export class DropDownItemMultiLevelViewImpl implements DropDownItemView {

    @UiField
    root: HTMLElement;

    public constructor(template: HTMLTemplateElement) {
        TemplateParser.create(template, this, true).bind();
    }

    public setContent(content: string) {
        this.root.innerHTML = '';
        this.root.innerHTML = content;
    }

    public setHtmlContent(content: HTMLElement) {
        this.root.innerHTML = '';
        this.root.appendChild(content);
    }

    public addClickHandler(clickHandler: ClickHandler) {
        clickHandler.addTo(this.asElement());
    }

    public setActive(active: boolean) {
        if (active)
            this.asElement().classList.add('active');
        else
            this.asElement().classList.remove('active');
    }

    public asElement(): HTMLElement {
        return this.root;
    }

    public getViewSlots(): MainViewSlots {
        return new MainViewSlotsImpl(this.root);
    }
}
