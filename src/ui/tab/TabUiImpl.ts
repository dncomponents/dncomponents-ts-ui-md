import {TemplateParser, UiField} from 'dncomponents/lib/TemplateParser';
import {TabView} from 'dncomponents/lib/tab/view/TabView';
import {TabItemView} from 'dncomponents/lib/tab/view/TabItemView';
import {TabItemViewImpl} from './TabItemViewImpl';
import {TabViewImpl} from './TabViewImpl';
import {TabUi} from 'dncomponents/lib/tab/view/TabUi';
import {TabType} from './helper/TabType';
import {Orientation} from './helper/Orientation';
import {MaterialUi} from '../MaterialUi';

export class TabUiImpl implements TabUi {

    public static UI_ID: string = 'default';

    public static TAB: string = 'tab';

    public static TAB_VERTICAL: string = 'tabVertical';

    @UiField
    tab: HTMLTemplateElement;
    @UiField
    tabItem: HTMLTemplateElement;

    private tabView: TabView;

    public constructor(templateElement: HTMLTemplateElement) {
        TemplateParser.create(templateElement, this, true).bind();
    }

    public getTabItemView(): TabItemView {
        return new TabItemViewImpl(this.tabItem);
    }

    public getRootView(): TabView {
        if (this.tabView == null)
            this.tabView = new TabViewImpl(this.tab);
        return this.tabView;
    }

    asElement(): HTMLElement {
        return this.getRootView().asElement();
    }
}

export namespace TabUiImpl {
    export class Builder {
        private __orientation: Orientation;
        private __type: TabType;
        templateElement: HTMLTemplateElement;

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

        public template(templateElement: HTMLTemplateElement): Builder {
            this.templateElement = templateElement;
            return this;
        }

        public build(): TabUiImpl {
            if (this.templateElement == null)
                this.templateElement = MaterialUi.getUi().tabUi;
            let tabUi = new TabUiImpl(this.templateElement);
            let tabView = TabViewImpl.Builder.get().orientation(this.__orientation).type(this.__type).build();
            return tabUi;
        }


    }
}