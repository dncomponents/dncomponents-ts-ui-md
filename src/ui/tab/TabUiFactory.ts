import {TabUiImpl} from './TabUiImpl';
import {ViewFactory} from 'dncomponents/lib/views/ComponentsViews';
import {TabUi} from 'dncomponents/lib/tab/view/TabUi';
import {TabType} from './helper/TabType';
import {TabViewImpl} from './TabViewImpl';
import {Orientation} from './helper/Orientation';

export namespace TabUiFactory {

    export class DefaultTabUiFactory implements ViewFactory<TabUi> {

        static instance: TabUiFactory.DefaultTabUiFactory = null;

        private constructor() {
        }

        public static getInstance(): TabUiFactory.DefaultTabUiFactory {
            if (DefaultTabUiFactory.instance == null)
                DefaultTabUiFactory.instance = new TabUiFactory.DefaultTabUiFactory();
            return DefaultTabUiFactory.instance;
        }

        public getView(attributes: Map<string, string>, templateElement: HTMLTemplateElement): TabUi {
            let type: TabType = TabType.lookUp.getValue(attributes.get(TabViewImpl.Builder.typeId));
            let orientation: Orientation = Orientation.lookUp.getValue(attributes.get(TabViewImpl.Builder.orientationId));
            return TabUiImpl.Builder.get()
                .template(templateElement)
                .orientation(orientation)
                .type(type)
                .build();
        }

        public getId(): string {
            return TabUiImpl.UI_ID;
        }

        public getClazz(): string {
            return 'TabUiImpl';
        }
    }
}