import {ViewFactory} from 'dncomponents/lib/views/ComponentsViews';
import {DropDownMultiLevelUi} from 'dncomponents/lib/multi/view/DropDownMultiLevelUi';
import {DropDownMultiLevelUiImpl} from './DropDownMultiLevelUiImpl';
import {MaterialUi} from '../MaterialUi';

export namespace DropDownMultiLevelViewFactory {

    export class DefaultDropDownMultiLevelViewFactory implements ViewFactory<DropDownMultiLevelUi> {

        private static instance: DefaultDropDownMultiLevelViewFactory;

        private constructor() {
        }

        public static getInstance(): DefaultDropDownMultiLevelViewFactory {
            if (this.instance == null)
                this.instance = new DefaultDropDownMultiLevelViewFactory();
            return this.instance;
        }

        public getView(attributes: Map<string, string>, templateElement: HTMLTemplateElement): DropDownMultiLevelUi {
            if (templateElement == null)
                templateElement = (MaterialUi.getUi()).dropDownMultiLevelUi;
            return new DropDownMultiLevelUiImpl(templateElement);
        }

        public getId(): string {
            return DropDownMultiLevelUiImpl.VIEW_ID;
        }

        public getClazz(): string {
            return 'DropDownMultiLevelUiImpl';
        }
    }
}