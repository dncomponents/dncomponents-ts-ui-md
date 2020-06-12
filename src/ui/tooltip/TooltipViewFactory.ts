import {ViewFactory} from 'dncomponents/lib/views/ComponentsViews';
import {TooltipView} from 'dncomponents/lib/tooltip/view/TooltipView';
import {TooltipViewImpl} from './TooltipViewImpl';
import {MaterialUi} from '../MaterialUi';

export namespace TooltipViewFactory {

    export class DefaultTooltipViewFactory implements ViewFactory<TooltipView<any>> {

        private static instance: DefaultTooltipViewFactory;

        private constructor() {
        }

        public static getInstance(): DefaultTooltipViewFactory {
            if (this.instance == null)
                this.instance = new DefaultTooltipViewFactory();
            return this.instance;
        }


        public getView(attributes: Map<string, string>, templateElement: HTMLTemplateElement): TooltipView<any> {
            if (templateElement == null)
                templateElement = (MaterialUi.getUi()).tooltip;
            return new TooltipViewImpl(templateElement);
        }

        public getId(): string {
            return TooltipViewImpl.VIEW_ID;
        }

        public getClazz(): string {
            return 'TooltipViewImpl';
        }
    }

}