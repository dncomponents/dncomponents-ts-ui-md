import {TooltipView} from 'dncomponents/lib/tooltip/view/TooltipView';
import {TemplateParser, UiField, UiStyle} from 'dncomponents/lib/TemplateParser';
import {MainViewSlots, MainViewSlotsImpl} from 'dncomponents/lib/BaseComponent';

export class TooltipViewImpl<V extends MainViewSlots> implements TooltipView<V> {

    static readonly VIEW_ID: string = 'default';
    @UiField
    root: HTMLElement;
    @UiField
    contentPanel: HTMLElement;
    @UiField
    arrowPanel: HTMLElement;
    @UiStyle
    topStyle: string;
    @UiStyle
    bottomStyle: string;
    @UiStyle
    leftStyle: string;
    @UiStyle
    rightStyle: string;
    @UiStyle
    baseStyle: string;
    @UiStyle
    fadeStyle: string;
    @UiStyle
    showStyle: string;

    constructor();
    constructor(template?: HTMLTemplateElement);
    constructor(template?: HTMLTemplateElement) {
        if (template)
            TemplateParser.create(template, this, true).bind();
    };

    public setBottomOrientation() {
        this.asElement().className = (this.baseStyle + ' ' + this.fadeStyle + ' ' + this.bottomStyle + ' ' + this.showStyle);
    }

    public setTopOrientation() {
        this.asElement().className = (this.baseStyle + ' ' + this.fadeStyle + ' ' + this.topStyle + ' ' + this.showStyle);
    }

    public setLeftOrientation() {
        this.asElement().className = (this.baseStyle + ' ' + this.fadeStyle + ' ' + this.leftStyle + ' ' + this.showStyle);
    }

    public setRightOrientation() {
        this.asElement().className = (this.baseStyle + ' ' + this.fadeStyle + ' ' + this.rightStyle + ' ' + this.showStyle);
    }

    public calculatePositionBottom(owner: HTMLElement) {
        this.setLeftArrowPosition(this.asElement().offsetWidth / 2.0);
    }

    public calculatePositionTop(owner: HTMLElement) {
        this.setLeftArrowPosition(this.asElement().offsetWidth / 2.0);
    }

    public calculatePositionLeft(owner: HTMLElement) {
        this.setTopArrowPosition((this.asElement().offsetHeight / 2.0));
    }

    public calculatePositionRight(owner: HTMLElement) {
        this.setTopArrowPosition(this.asElement().offsetHeight / 2.0);
    }

    private scrollY(): number {
        return window.scrollY;
    }


    public setContent(text: string | HTMLElement): void {
        if (typeof text === 'string') {
            this.contentPanel.textContent = text;
        } else {
            this.contentPanel.appendChild(text);
        }
    }

    private setLeftArrowPosition(n: number) {
        // n -= (this.arrowPanel.offsetWidth / 2 | 0);
        // this.arrowPanel.style.left = n + 'px';
    }


    private setTopArrowPosition(n: number) {
        // n -= this.arrowPanel.offsetHeight / 2.0;
        // this.arrowPanel.style.top = n + 'px';
    }

    public asElement(): HTMLElement {
        return this.root;
    }

    protected slots: MainViewSlots = null;

    getViewSlots(): V {
        if (this.slots == null)
            this.slots = new MainViewSlotsImpl(this.contentPanel);
        return <V>this.slots;
    }

}
