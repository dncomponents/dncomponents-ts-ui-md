import {ClickHandler, MouseEnterHandler, MouseLeaveHandler} from 'dncomponents/lib/corecls/handlers';
import {DropDownItemMultiLevelParentView} from 'dncomponents/lib/multi/view/DropDownMultiLevelUi';
import {TemplateParser, UiField} from 'dncomponents/lib/TemplateParser';
import {MainViewSlots, MainViewSlotsImpl} from 'dncomponents/lib/BaseComponent';

export class DropDownItemMultiLevelParentViewImpl implements DropDownItemMultiLevelParentView {

    @UiField
    root: HTMLElement;
    @UiField
    textPanel: HTMLElement;

    public constructor(template: HTMLTemplateElement) {
        TemplateParser.create(template, this, true).bind();
    }

    public setContent(content: string) {
        this.textPanel.innerHTML = '';
        this.textPanel.innerHTML = content;
    }

    public setHtmlContent(content: HTMLElement) {
        this.textPanel.innerHTML = '';
        this.textPanel.appendChild(content);
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
        return new MainViewSlotsImpl(this.textPanel);
    }

    public addMouseLeaveHandler(mouseLeaveHandler: MouseLeaveHandler) {
        mouseLeaveHandler.addTo(this.asElement());
    }

    public addMouseEnterHandler(mouseEnterHandler: MouseEnterHandler) {
        mouseEnterHandler.addTo(this.asElement());
    }
}

