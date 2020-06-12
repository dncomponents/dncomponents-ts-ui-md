import {ListView} from 'dncomponents/lib/list/ListUi';
import {Util} from 'dncomponents/lib/corecls/Util';
import {HandlerRegistration} from 'dncomponents/lib/corecls/events';
import {KeyDownHandler, ScrollHandler} from 'dncomponents/lib/corecls/handlers';
import {TemplateParser, UiField, UiStyle} from 'dncomponents/lib/TemplateParser';

export class ListViewImpl implements ListView {
    @UiField
    public root: HTMLElement;

    @UiStyle
    rowHeight: string;

    currentScrollTop: number=0;

    @UiStyle
    scrollableStyle: string;

    constructor();
    constructor(template?: HTMLTemplateElement);
    constructor(template?: HTMLTemplateElement) {
        if (template)
            TemplateParser.create(template, this, true).bind();
        this.init();
    }

    init() {
        this.addScrollHandler(ScrollHandler.onScroll(evt => {
            this.currentScrollTop = this.getScrollTop();
        }))
    }

    public addItem(element: Element) {
        this.getItemPanel().appendChild(element);
    }

    public clear() {
        this.getItemPanel().innerHTML = '';
    }

    public setScrollable(b: boolean) {
        if (b) this.getItemPanel().classList.add(this.scrollableStyle); else this.getItemPanel().classList.remove(this.scrollableStyle);
    }

    public setScrollHeight(height: string) {
        Util.setMaxHeight(this.root, height);
    }

    public addScrollHandler(scrollHandler: ScrollHandler): HandlerRegistration {
        return scrollHandler.addTo(this.getItemPanel());
    }

    public getScrollTop(): number {
        return this.getScrollPanel().scrollTop;
    }

    public resetScrollTop(value: number) {
        if (value == null) this.getScrollPanel().scrollTop = this.currentScrollTop; else this.getScrollPanel().scrollTop = value;
    }

    public getScrollPanel(): HTMLElement {
        return this.root;
    }

    public createEmptyRow(): HTMLElement {
        return Util.createLi();
    }

    public getRowHeight(): number {
        return parseInt(this.rowHeight);
    }

    public addKeyDownHandler(keyDownHandler: KeyDownHandler): HandlerRegistration {
        return keyDownHandler.addTo(this.root);
    }

    public asElement(): HTMLElement {
        return this.root;
    }

    getItemPanel(): HTMLElement {
        return this.root;
    }
}