import {AccordionItemView, AccordionItemViewSlots} from "dncomponents/lib/accordion/accrodion_views";
import {TemplateParser, UiField, UiStyle} from "dncomponents/lib/TemplateParser";
import {Command} from "dncomponents/lib/BaseComponent";
import {Util} from "dncomponents/lib/corecls/Util";

export class AccordionItemViewImpl implements AccordionItemView {

    @UiField
    root: HTMLElement;
    @UiField
    accordionItemTitle: HTMLElement;
    @UiField
    accordionItemTitlePanel: HTMLElement;
    @UiField
    contentPanel: HTMLElement;
    @UiField
    contentPanelParent: HTMLElement;
    @UiStyle
    showContentStyle: string;

    constructor();
    constructor(template?: HTMLTemplateElement);
    constructor(template?: HTMLTemplateElement) {
        TemplateParser.create(template, this, true).bind();
    };


    public addItemSelectedHandler(handler: EventListener): void {
        this.accordionItemTitlePanel.addEventListener('click', handler);
    }


    public select(b: boolean): void {
        if (b)
            this.contentPanelParent.classList.add(this.showContentStyle);
        else
            this.contentPanelParent.classList.remove(this.showContentStyle);
    }


    public setImmediate(cmd: Command): void {

    }


    public getTitle(): string {
        return this.accordionItemTitle.innerHTML;
    }


    public getContent(): string {
        return this.contentPanel.innerHTML;
    }


    public getViewSlots(): AccordionItemViewSlots {
        return this.accordionItemViewSlots;
    }

    private accordionItemViewSlots: AccordionItemViewSlots = new AccordionItemViewSlotsImpl(this);


    public asElement(): HTMLElement {
        return this.root;
    }

    setItemContent(html: string): void;
    setItemContent(htmlElement: HTMLElement): void;
    setItemContent(html: string | HTMLElement): void {
        this.setHtml(html, this.contentPanel);
    }

    setItemTitle(html: String): void;
    setItemTitle(html: HTMLElement): void;
    setItemTitle(html: String | HTMLElement): void {
        this.setHtml(html, this.accordionItemTitle);
    }

    private setHtml(html: String | HTMLElement, target: HTMLElement): void {
        if (Util.isString(html)) {
            target.innerHTML = '';
            target.innerHTML = html;
        } else if (html instanceof HTMLElement) {
            target.innerHTML = html.innerHTML;
            target.innerHTML = html.innerHTML;
        }
    }
}

export class AccordionItemViewSlotsImpl implements AccordionItemViewSlots {
    view: AccordionItemViewImpl;

    constructor(view: AccordionItemViewImpl) {
        this.view = view;
    }

    getContent(): HTMLElement {
        return this.view.contentPanel;
    }

    getTitle(): HTMLElement {
        return this.view.accordionItemTitle;
    }

}