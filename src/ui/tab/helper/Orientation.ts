import {EnumLookUp} from 'dncomponents/lib/views/ComponentsViews';
import {BaseTypeStringHasStyle} from 'dncomponents/lib/corecls/corecls';

export class Orientation extends BaseTypeStringHasStyle {
    public static readonly HORIZONTAL = new Orientation('');
    public static readonly VERTICAL = new Orientation('flex-column');
    public static lookUp: EnumLookUp<Orientation> = new EnumLookUp<Orientation>();
}

Orientation.lookUp.init(Orientation);
