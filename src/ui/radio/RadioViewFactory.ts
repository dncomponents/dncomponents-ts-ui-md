import {ViewFactory} from 'dncomponents/lib/views/ComponentsViews';
import {RadioView} from 'dncomponents/lib/checkbox/RadioView';
import {RadioViewImpl} from './RadioViewImpl';
import {MaterialUi} from '../MaterialUi';

export namespace RadioViewFactory {

    export class DefaultRadioViewFactory implements ViewFactory<RadioView> {

        private static instance: DefaultRadioViewFactory;

        private constructor() {
        }

        public static getInstance(): DefaultRadioViewFactory {
            if (this.instance == null)
                this.instance = new DefaultRadioViewFactory();
            return this.instance;
        }


        public getView(attributes: Map<string, string>, templateElement: HTMLTemplateElement): RadioView {
            if (templateElement == null)
                templateElement = (MaterialUi.getUi()).radio;
            return new RadioViewImpl(templateElement);
        }

        public getId(): string {
            return RadioViewImpl.VIEW_ID;
        }

        public getClazz(): string {
            return 'RadioViewImpl';
        }
    }

}