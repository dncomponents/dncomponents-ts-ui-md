import {
    DropDownItemMultiLevelParentView,
    DropDownMultiLevelUi,
    DropDownTreeNodePanelView
} from 'dncomponents/lib/multi/view/DropDownMultiLevelUi';
import {DropDownItemView, DropDownView} from 'dncomponents/lib/dropdown/DropDownUi';
import {DropDownItemMultiLevelViewImpl} from './DropDownItemMultiLevelViewImpl';
import {DropDownItemMultiLevelParentViewImpl} from './DropDownItemMultiLevelParentViewImpl';
import {DropDownTreeNodePanelViewImpl} from './DropDownTreeNodePanelViewImpl';
import {DropDownMultilevelViewImpl} from './DropDownMultilevelViewImpl';
import {TemplateParser, UiField} from 'dncomponents/lib/TemplateParser';

export class DropDownMultiLevelUiImpl implements DropDownMultiLevelUi {

    static readonly VIEW_ID: string = 'default';
    @UiField
    dropdown: HTMLTemplateElement;
    @UiField
    dropdownItem: HTMLTemplateElement;
    @UiField
    dropdownItemHasChildren: HTMLTemplateElement;
    @UiField
    dropdownPanelHasChildren: HTMLTemplateElement;
    dropDownView: DropDownView;


    public constructor(template: HTMLTemplateElement) {
        TemplateParser.create(template, this, true).bind();
    }


    public getDropDownItemView(): DropDownItemView {
        return new DropDownItemMultiLevelViewImpl(this.dropdownItem);
    }


    public getDropDownItemMultiLevelParentView(): DropDownItemMultiLevelParentView {
        return new DropDownItemMultiLevelParentViewImpl(this.dropdownItemHasChildren);
    }

    public getDropDownTreeNodePanelView(): DropDownTreeNodePanelView {
        return new DropDownTreeNodePanelViewImpl(this.dropdownPanelHasChildren);
    }

    public getRootView(): DropDownView {
        if (this.dropDownView == null)
            this.dropDownView = new DropDownMultilevelViewImpl(this.dropdown);
        return this.dropDownView;
    }

    asElement(): HTMLElement {
        return this.getRootView().asElement();
    }
}
