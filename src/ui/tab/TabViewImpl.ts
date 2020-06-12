import {TabView} from 'dncomponents/lib/tab/view/TabView';
import {TemplateParser, UiField} from 'dncomponents/lib/TemplateParser';
import {TabType} from './helper/TabType';
import {Orientation} from './helper/Orientation';
import {TabUiImpl} from './TabUiImpl';
import {MaterialUi} from '../MaterialUi';

export class TabViewImpl implements TabView {

    public static VIEW_ID: string = 'default';
    @UiField
    root: HTMLElement;
    @UiField
    tabPanel: HTMLElement;
    @UiField
    tabContentPanel: HTMLElement;

    public constructor(templateElement: HTMLTemplateElement) {
        if (templateElement)
            TemplateParser.create(templateElement, this, true).bind();
    }

    public asElement(): HTMLElement {
        return this.root;
    }

    public addItem(tabItem: HTMLElement, tabContent: HTMLElement) {
        this.tabPanel.appendChild(tabItem);
        this.tabContentPanel.appendChild(tabContent);
    }

    public removeItem(tabItem: HTMLElement, tabContent: HTMLElement) {
        tabItem.remove();
        tabContent.remove();
    }
}

export namespace TabViewImpl {
    export class Builder {
        private static BASE_STYLE = 'nav';

        private __orientation: Orientation;
        private __type: TabType;
        //parser
        public static orientationId = 'orientation';
        public static typeId = 'type';

        private constructor() {
        }

        public static get(): Builder {
            return new Builder();
        }

        public orientation(orientation: Orientation): Builder {
            this.__orientation = orientation;
            return this;
        }

        public type(type: TabType): Builder {
            this.__type = type;
            return this;
        }

        public build(): TabViewImpl {
            let tabView;
            if (this.__type == null)
                this.__type = TabType.TAB;
            if (this.__orientation == Orientation.VERTICAL) {
                let template = new TemplateParser(MaterialUi.getUi().tabUi, true);
                tabView = new TabViewImpl(template.getElement(TabUiImpl.TAB_VERTICAL));
            } else {
                let template = new TemplateParser(MaterialUi.getUi().tabUi, true);
                tabView = new TabViewImpl(template.getElement(TabUiImpl.TAB));
            }
            return tabView;
        }

    }
}