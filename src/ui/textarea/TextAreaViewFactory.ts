import {ViewFactory} from 'dncomponents/lib/views/ComponentsViews';
import {TextBoxView} from 'dncomponents/lib/textbox/TextBoxView';
import {TextAreaViewBuilder, TextAreaViewImpl} from './TextAreaViewImpl';
import {TextBoxType} from '../textbox/TextBoxType';
import {TextBoxViewBuilder} from '../textbox/TextBoxViewImpl';

export namespace TextAreaViewFactory {

    export class DefaultTextAreaViewFactory implements ViewFactory<TextBoxView> {

        private static instance: DefaultTextAreaViewFactory;

        private constructor() {
        }

        public static getInstance(): DefaultTextAreaViewFactory {
            if (this.instance == null)
                this.instance = new DefaultTextAreaViewFactory();
            return this.instance;
        }

        public getView(attributes: Map<string, string>, templateElement: HTMLTemplateElement): TextBoxView {
            let type = TextBoxType.lookUp.getValue(attributes.get(TextBoxViewBuilder.typeId));
            let label = attributes.get(TextAreaViewBuilder.labelId);
            let helperText = attributes.get(TextAreaViewBuilder.helperTextId);
            let characterCounterIdString = attributes.get(TextAreaViewBuilder.characterCounterId);
            let characterCounter = 0;
            if (characterCounterIdString != null) {
                try {
                    characterCounter = parseInt(attributes.get(TextAreaViewBuilder.characterCounterId));
                } catch (ex) {
                    console.log('Error parsing characterCounterId');
                }
            }
            return TextAreaViewBuilder.get()
                .setType(type)
                .setLabel(label)
                .setHelperText(helperText)
                .setCharacterCounter(characterCounter)
                .build();
        }

        public getId(): string {
            return TextAreaViewImpl.VIEW_ID;
        }

        public getClazz(): string {
            return 'TextAreaViewImpl';
        }
    }

}