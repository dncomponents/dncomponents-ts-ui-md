import {ViewFactory} from 'dncomponents/lib/views/ComponentsViews';
import {ButtonViewImpl} from './ButtonViewImpl';
import {ButtonType} from './ButtonType';
import {MaterialIcons} from './MaterialIcons';
import {ButtonView} from 'dncomponents/lib/button/view/ButtonView';
import {ButtonBuilder} from './ButtonBuilder';

export namespace ButtonViewFactory {

    export class DefaultButtonViewFactory implements ViewFactory<ButtonView> {

        private static instance: DefaultButtonViewFactory;

        private constructor() {
        }

        public static getInstance(): DefaultButtonViewFactory {
            if (this.instance == null)
                this.instance = new DefaultButtonViewFactory();
            return this.instance;
        }

        public getView(attributes: Map<string, string>, templateElement: HTMLTemplateElement): ButtonView {
            let buttonType = ButtonType.lookUp.getValue(attributes.get(ButtonBuilder.typeId));
            let leadingIcon = MaterialIcons.get(attributes.get(ButtonBuilder.iconId));
            let label = attributes.get(ButtonBuilder.labelId);
            return ButtonBuilder.get()
                .type(buttonType)
                .setLabel(label)
                .setIcon(leadingIcon)
                .build();
        }

        public getId(): string {
            return ButtonViewImpl.VIEW_ID;
        }

        public getClazz(): string {
            return 'ButtonViewImpl';
        }
    }

}