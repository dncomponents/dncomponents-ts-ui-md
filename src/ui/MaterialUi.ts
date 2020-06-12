import {TemplateParser, UiField, UiStyle} from 'dncomponents/lib/TemplateParser';
import {SetMultimap} from '@teppeis/multimaps';
import {ComponentsViews, IconRenderer, TemplateMap, ViewFactory} from 'dncomponents/lib/views/ComponentsViews';
import {Ui} from 'dncomponents/lib/views/Ui';
import {AccordionViewFactory} from './accordion/AccordionViewFactory';
import {AccordionUi} from 'dncomponents/lib/accordion/accrodion_views';
import {AutocompleteMultiSelectView} from 'dncomponents/lib/autocomplete/views/AutocompleteMultiSelectView';
import {AutocompleteTreeView} from 'dncomponents/lib/autocomplete/views/AutocompleteTreeView';
import {AutocompleteView} from 'dncomponents/lib/autocomplete/views/AutocompleteView';
import {ButtonView} from 'dncomponents/lib/button/view/ButtonView';
import {CheckBoxView} from 'dncomponents/lib/checkbox/CheckBoxView';
import {DropDownMultiLevelUi} from 'dncomponents/lib/multi/view/DropDownMultiLevelUi';
import {DropDownUi} from 'dncomponents/lib/dropdown/DropDownUi';
import {ListUi} from 'dncomponents/lib/list/ListUi';
import {DialogView} from 'dncomponents/lib/modal/view/DialogView';
import {FilterPanelView, PagerUi, TableUi, TableView} from 'dncomponents/lib/table/views/TableUi';
import {PopoverView} from 'dncomponents/lib/popover/view/PopoverView';
import {ProgressView} from 'dncomponents/lib/progress/view/ProgressView';
import {RadioView} from 'dncomponents/lib/checkbox/RadioView';
import {SideMenuView} from 'dncomponents/lib/sidemenu/view/SideMenuView';
import {TabUi} from 'dncomponents/lib/tab/view/TabUi';
import {TableTreeUi} from 'dncomponents/lib/table/TableTreeUi';
import {TextBoxView} from 'dncomponents/lib/textbox/TextBoxView';
import {TooltipView} from 'dncomponents/lib/tooltip/view/TooltipView';
import {MainViewSlots} from 'dncomponents/lib/BaseComponent';
import {TreeUi} from 'dncomponents/lib/tree/view/TreeUi';
import {AccordionUiImpl} from './accordion/AccordionUiImpl';
import {TreeUiImpl} from './tree/TreeUiImpl';
import {SideMenuViewFactory} from './sidemenu/SideMenuViewFactory';
import {ButtonViewFactory} from './button/ButtonViewFactory';
import {TreeViewFactory} from './tree/TreeViewFactory';
import {RadioViewFactory} from './radio/RadioViewFactory';
import {CheckBoxViewFactory} from './checkbox/CheckBoxViewFactory';
import {DropDownViewFactory} from './dropdown/DropDownViewFactory';
import {AutocompleteViewFactory} from './autocomplete/AutocompleteViewFactory';
import {TabUiFactory} from './tab/TabUiFactory';
import {DialogViewFactory} from './dialog/DialogViewFactory';
import {ListDataViewFactory} from './list/ListDataViewFactory';
import {PopoverViewFactory} from './popover/PopoverViewFactory';
import {TableViewFactory} from './table/TableViewFactory';
import {TextAreaViewFactory} from './textarea/TextAreaViewFactory';
import {TextBoxViewFactory} from './textbox/TextBoxViewFactory';
import {TooltipViewFactory} from './tooltip/TooltipViewFactory';
import {ButtonViewImpl} from './button/ButtonViewImpl';
import {AutocompleteListOrTreeMultiSelectViewImpl} from './autocomplete/AutocompleteListOrTreeMultiSelectViewImpl';
import {AutocompleteViewImpl} from './autocomplete/AutocompleteViewImpl';
import {AutocompleteTreeViewImpl} from './autocomplete/AutocompleteTreeViewImpl';
import {CheckBoxViewImpl} from './checkbox/CheckBoxViewImpl';
import {DropDownMultiLevelUiImpl} from './multilevel/DropDownMultiLevelUiImpl';
import {DropDownUiImpl} from './dropdown/DropDownUiImpl';
import {ListUiImpl} from './list/ListUiImpl';
import {TextBoxViewImpl} from './textbox/TextBoxViewImpl';
import {TooltipViewImpl} from './tooltip/TooltipViewImpl';
import {TextAreaViewImpl} from './textarea/TextAreaViewImpl';
import {TableUiImpl} from './table/TableUiBs';
import {TabUiImpl} from './tab/TabUiImpl';
import {SideMenuViewImpl} from './sidemenu/SideMenuViewImpl';
import {RadioViewImpl} from './radio/RadioViewImpl';
import {PopoverViewImpl} from './popover/PopoverViewImpl';
import {PagerUiImpl} from './table/pager/PagerUiImpl';
import {DialogViewImpl} from './dialog/DialogViewImpl';
import {ProgressViewFactory, ProgressViewImpl} from './progress/ProgressViewImpl';
import {FilterPanelViewImplList} from './table/FilterPanelViewImplList';
import {DropDownMultiLevelViewFactory} from "./multilevel/DropDownMultiLevelViewFactory";
import {Util} from "dncomponents/lib/corecls/Util";
import {MaterialUiHtml} from "./MaterialUiHtml";

