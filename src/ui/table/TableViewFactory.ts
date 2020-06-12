import {ViewFactory} from 'dncomponents/lib/views/ComponentsViews';
import {TableUiImpl} from './TableUiBs';
import {TableUi} from 'dncomponents/lib/table/views/TableUi';
import {MaterialUi} from '../MaterialUi';

export namespace TableViewFactory {

    export class DefaultTableViewFactory implements ViewFactory<TableUi> {

        private static instance: DefaultTableViewFactory;

        private constructor() {
        }

        public static getInstance(): DefaultTableViewFactory {
            if (this.instance == null)
                this.instance = new DefaultTableViewFactory();
            return this.instance;
        }

        public getView(attributes: Map<string, string>, templateElement: HTMLTemplateElement): TableUi {
            if (templateElement == null)
                templateElement = (MaterialUi.getUi()).tableUi;
            return new TableUiImpl(templateElement);
        }

        public getId(): string {
            return TableUiImpl.VIEW_ID;
        }

        public getClazz(): string {
            return 'TableUiImpl';
        }
    }
}