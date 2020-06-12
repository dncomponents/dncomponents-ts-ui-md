import {EnumLookUp} from 'dncomponents/lib/views/ComponentsViews';
import {ButtonBuilderConst} from './ButtonBuilderConst';
import {BaseTypeHasStyle} from 'dncomponents/lib/corecls/corecls';

/**
 * @author nikolasavic
 */
export class ButtonType extends BaseTypeHasStyle {
    public static readonly TEXT: ButtonType = new ButtonType(() => '');
    public static readonly RAISED: ButtonType = new ButtonType(() => ButtonBuilderConst.getInstance().raised);
    public static readonly UNELEVATED: ButtonType = new ButtonType(() => ButtonBuilderConst.getInstance().unelevated);
    public static readonly OUTLINED: ButtonType = new ButtonType(() => ButtonBuilderConst.getInstance().outlined);
    public static lookUp: EnumLookUp<ButtonType> = new EnumLookUp<ButtonType>();
}

ButtonType.lookUp.init(ButtonType);