export class MaterialUi implements ComponentsViews {

    @UiStyle
    rowHeight: string;
    @UiField
    public dropDownUi: HTMLTemplateElement;
    @UiField
    public accordionUi: HTMLTemplateElement;
    @UiField
    public button: HTMLTemplateElement;
    @UiField
    public textbox: HTMLTemplateElement;
    @UiField
    public textarea: HTMLTemplateElement;
    @UiField
    public radio: HTMLTemplateElement;
    @UiField
    public checkbox: HTMLTemplateElement;
    @UiField
    public simplecheckbox: HTMLTemplateElement;
    @UiField
    public popover: HTMLTemplateElement;
    @UiField
    public tooltip: HTMLTemplateElement;
    @UiField
    public modalDialog: HTMLTemplateElement;
    @UiField
    public tabUi: HTMLTemplateElement;
    @UiField
    public progress: HTMLTemplateElement;
    @UiField
    public progressBuilder: HTMLTemplateElement;
    @UiField
    public treeCellIconView: HTMLTemplateElement;
    @UiField
    public treeCellParentIconView: HTMLTemplateElement;
    @UiField
    public buttonBuilder: HTMLTemplateElement;
    @UiField
    public textBoxBuilder: HTMLTemplateElement;
    @UiField
    public helperText: HTMLTemplateElement;
    @UiField
    public textboxOutLined: HTMLTemplateElement;
    @UiField
    public listCellIconView: HTMLTemplateElement;
    @UiField
    public filterPanelList: HTMLTemplateElement;
    @UiField
    public list: HTMLTemplateElement;
    @UiField
    public tree: HTMLTemplateElement;
    @UiField
    public tableUi: HTMLTemplateElement;
    @UiField
    public dropDownMultiLevelUi: HTMLTemplateElement;
    @UiField
    public autocomplete: HTMLTemplateElement;
    @UiField
    public autocompleteTree: HTMLTemplateElement;
    @UiField
    public autocompleteMultiSelect: HTMLTemplateElement;
    @UiField
    public pagerUi: HTMLTemplateElement;
    @UiField
    public pagerListUi: HTMLTemplateElement;
    @UiField
    public sidemenu: HTMLTemplateElement;

    public static getUi<S extends MaterialUi>(): S {
        return <S>Ui.get();
    }

    constructor() {
        let template = Util.createTemplate();
        template.innerHTML = MaterialUiHtml.ui;
        TemplateParser.create(template, this, true).bind();

        this.registeredViewFactoriesList.put('Accordion', AccordionViewFactory.DefaultAccordionViewFactory.getInstance());
        this.registeredViewFactoriesList.put('Autocomplete', AutocompleteViewFactory.DefaultAutocompleteViewFactory.getInstance());
        this.registeredViewFactoriesList.put('Button', ButtonViewFactory.DefaultButtonViewFactory.getInstance());
        this.registeredViewFactoriesList.put('CheckBox', CheckBoxViewFactory.DefaultCheckBoxViewFactory.getInstance());
        this.registeredViewFactoriesList.put('CheckBox', CheckBoxViewFactory.DefaultSimpleCheckBoxViewFactory.getInstance());
        this.registeredViewFactoriesList.put('Dialog', DialogViewFactory.DefaultDialogViewFactory.getInstance());
        this.registeredViewFactoriesList.put('DropDown', DropDownViewFactory.DefaultDropDownViewFactory.getInstance());
        this.registeredViewFactoriesList.put('DropDownMultiLevel', DropDownMultiLevelViewFactory.DefaultDropDownMultiLevelViewFactory.getInstance());
        this.registeredViewFactoriesList.put('ListData', ListDataViewFactory.DefaultListDataViewFactory.getInstance());
        this.registeredViewFactoriesList.put('Popover', PopoverViewFactory.DefaultPopoverViewFactory.getInstance());
        this.registeredViewFactoriesList.put('Progress', ProgressViewFactory.getInstance());
        this.registeredViewFactoriesList.put('Radio', RadioViewFactory.DefaultRadioViewFactory.getInstance());
        this.registeredViewFactoriesList.put('SideMenu', SideMenuViewFactory.DefaultSideMenuViewFactory.getInstance());
        this.registeredViewFactoriesList.put('Tab', TabUiFactory.DefaultTabUiFactory.getInstance());
        this.registeredViewFactoriesList.put('Table', TableViewFactory.DefaultTableViewFactory.getInstance());
        this.registeredViewFactoriesList.put('TextArea', TextAreaViewFactory.DefaultTextAreaViewFactory.getInstance());
        this.registeredViewFactoriesList.put('TextBox', TextBoxViewFactory.DefaultTextBoxViewFactory.getInstance());
        this.registeredViewFactoriesList.put('Tooltip', TooltipViewFactory.DefaultTooltipViewFactory.getInstance());
        this.registeredViewFactoriesList.put('Tree', TreeViewFactory.DefaultTreeViewFactory.getInstance());
    }

