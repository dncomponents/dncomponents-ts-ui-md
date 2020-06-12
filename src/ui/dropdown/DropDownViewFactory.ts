import {ViewFactory} from 'dncomponents/lib/views/ComponentsViews';
import {MaterialUi} from '../MaterialUi';
import {DropDownUi} from 'dncomponents/lib/dropdown/DropDownUi';
import {DropDownUiImpl} from './DropDownUiImpl';

export namespace DropDownViewFactory {

    export class DefaultDropDownViewFactory implements ViewFactory<DropDownUi> {

        private static instance: DefaultDropDownViewFactory;

        private constructor() {
        }

        public static getInstance(): DefaultDropDownViewFactory {
            if (this.instance == null)
                this.instance = new DefaultDropDownViewFactory();
            return this.instance;
        }


        public getView(attributes: Map<string, string>, templateElement: HTMLTemplateElement): DropDownUi {
            if (templateElement == null)
                templateElement = (MaterialUi.getUi()).dropDownUi;
            return new DropDownUiImpl(templateElement);
        }

        public getId(): string {
            return DropDownUiImpl.VIEW_ID;
        }

        public getClazz(): string {
            return 'DropDownUiImpl';
        }
    }

}