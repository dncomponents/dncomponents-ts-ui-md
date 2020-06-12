import {ViewFactory} from 'dncomponents/lib/views/ComponentsViews';
 import {DialogView} from 'dncomponents/lib/modal/view/DialogView';
import {DialogViewImpl} from './DialogViewImpl';
import {MaterialUi} from '../MaterialUi';

export namespace DialogViewFactory {

    export class DefaultDialogViewFactory implements ViewFactory<DialogView> {

        private static instance: DefaultDialogViewFactory;

        private constructor() {
        }

        public static getInstance(): DefaultDialogViewFactory {
            if (this.instance == null)
                this.instance = new DefaultDialogViewFactory();
            return this.instance;
        }

        public getView(attributes: Map<string, string>, templateElement: HTMLTemplateElement): DialogView {
            if (templateElement == null)
                templateElement = (MaterialUi.getUi()).modalDialog;
            return new DialogViewImpl(templateElement);
        }

        public getId(): string {
            return DialogViewImpl.VIEW_ID;
        }

        public getClazz(): string {
            return 'DialogViewImpl';
        }
    }
}