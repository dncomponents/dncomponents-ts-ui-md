import {ViewFactory} from 'dncomponents/lib/views/ComponentsViews';
import {TreeUiImpl} from './TreeUiImpl';
import {TreeUi} from 'dncomponents/lib/tree/view/TreeUi';
import {MaterialUi} from '../MaterialUi';

export namespace TreeViewFactory {

    export class DefaultTreeViewFactory implements ViewFactory<TreeUi> {

        private static instance: DefaultTreeViewFactory;

        private constructor() {
        }

        public static getInstance(): DefaultTreeViewFactory {
            if (this.instance == null)
                this.instance = new DefaultTreeViewFactory();
            return this.instance;
        }

        public getView(attributes: Map<string, string>, templateElement: HTMLTemplateElement): TreeUi {
            if (templateElement == null)
                templateElement = (MaterialUi.getUi()).tree;
            return new TreeUiImpl(templateElement);
        }

        public getId(): string {
            return TreeUiImpl.VIEW_ID;
        }

        public getClazz(): string {
            return 'TreeUiImpl';
        }
    }

}