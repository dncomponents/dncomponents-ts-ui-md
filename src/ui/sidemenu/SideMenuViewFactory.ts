/**
 * @author nikolasavic
 */
import {ViewFactory} from 'dncomponents/lib/views/ComponentsViews';
import {SideMenuView} from 'dncomponents/lib/sidemenu/view/SideMenuView';
import {SideMenuViewImpl} from './SideMenuViewImpl';
import {MaterialUi} from '../MaterialUi';

export namespace SideMenuViewFactory {

    export class DefaultSideMenuViewFactory implements ViewFactory<SideMenuView> {

        private static instance: DefaultSideMenuViewFactory;

        private constructor() {
        }

        public static getInstance(): DefaultSideMenuViewFactory {
            if (this.instance == null)
                this.instance = new DefaultSideMenuViewFactory();
            return this.instance;
        }

        public getView(attributes: Map<String, String>, templateElement: HTMLTemplateElement): SideMenuView {
            if (templateElement == null)
                templateElement = (MaterialUi.getUi()).sidemenu;
            return new SideMenuViewImpl(templateElement);
        }

        getId(): string {
            return SideMenuViewImpl.VIEW_ID;
        }


        getClazz(): string {
            return 'SideMenuViewImpl';
        }
    }

}