import {ProgressBuilderConst} from './ProgressBuilderConst';
import {EnumLookUp} from 'dncomponents/lib/views/ComponentsViews';
import {BaseTypeHasStyle} from 'dncomponents/lib/corecls/corecls';

export class ProgressBarTypes extends BaseTypeHasStyle {
    public static readonly STANDARD: ProgressBarTypes = new ProgressBarTypes(() => '');
    public static readonly INDETERMINATE: ProgressBarTypes = new ProgressBarTypes(() => ProgressBuilderConst.getInstance().indeterminate);
    public static readonly REVERSED: ProgressBarTypes = new ProgressBarTypes(() => ProgressBuilderConst.getInstance().reversed);
    public static lookUp: EnumLookUp<ProgressBarTypes> = new EnumLookUp<ProgressBarTypes>();

}

ProgressBarTypes.lookUp.init(ProgressBarTypes);