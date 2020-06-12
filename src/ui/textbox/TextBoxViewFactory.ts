import {ViewFactory} from 'dncomponents/lib/views/ComponentsViews';
import {TextBoxView} from 'dncomponents/lib/textbox/TextBoxView';
import {TextBoxViewBuilder, TextBoxViewImpl} from './TextBoxViewImpl';
import {TextBoxType} from './TextBoxType';
import {MaterialIcons} from '../button/MaterialIcons';

export namespace TextBoxViewFactory {

    export class DefaultTextBoxViewFactory implements ViewFactory<TextBoxView> {

        private static instance: DefaultTextBoxViewFactory;

        private constructor() {
        }

        public static getInstance(): DefaultTextBoxViewFactory {
            if (this.instance == null)
                this.instance = new DefaultTextBoxViewFactory();
            return this.instance;
        }


        public getView(attributes: Map<string, string>, templateElement: HTMLTemplateElement): TextBoxView {
            let type = TextBoxType.lookUp.getValue(attributes.get(TextBoxViewBuilder.typeId));
            let label = attributes.get(TextBoxViewBuilder.labelId);
            let leadingIcon = MaterialIcons.get(attributes.get(TextBoxViewBuilder.leadingIconId));
            let trailingIcon = MaterialIcons.get(attributes.get(TextBoxViewBuilder.trailingIconId));
            let helperText = attributes.get(TextBoxViewBuilder.helperTextId);
            let characterCounterIdString = attributes.get(TextBoxViewBuilder.characterCounterId);
            let characterCounter = 0;
            if (characterCounterIdString != null) {
                try {
                    characterCounter = parseInt(attributes.get(TextBoxViewBuilder.characterCounterId));
                } catch (ex) {
                    console.log('Error parsing characterCounterId');
                }
            }
            return TextBoxViewBuilder.get()
                .setType(type)
                .setLabel(label)
                .setLeadingIcon(leadingIcon)
                .setTrailingIcon(trailingIcon)
                .setHelperText(helperText)
                .setCharacterCounter(characterCounter)
                .build();
        }

        public getId(): string {
            return TextBoxViewImpl.VIEW_ID;
        }

        public getClazz(): string {
            return 'TextBoxViewImpl';
        }
    }

}