    registeredViewFactoriesList = new SetMultimap<string, ViewFactory<any>>();
    registeredTemplateList = new SetMultimap<string, TemplateMap>();

    getAccordionUi(): AccordionUi {
        return new AccordionUiImpl(this.accordionUi);
    }

    getAutocompleteMultiSelectView<T>(tree: boolean): AutocompleteMultiSelectView<T> {
        return AutocompleteListOrTreeMultiSelectViewImpl.getInstance(this.autocompleteMultiSelect, tree);
    }

    getAutocompleteTreeView(): AutocompleteTreeView<any> {
        return new AutocompleteTreeViewImpl(this.autocompleteTree);
    }

    getAutocompleteView(): AutocompleteView<any> {
        return new AutocompleteViewImpl(this.autocomplete);
    }

    getButtonView(): ButtonView {
        return new ButtonViewImpl(this.button);
    }

    getCheckBoxView(): CheckBoxView {
        return new CheckBoxViewImpl(this.checkbox);
    }

    getDropDownMultiLevelUi(): DropDownMultiLevelUi {
        return new DropDownMultiLevelUiImpl(this.dropDownMultiLevelUi);
    }

    getDropDownUi(): DropDownUi {
        return new DropDownUiImpl(this.dropDownUi);
    }

    getIconRenderer(): IconRenderer {
        return new MaterialIconRenderer();
    }

    getListUi(): ListUi {
        return new ListUiImpl(this.list);
    }

    getModalDialogView(): DialogView {
        return new DialogViewImpl(this.modalDialog);
    }

    getPagerUi(): PagerUi<any> {
        return new PagerUiImpl(this.pagerUi);
    }

    getPopoverView(): PopoverView {
        return new PopoverViewImpl(this.popover);
    }

    getProgressView(): ProgressView {
        return new ProgressViewImpl(this.progress);
    }

    getRadioView(): RadioView {
        return new RadioViewImpl(this.radio);
    }

    getRegisteredViewFactoriesList(): SetMultimap<string, ViewFactory<any>> {
        return this.registeredViewFactoriesList;
    }

    getRegisteredTemplateList(): SetMultimap<string, TemplateMap> {
        return this.registeredTemplateList;
    }

    getSideMenuView(): SideMenuView {
        return new SideMenuViewImpl(this.sidemenu);
    }

    getTabUi(): TabUi {
        return new TabUiImpl(this.tabUi);
    }

    getTableTreeUi(): TableTreeUi {
        return undefined;
    }

    getTableUi(): TableUi {
        return new TableUiImpl(this.tableUi);
    }

    getTextAreaView(): TextBoxView {
        return new TextAreaViewImpl(this.textarea);
    }

    getTextBoxView(): TextBoxView {
        return new TextBoxViewImpl(this.textbox);
    }

    getTooltipView(): TooltipView<MainViewSlots> {
        return new TooltipViewImpl(this.tooltip);
    }

    getTreeGroupBy(rootView: TableView): TableTreeUi {
        return undefined;
    }

    getTreeUi(): TreeUi {
        return new TreeUiImpl(this.tree);
    }

    getFilterPanelListView(): FilterPanelView<any> {
        return new FilterPanelViewImplList(this.filterPanelList);
    }
}

class MaterialIconRenderer implements IconRenderer {
    render(element: HTMLElement, icon: string): void {
        if (icon != null)
            element.innerHTML = icon;
    }
}
