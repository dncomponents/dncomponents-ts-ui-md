import {BaseTypeHasStyle} from 'dncomponents/lib/corecls/corecls';
import {TextBoxBuilderConst} from './TextBoxBuilderConst';
import {EnumLookUp} from 'dncomponents/lib/views/ComponentsViews';

export class TextBoxProperty extends BaseTypeHasStyle {
    public static readonly FULL_WIDTH: TextBoxProperty = new TextBoxProperty(() => TextBoxBuilderConst.getInstance().fullwidth);
    public static readonly DENSE: TextBoxProperty = new TextBoxProperty(() => TextBoxBuilderConst.getInstance().dense);
    public static lookUp: EnumLookUp<TextBoxProperty> = new EnumLookUp<TextBoxProperty>();
}
TextBoxProperty.lookUp.init(TextBoxProperty);