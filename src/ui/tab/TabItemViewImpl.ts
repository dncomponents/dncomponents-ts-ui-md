import {TemplateParser, UiField, UiStyle} from 'dncomponents/lib/TemplateParser';
import {Command} from 'dncomponents/lib/BaseComponent';
import {TabItemViewSlots} from 'dncomponents/lib/tab/view/TabItemViewSlots';
import {TabItemView} from 'dncomponents/lib/tab/view/TabItemView';

export class TabItemViewImpl implements TabItemView {

    @UiField
    tabItemNav: HTMLElement;
    @UiField
    tabItemPanel: HTMLElement;
    @UiField
    tabItemContent: HTMLElement;
    @UiField
    indicator: HTMLElement;
    @UiField
    iconPanel: HTMLElement;
    @UiStyle
    showTabContentStyle: string;
    @UiStyle
    active: string;
    @UiStyle
    activeIndicator: string;


    public constructor(templateElement: HTMLTemplateElement) {
        TemplateParser.create(templateElement, this, true).bind();
    }

    public addItemSelectedHandler(handler: EventListener) {
        this.tabItemNav.addEventListener('click', handler);
    }

    public select(b: boolean) {
        if (b) {
            this.tabItemNav.classList.add(this.active);
            this.indicator.classList.add(this.activeIndicator);
            this.tabItemContent.classList.add(this.showTabContentStyle);
        } else {
            this.tabItemNav.classList.remove(this.active);
            this.indicator.classList.remove(this.activeIndicator);
            this.tabItemContent.classList.remove(this.showTabContentStyle);
        }
    }

    public setItemTitle(html: string) {
        this.tabItemPanel.textContent = html;
    }

    public setItemTitleHtml(html: string) {
        this.tabItemPanel.innerHTML = html;
    }


    public setItemContent(html: string) {
        this.tabItemContent.textContent = html;
    }


    public setImmediate(command: Command) {
    }


    public getTabItemNav(): HTMLElement {
        return this.tabItemNav;
    }

    public getTabItemContent(): HTMLElement {
        return this.tabItemContent;
    }

    tabItemViewSlots: TabItemViewSlots = new TabItemViewSlotsImpl(this);


    public getViewSlots(): TabItemViewSlots {
        return this.tabItemViewSlots;
    }


    public asElement(): HTMLElement {
        return this.tabItemPanel;
    }
}

export class TabItemViewSlotsImpl implements TabItemViewSlots {
    view: TabItemViewImpl;

    constructor(view: TabItemViewImpl) {
        this.view = view;
    }

    getContent(): HTMLElement {
        return this.view.tabItemContent;
    }

    getIcon(): HTMLElement {
        return this.view.iconPanel;
    }

    getTitle(): HTMLElement {
        return this.view.tabItemPanel;
    }

}