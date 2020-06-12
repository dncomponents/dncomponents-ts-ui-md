import {DialogView} from 'dncomponents/lib/modal/view/DialogView';
import {IsElement} from 'dncomponents/lib/corecls/IsElement';
import {ClickHandler} from 'dncomponents/lib/corecls/handlers';
import {Util} from 'dncomponents/lib/corecls/Util';
import {DialogViewSlots} from 'dncomponents/lib/modal/view/DialogViewSlots';
import {TemplateParser, UiField, UiStyle} from 'dncomponents/lib/TemplateParser';

export class DialogViewImpl implements DialogView {

    static readonly VIEW_ID: string = 'default';
    @UiField
    public root: HTMLElement;
    @UiField
    public header: HTMLElement;
    @UiField
    public body: HTMLElement;
    @UiField
    public footer: HTMLElement;
    @UiField
    public closeButton: HTMLElement;
    @UiField
    public titleHeader: HTMLElement;
    @UiStyle
    showDialogStyle: string;

    constructor(template: HTMLTemplateElement) {
        TemplateParser.create(template, this, true).bind();
    }


    public setHeader(element: IsElement<any>) {
        this.header.innerHTML = '';
        this.header.appendChild(element.asElement());
    }

    public setContent(element: HTMLElement) {
        this.body.innerHTML = '';
        this.body.appendChild(element);
    }


    public setTitle(title: string) {
        this.titleHeader.innerHTML = title;
    }

    public setFooter(el: IsElement<any>) {
        this.footer.innerHTML = '';
        this.footer.appendChild(el.asElement());
    }

    public addCloseHandler(onCloseCmd: () => void) {
        let clkHandler: ClickHandler = ClickHandler.onClick(evt => {
            evt.stopImmediatePropagation();
            onCloseCmd();
        });
        Util.addHandler(this.closeButton, clkHandler);
    }

    public show() {
        this.root.classList.add(this.showDialogStyle);
    }


    public hide() {
        this.root.classList.remove(this.showDialogStyle);
    }

    public addFooterElement(element: HTMLElement) {
        this.footer.appendChild(element);
    }

    public clearFooter() {
        this.footer.innerHTML = '';
    }

    public setWidth(width: string) {
    }

    public setHeight(height: string) {
    }

    public setBackDrop(backdrop: boolean) {
    }

    public setCloseOnEscape(closeOnEscape: boolean) {
    }

    public setDraggable(draggable: boolean) {
    }

    public setPosition(top: number, left: number) {
    }

    public getTopPosition(): number {
        return 0;
    }

    public getLeftPosition(): number {
        return 0;
    }


    public asElement(): HTMLElement {
        return this.root;
    }

    viewSlots: Slots = new Slots(this);

    public getViewSlots(): DialogViewSlots {
        return this.viewSlots;
    }

}

class Slots implements DialogViewSlots {
    view: DialogViewImpl;

    constructor(view: DialogViewImpl) {
        this.view = view;
    }

    getContentPanel(): HTMLElement {
        return this.view.body;
    }

    getFooterPanel(): HTMLElement {
        return this.view.footer;
    }

    getHeaderPanel(): HTMLElement {
        return this.view.header;
    }

}