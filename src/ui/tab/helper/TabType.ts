import {EnumLookUp} from 'dncomponents/lib/views/ComponentsViews';
import {BaseTypeStringHasStyle} from 'dncomponents/lib/corecls/corecls';

export class TabType extends BaseTypeStringHasStyle {
    public static readonly TAB = new TabType('nav-tabs');
    public static readonly PILL = new TabType('nav-pills');
    public static lookUp: EnumLookUp<TabType> = new EnumLookUp<TabType>();
}

TabType.lookUp.init(TabType);
