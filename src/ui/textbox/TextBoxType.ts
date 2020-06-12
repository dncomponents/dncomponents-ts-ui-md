import {BaseTypeHasStyle} from 'dncomponents/lib/corecls/corecls';
import {TextBoxBuilderConst} from './TextBoxBuilderConst';
import {EnumLookUp} from 'dncomponents/lib/views/ComponentsViews';

export class TextBoxType extends BaseTypeHasStyle {
    public static readonly OUTLINED: TextBoxType = new TextBoxType(() => TextBoxBuilderConst.getInstance().outlined);
    public static readonly FILLED: TextBoxType = new TextBoxType(() => ' ');
    public static lookUp: EnumLookUp<TextBoxType> = new EnumLookUp<TextBoxType>();
}

TextBoxType.lookUp.init(TextBoxType);