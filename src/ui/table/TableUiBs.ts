import {
    BaseBarPanelView,
    BaseBarPanelViewPresenter,
    CheckBoxHeaderTableCellView,
    ColumnChooseBarPanelView,
    FilterBarItemView,
    FilterBarPanelUi,
    FilterBarPanelView,
    FilterPanelView,
    GroupByBarPanelUi,
    GroupByBarPanelView,
    HeaderTableFilterCellView,
    HeaderTableMenuCellView,
    HeaderTableMenuCellViewPresenter,
    HeaderTableSortCellView,
    HeaderTableTextCellView,
    RowDetailsCellView,
    SortBarItemView,
    SortBarPanelUi,
    SortBarPanelView,
    SortPresenter,
    TableBarUi,
    TableBarView,
    TableCellCheckBoxView,
    TableRowView,
    TableUi,
    TableView,
} from 'dncomponents/lib/table/views/TableUi';
import {BaseCellView} from 'dncomponents/lib/corecls/BaseCellView';
import {CellView} from 'dncomponents/lib/corecls/CellView';
import {TemplateParser, UiField, UiStyle} from 'dncomponents/lib/TemplateParser';
import {BaseCellViewImpl} from 'dncomponents/lib/corecls/BaseCellViewImpl';
import {ColumnConfig, SortingDirection} from 'dncomponents/lib/table/TableUtil';
import {ClickHandler, HasOpenHandlers, ScrollHandler, SelectionHandler} from 'dncomponents/lib/corecls/handlers';
import {Util} from 'dncomponents/lib/corecls/Util';
import {HeaderFiltering, HeaderGrouping, HeaderSorting, HeaderWithModifiers} from 'dncomponents/lib/table/HeaderCellHolder';
import {HasFilterValue} from 'dncomponents/lib/table/FilterPanel';
import {DropDown, DropDownItem} from 'dncomponents/lib/dropdown/DropDown';
import {Radio, RadioSelectionGroup} from 'dncomponents/lib/checkbox/Radio';
import {IsElement} from 'dncomponents/lib/corecls/IsElement';
import {Autocomplete} from 'dncomponents/lib/autocomplete/Autocomplete';
import {Button} from 'dncomponents/lib/button/Button';
import {java} from 'j4ts';
import {Orientation, Trigger} from 'dncomponents/lib/tooltip/BaseTooltip';
import {Popover} from 'dncomponents/lib/popover/Popover';
import {HasValue, ValueChangeHandler} from 'dncomponents/lib/corecls/ValueClasses';
import {ListData} from 'dncomponents/lib/list/ListData';
import {DefaultMultiSelectionModel, SelectionMode} from 'dncomponents/lib/corecls/selectionmodel/selectionImpl';
import {HasRowsDataList} from 'dncomponents/lib/AbstractCellComponent';
import {ListCellCheckbox} from 'dncomponents/lib/list/ListCellCheckbox';
import {CheckBox} from 'dncomponents/lib/checkbox/CheckBox';
import {Comparator} from 'dncomponents/lib/table/FilterUtil';
import {CellEditor, DefaultCellEditor} from 'dncomponents/lib/CellEditor';
import {TextBox} from 'dncomponents/lib/textbox/TextBox';
import {ListViewImpl} from '../list/ListViewImpl';
import {HandlerRegistration} from 'dncomponents/lib/corecls/events';
import {TreeUi} from 'dncomponents/lib/tree/view/TreeUi';
import {Ui} from 'dncomponents/lib/views/Ui';
import List = java.util.List;
import {MaterialUi} from '../MaterialUi';

export class TableCellCheckBoxViewImpl extends BaseCellViewImpl implements TableCellCheckBoxView {
    @UiField
    checkBox: CheckBox<any>;

    constructor(template: HTMLTemplateElement) {
        super();
        TemplateParser.create(template, this, true).bind();
    }

    public getCheckbox(): HasValue<boolean> {
        return this.checkBox;
    }
}

export class TableUiImpl implements TableUi {

    static readonly VIEW_ID: string = 'default';
    @UiField
    tableMain: HTMLTemplateElement;
    @UiField
    tableRow: HTMLTemplateElement;
    @UiField
    tableColumn: HTMLTemplateElement;
    @UiField
    tableTreeItemSimpleParent: HTMLTemplateElement;
    @UiField
    tableColumnSortHeader: HTMLTemplateElement;
    @UiField
    tableColumnMenuHeader: HTMLTemplateElement;
    @UiField
    tableColumnFilterHeader: HTMLTemplateElement;
    @UiField
    tableRowExpanderItem: HTMLTemplateElement;
    @UiField
    tableHeaderCheckbox: HTMLTemplateElement;
    @UiField
    footerCell: HTMLTemplateElement;
    @UiField
    tableBarUi: HTMLTemplateElement;
    @UiField
    filterPanel: HTMLTemplateElement;
    @UiField
    tableCheckBoxColumn: HTMLTemplateElement;
    tableView: TableView;

    constructor();
    constructor(template?: HTMLTemplateElement);
    constructor(template?: HTMLTemplateElement) {
        let tem;
        if (template)
            tem = template;
        else
            tem = MaterialUi.getUi().tableUi;
        TemplateParser.create(tem, this, true).bind();
        this.tableView = new TableViewImpl(this.tableMain);
    }

    public getRowTableCellView(): TableRowView {
        return new TableRowViewImpl(this.tableRow);
    }

    public getTableCellView(): BaseCellView {
        return new TableCellViewImpl(this.tableColumn);
    }

    public getTableCellRowExpanderView(): BaseCellView {
        return new RowDetailsCellViewImpl(this.tableRowExpanderItem);
    }

    public getHeaderTableSortCellView(): HeaderTableSortCellView {
        return new HeaderTableSortCellViewImpl(this.tableColumnSortHeader);
    }

    public getHeaderTableTextCellView(): HeaderTableTextCellView {
        return new HeaderTableTextCellViewImpl(this.tableColumn);
    }

    public getHeaderTableMenuCellView(): HeaderTableMenuCellView {
        return new HeaderTableMenuCellViewImpl(this.tableColumnMenuHeader);
    }

    public getFooterCellView(): CellView {
        return new FooterCellViewImpl(this.footerCell);
    }

    public getTableBarUi(): TableBarUi {
        return new TableBarUiImpl(this.tableBarUi);
    }

    public getCheckBoxHeaderCellView(): CheckBoxHeaderTableCellView {
        return new CheckBoxHeaderTableCellViewImpl(this.tableHeaderCheckbox);
    }

    public getRootView(): TableView {
        return this.tableView;
    }

    public getGTreeGroupByUi(): TreeUi {
        return null;
    }

    public getTableCellCheckBoxView(): TableCellCheckBoxView {
        return new TableCellCheckBoxViewImpl(this.tableCheckBoxColumn);
    }

    public getHeaderTableMenuFilterView(): HeaderTableFilterCellView {
        return new HeaderTableFilterCellViewImpl(this.tableColumnFilterHeader);
    }

    public getFilterPanelView(): FilterPanelView<any> {
        return new FilterPanelViewImpl(this.filterPanel);
    }

    asElement(): HTMLElement {
        return this.getRootView().asElement();
    }
}


export class TableRowViewImpl extends BaseCellViewImpl implements TableRowView {

    constructor(template?: HTMLTemplateElement) {
        super();
        if (template)
            TemplateParser.create(template, this, true).bind();
        else
            TemplateParser.create((<TableUiImpl>Ui.get().getTableUi()).tableRow, this, true).bind();
    }

    public addRow(widget: Element, columnSize: number) {
    }

    public addColumn(element: Element) {
        this.asElement().appendChild(element);
    }


    public clearCells() {
        this.asElement().innerHTML = '';
    }

    public getValuePanel(): HTMLElement {
        return this.asElement();
    }
}

export class TableCellViewImpl extends BaseCellViewImpl {

    constructor(template?: HTMLTemplateElement) {
        super();
        if (template) {
            TemplateParser.create(template, this, true).bind();
            this.init();
        }
    }


    private init() {
        this.root.setAttribute('tabindex', String(0));
    }

    public getValuePanel(): HTMLElement {
        return this.asElement();
    }
}

export class RowDetailsCellViewImpl extends TableCellViewImpl implements RowDetailsCellView {
    @UiField
    openClosedElement: HTMLElement;
    @UiStyle
    openStyle: string;
    @UiStyle
    closeStyle: string;

    constructor(template?: HTMLTemplateElement) {
        super();
        TemplateParser.create(template, this, true).bind();
    }

    public setOpened(b: boolean) {
        if (!b)
            this.openClosedElement.className = this.openStyle;
        else
            this.openClosedElement.className = this.closeStyle;
    }

    public getValuePanel(): HTMLElement {
        return this.asElement();
    }
}

export class HeaderTableSortCellViewImpl implements HeaderTableSortCellView {

    @UiField
    root: HTMLElement;
    @UiField
    textPanel: HTMLElement;
    @UiField
    sortIcon: HTMLElement;
    @UiStyle
    sortUpStyle: string;
    @UiStyle
    sortDownStyle: string;

    currentDirection: SortingDirection = null;
    presenter: SortPresenter;

    constructor(template?: HTMLTemplateElement) {
        TemplateParser.create(template, this, true).bind();
        this.init();
    }


    private init() {
        ClickHandler.onClick(evt => {
            if (this.currentDirection == null) {
                this.presenter.sort(SortingDirection.ASCENDING);
            } else if (this.currentDirection == SortingDirection.ASCENDING) {
                this.presenter.sort(SortingDirection.DESCENDING);
            } else if (this.currentDirection == SortingDirection.DESCENDING) {
                this.presenter.sort(null);
            }
        }).addTo(this.asElement());
    }

    public getText(): string {
        return this.textPanel.innerHTML;
    }

    public setText(text: string) {
        this.textPanel.innerHTML = text;
    }

    public setSorted(direction: SortingDirection) {
        if (direction == null) {
            this.sortIcon.className = '';
        } else if (direction === SortingDirection.ASCENDING) {
            this.sortIcon.className = this.sortDownStyle;
        } else if (direction === SortingDirection.DESCENDING) {
            this.sortIcon.className = this.sortUpStyle;
        }
        this.currentDirection = direction;
        this.setActive(this.currentDirection != null);
    }

    public isActive(): boolean {
        return false;
    }

    public setActive(b: boolean) {
        if (b)
            this.asElement().className = ('active');
        else
            this.asElement().className = ('active');
    }

    public setSortPresenter(presenter: SortPresenter) {
        this.presenter = presenter;
    }

    public setSortIconText(iconText: string) {
        this.sortIcon.innerHTML = iconText;
    }

    public setGroupOrder(order: number) {
    }

    public asElement(): HTMLElement {
        return this.root;
    }
}

export class HeaderTableTextCellViewImpl implements HeaderTableTextCellView {
    @UiField
    root: HTMLElement;

    constructor(template?: HTMLTemplateElement) {
        TemplateParser.create(template, this, true).bind();
    }

    public setText(text: string) {
        this.asElement().innerHTML = text;
    }

    public asElement(): HTMLElement {
        return this.root;
    }
}

export class HeaderTableMenuCellViewImpl implements HeaderTableMenuCellView {
    @UiField
    root: HTMLElement;
    @UiField
    textPanel: HTMLElement;
    @UiField
    filterIconPanel: HTMLElement;
    @UiField
    groupByIconPanel: HTMLElement;
    @UiField
    sortIconPanel: HTMLElement;
    @UiField
    menuHolder: HTMLElement;
    @UiStyle
    sortStyle: string;
    @UiStyle
    sortUpStyle: string;
    @UiStyle
    sortDownStyle: string;

    presenter: HeaderTableMenuCellViewPresenter;

    menu: DropDown<MenuItem> = new DropDown<MenuItem>();

    filterPanel: HasFilterValue<any>;

    constructor(template: HTMLTemplateElement) {
        TemplateParser.create(template, this, true).bind();
    }

    init() {
        Util.setVisible(this.filterIconPanel, true);
        Util.replace(this.menu.asElement(), this.menuHolder);
    }


    public setColumn(column: ColumnConfig<any, any>) {
        this.bind();
    }

    private bind(): void {
        Util.setVisible(this.filterIconPanel, false);
        Util.setVisible(this.groupByIconPanel, false);
        Util.setVisible(this.sortIconPanel, false);
        this.menu.setButtonContent('|||');
        this.menu.addItem(new DropDownItem<any>(this.menu, new MenuItem(ModType.SORTING, 'Sort (asc)', SortingDirection.ASCENDING, {execute: (active) => this.presenter.sort(active ? null : SortingDirection.ASCENDING)})));
        this.menu.addItem(new DropDownItem<any>(this.menu, new MenuItem(ModType.SORTING, 'Sort (desc)', SortingDirection.DESCENDING, {execute: (active) => this.presenter.sort(active ? null : SortingDirection.DESCENDING)})));
        this.menu.addItem(new DropDownItem<any>(this.menu, new MenuItem(ModType.GROUPING, 'Group by (asc)', SortingDirection.ASCENDING, {execute: (active) => this.presenter.groupBy(active ? null : SortingDirection.ASCENDING)})));
        this.menu.addItem(new DropDownItem<any>(this.menu, new MenuItem(ModType.GROUPING, 'Group by (desc)', SortingDirection.DESCENDING, {execute: (active) => this.presenter.groupBy(active ? null : SortingDirection.DESCENDING)})));

        let di: DropDownItem<any> = new DropDownItem<any>(this.menu, new MenuItem(ModType.FILTERING, 'Filter', null, null));

        if (this.filterPanel != null) {
            ClickHandler.onClick(evt => {
                evt.stopPropagation();
            }).addTo(this.filterPanel.asElement());
            this.filterPanel.setFilterValueHandler(this.presenter);
            di.setContent(this.filterPanel.asElement());
        }
        this.menu.addItem(di);
        this.menu.addSelectionHandler(SelectionHandler.onSelection(event => {
            if (!event.selection.isEmpty()) {
                let item = event.selection.get(0);
                item.getUserObject().execute(item.isSelected());
            }
        }));
    }


    public setPresenter(presenter: HeaderTableMenuCellViewPresenter) {
        this.presenter = presenter;
    }


    public getText(): string {
        return this.textPanel.innerHTML;
    }


    public setText(text: string) {
        this.textPanel.innerHTML = text;
    }


    public isActive(): boolean {
        return false;
    }


    public setActive(b: boolean) {
    }

    public setSortPresenter(presenter: SortPresenter) {
    }

    public setSortIconText(iconText: string) {
        this.sortIconPanel.innerHTML = iconText;
    }

    public setGroupOrder(order: number) {
        if (order !== -1) this.groupByIconPanel.innerHTML = (order + 1) + '';
    }

    public setSorted(direction: SortingDirection) {
        if (direction == null) {
            this.sortIconPanel.className = this.sortStyle;
        } else if (direction === SortingDirection.ASCENDING) {
            this.sortIconPanel.className = this.sortDownStyle;
        } else if (direction === SortingDirection.DESCENDING) {
            this.sortIconPanel.className = this.sortUpStyle;
        }
        this.menu.getItems().forEach((item) => {
            if (item.getUserObject().type === ModType.SORTING)
                item.setActive(item.getUserObject().direction === direction);
        });
        this.setActive(direction != null);
        Util.setVisible(this.sortIconPanel, direction != null);
    }

    public setFiltered(b: HeaderFiltering) {
        if (b != null) this.filterPanel.setValue(b.getUserEnteredValue(), b.getComparator());
        Util.setVisible(this.filterIconPanel, b != null);
    }

    public setGroupedBy(direction: SortingDirection) {
        this.menu.getItems().forEach((item) => {
            if (item.getUserObject().type === ModType.GROUPING)
                item.setActive(item.getUserObject().direction === direction);
        });
        this.setActive(direction != null);
        Util.setVisible(this.groupByIconPanel, direction != null);
    }

    public asElement(): HTMLElement {
        return this.root;
    }
}

enum ModType {
    SORTING, GROUPING, FILTERING
}

class MenuItem {
    public __parent: any;
    direction: SortingDirection;

    name: string;

    type: ModType;

    command: ActiveCommand;

    public constructor(type: ModType, name: string, direction: SortingDirection, command: ActiveCommand) {
        this.direction = direction;
        this.name = name;
        this.type = type;
        this.command = command;
    }


    public toString(): string {
        return this.name;
    }

    public execute(b: boolean) {
        if (this.command != null)
            this.command.execute(b);
    }
}

interface ActiveCommand {
    execute(active: boolean): void;
}

export class FooterCellViewImpl implements CellView {
    @UiField
    root: HTMLElement;

    constructor(template: HTMLTemplateElement) {
        TemplateParser.create(template, this, true).bind();
    }

    public asElement(): HTMLElement {
        return this.root;
    }
}

export class TableBarUiImpl implements TableBarUi {
    @UiField
    tableBarGroupByUi: HTMLTemplateElement;
    @UiField
    tableBar: HTMLTemplateElement;
    @UiField
    columnChooseBar: HTMLTemplateElement;
    @UiField
    tableBarView: TableBarView = null;

    constructor(template: HTMLTemplateElement) {
        TemplateParser.create(template, this, true).bind();
    }


    public getGroupByBarPanelUi(): GroupByBarPanelUi {
        return new GroupByBarPanelUiImpl(this.tableBarGroupByUi);
    }

    public getSortBarPanelUi(): SortBarPanelUi {
        return new SortBarPanelUiImpl(this.tableBarGroupByUi);
    }

    public getFilterBarPanelUi(): FilterBarPanelUi {
        return new FilterBarPanelUiImpl(this.tableBarGroupByUi);
    }

    public getRootView(): TableBarView {
        if (this.tableBarView == null)
            this.tableBarView = new TableBarViewImpl(this.tableBar);
        return this.tableBarView;
    }

    public getColumnChooseBarPanelView(): ColumnChooseBarPanelView {
        return new ColumnChooseBarPanelViewImpl(this.columnChooseBar);
    }

    asElement(): HTMLElement {
        return this.getRootView().asElement();
    }
}

export class GroupByBarPanelUiImpl implements GroupByBarPanelUi {
    @UiField
    tableBarItem: HTMLTemplateElement;
    @UiField
    tableBarPanel: HTMLTemplateElement;
    @UiField
    groupByBarPanelView: GroupByBarPanelView = null;

    constructor(template: HTMLTemplateElement) {
        TemplateParser.create(template, this, true).bind();
    }


    public getSortBarItemView(): SortBarItemView {
        return new SortBarItemViewImpl(this.tableBarItem);
    }

    public getRootView(): GroupByBarPanelView {
        if (this.groupByBarPanelView == null) this.groupByBarPanelView = new GroupByBarPanelViewImpl(this.tableBarPanel);
        return this.groupByBarPanelView;
    }

    asElement(): HTMLElement {
        return this.getRootView().asElement();
    }

}

export class SortBarItemViewImpl implements SortBarItemView {
    @UiField
    root: HTMLElement;
    @UiField
    close: HTMLElement;
    @UiField
    actionLabel: HTMLElement;
    @UiField
    columnName: HTMLElement;
    @UiField
    panel: HTMLElement;

    group: RadioSelectionGroup<SortingDirection> = <any>(new RadioSelectionGroup<any>());
    asc: Radio<any> = new Radio(SortingDirection.ASCENDING);
    desc: Radio<any> = new Radio(SortingDirection.DESCENDING);

    constructor(template: HTMLTemplateElement) {
        TemplateParser.create(template, this, true).bind();
        this.init();
    }

    private init() {
        this.group.addItemsArr(this.asc, this.desc);
        this.addToPanel(this.asc);
        this.addToPanel(this.desc);
    }

    public addToPanel(element: IsElement<any>) {
        let column: HTMLElement = Util.createDiv();
        column.className = 'mr-2';
        column.appendChild(element.asElement());
        this.panel.appendChild(column);
    }

    public addDeleteHandler(clickHandler: ClickHandler) {
        clickHandler.addTo(this.close);
    }

    public setActionLabel(text: string) {
        this.actionLabel.innerHTML = '<b>' + text + '</b>';
    }

    public setActionAndOr() {
    }

    public setColumnName(name: string) {
        this.columnName.innerHTML = '<b>' + name + '</b>';
    }

    public addSelectionHandler(handler: SelectionHandler<SortingDirection>) {
        this.group.getEntitySelectionModel().addSelectionHandler(handler);
    }

    public setDirection(direction: SortingDirection) {
        this.asc.setValue(direction === SortingDirection.ASCENDING);
        this.desc.setValue(direction === SortingDirection.DESCENDING);
    }

    public clear() {
        this.panel.innerHTML = '';
    }

    public asElement(): HTMLElement {
        return this.root;
    }
}

export class SortBarPanelUiImpl implements SortBarPanelUi {
    @UiField
    tableBarItem: HTMLTemplateElement;
    @UiField
    tableBarPanel: HTMLTemplateElement;

    sortBarPanelView: SortBarPanelView = null;

    constructor(template: HTMLTemplateElement) {
        TemplateParser.create(template, this, true).bind();
    }

    public getSortBarItemView(): SortBarItemView {
        return new SortBarItemViewImpl(this.tableBarItem);
    }

    public getRootView(): SortBarPanelView {
        if (this.sortBarPanelView == null)
            this.sortBarPanelView = new SortBarPanelViewImpl(this.tableBarPanel);
        return this.sortBarPanelView;
    }


    public asElement(): HTMLElement {
        return this.getRootView().asElement();
    }
}

export abstract class BaseBarPanelViewImpl<T extends HeaderWithModifiers<any>> implements BaseBarPanelView<T> {
    @UiField
    root: HTMLElement;
    @UiField
    contentPanel: HTMLElement;
    @UiField
    dropDownHolder: HTMLElement;


    static defaultBtnStyle: string = 'btn btn-outline-secondary mr-3 mb-3';

    autocomplete: Autocomplete<ColumnConfig<any, any>> = new Autocomplete<any>(e => {
        return e.getColumnName();
    });

    presenter: BaseBarPanelViewPresenter<T>;

    label: Button<any> = <any>(new Button());

    private dropDownTitle: string;

    constructor();
    constructor(template?: HTMLTemplateElement);
    constructor(template?: HTMLTemplateElement) {
        if (template) {
            TemplateParser.create(template, this, true).bind();
            this.bind();
        }
    };


    bind() {
        Util.setWidth(this.label.asElement(), '180px');
        let popover: Popover<any> = new Popover().setOwner(this.label.asElement()).setOrientation(Orientation.BOTTOM);
        popover.setTrigger(Trigger.CLICK);
        popover.setContent(this.asElement());
        Util.setWidth(popover.asElement(), '630px');
        Util.setMaxWidth(popover.asElement(), '630px');
        Util.replace(this.autocomplete.asElement(), this.dropDownHolder);
        this.autocomplete.addHandler(ClickHandler.onClick(evt => this.presenter.loadColumnsDropDown()));
        this.autocomplete.addValueChangeHandler(ValueChangeHandler.onValueChange(evt => {
            this.presenter.addItemToBarPanel(evt.value);
            this.autocomplete.setName(this.dropDownTitle);
            this.autocomplete.setValue(null);
        }));
    }

    public initColumns(columns: List<ColumnConfig<any, any>>) {
        this.autocomplete.setRowsData(columns);
    }

    public setPresenter(presenter: BaseBarPanelViewPresenter<T>) {
        this.presenter = presenter;
    }

    public clear() {
        this.contentPanel.innerHTML = '';
    }

    public setColor(barColor: string) {
        Util.setBackgroundColor(this.asElement(), barColor);
    }

    public setDropDownTitle(dropDownTitle: string) {
        this.autocomplete.setName(dropDownTitle);
        this.dropDownTitle = dropDownTitle;
    }

    public addBarItem(barItem: IsElement<any>) {
        this.contentPanel.appendChild(barItem.asElement());
    }

    public getLabel(): IsElement<any> {
        return this.label;
    }

    public asElement(): HTMLElement {
        return this.root;
    }

    public abstract update(size: number): void;

}

export class SortBarPanelViewImpl extends BaseBarPanelViewImpl<HeaderSorting> implements SortBarPanelView {
    constructor(template: HTMLTemplateElement) {
        super();
        TemplateParser.create(template, this, true).bind();
        this.init();
    }

    private init() {
        this.bind();
        this.label.setText('Sort');
        Util.setStyle(this.label, BaseBarPanelViewImpl.defaultBtnStyle);
    }

    public update(size: number) {
        if (size > 0) {
            this.label.setText('Sorted by: <span class="badge badge-light">' + size + '</span>' + (size > 1 ? ' fields' : ' field') + '\n');
            Util.setStyle(this.label, 'btn btn-success mr-3 mb-3');
        } else {
            this.label.setText('Sort');
            Util.setStyle(this.label, BaseBarPanelViewImpl.defaultBtnStyle);
        }
    }
}

export class FilterBarPanelUiImpl implements FilterBarPanelUi {
    @UiField
    tableBarItem: HTMLTemplateElement;
    @UiField
    tableBarPanel: HTMLTemplateElement;
    @UiField
    filterBarPanelView: FilterBarPanelView = null;

    constructor(template: HTMLTemplateElement) {
        TemplateParser.create(template, this, true).bind();
    }

    public getFilterBarItemView(): FilterBarItemView {
        return new FilterBarItemViewImpl(this.tableBarItem);
    }

    public getRootView(): FilterBarPanelView {
        if (this.filterBarPanelView == null)
            this.filterBarPanelView = new FilterBarPanelViewImpl(this.tableBarPanel);
        return this.filterBarPanelView;
    }

    asElement(): HTMLElement {
        return this.getRootView().asElement();
    }
}

export class FilterBarItemViewImpl implements FilterBarItemView {
    @UiField
    root: HTMLElement;
    @UiField
    close: HTMLElement;
    @UiField
    actionLabel: HTMLElement;
    @UiField
    columnName: HTMLElement;
    @UiField
    panel: HTMLElement;

    filterComponent: HasFilterValue<any>;

    orAc: Autocomplete<boolean> = new Autocomplete<any>((b) => b ? 'OR' : 'AND');

    constructor(template: HTMLTemplateElement) {
        TemplateParser.create(template, this, true).bind();
    }

    public addToPanel(element: IsElement<any>) {
        let column: HTMLElement = Util.createDiv();
        column.className = 'col';
        column.appendChild(element.asElement());
        this.panel.appendChild(column);
    }

    public addDeleteHandler(clickHandler: ClickHandler) {
        clickHandler.addTo(this.close);
    }

    public setActionLabel(text: string) {
        this.actionLabel.innerHTML = '';
        this.actionLabel.innerHTML = '<b>' + text + '</b>';
    }

    public setActionAndOr() {
        this.actionLabel.innerHTML = '';
        this.actionLabel.appendChild(this.orAc.asElement());
    }

    public setColumnName(name: string) {
        this.columnName.innerHTML = '<b>' + name + '</b>';
    }

    public clear() {
        this.panel.innerHTML = '';
    }

    public setFilterComponent(element: HasFilterValue<any>) {
        this.filterComponent = element;
        this.addToPanel(this.filterComponent);
    }

    public getFilterComponent(): HasFilterValue<any> {
        return this.filterComponent;
    }

    public getOrHandler(): HasValue<boolean> {
        return this.orAc;
    }

    public asElement(): HTMLElement {
        return this.root;
    }
}

export class FilterBarPanelViewImpl extends BaseBarPanelViewImpl<HeaderFiltering> implements FilterBarPanelView {


    constructor(template: HTMLTemplateElement) {
        super();
        TemplateParser.create(template, this, true).bind();
        this.init();
    }

    private init() {
        this.bind();
        this.label.setText('Filter');
        Util.setStyle(this.label, BaseBarPanelViewImpl.defaultBtnStyle);
    }

    public update(size: number) {
        if (size > 0) {
            this.label.setText('Filtered by: <span class="badge badge-light">' + size + '</span>' + (size > 1 ? ' fields' : ' field') + '\n');
            Util.setStyle(this.label, 'btn btn-danger mr-3 mb-3');
        } else {
            this.label.setText('Filter');
            Util.setStyle(this.label, BaseBarPanelViewImpl.defaultBtnStyle);
        }
    }
}

export class TableBarViewImpl implements TableBarView {

    @UiField
    root: HTMLElement;

    constructor(template: HTMLTemplateElement) {
        TemplateParser.create(template, this, true).bind();
    }

    public add(element: HTMLElement | IsElement<any>) {
        this.asElement().appendChild(Util.getEl(element));
    }

    public asElement(): HTMLElement {
        return this.root;
    }
}

export class ColumnChooseBarPanelViewImpl implements ColumnChooseBarPanelView {
    @UiField
    root: HTMLElement;

    label: Button<any> = new Button('Hide fields');

    list: ListData<ColumnConfig<any, any>, string>;

    popover: Popover<any>;

    public constructor(templateElement: HTMLTemplateElement) {
        TemplateParser.create(templateElement, this, true).bind();
        this.list = new ListData<any, any>((columnConfig) => columnConfig.getColumnName());
        this.list.getRowCellConfig().setCellFactory({getCell: (c) => new ListCellCheckbox<any, any>()});
        this.list.getSelectionModel().setSelectionMode(SelectionMode.MULTI);
        this.asElement().appendChild(this.list.asElement());
        // Util.setWidth(this.label.asElement(), '180px');
        this.popover = new Popover().setOwner(this.label.asElement()).setOrientation(Orientation.BOTTOM);
        this.popover.setTrigger(Trigger.CLICK);
        this.popover.setContent(this.asElement());
        Util.setStyle(this.label, BaseBarPanelViewImpl.defaultBtnStyle);
    }


    public getLabel(): IsElement<any> {
        return this.label;
    }


    public getSelectionModel(): DefaultMultiSelectionModel<any> {
        return this.list.getSelectionModel();
    }

    public getHasRows(): HasRowsDataList<ColumnConfig<any, any>> {
        return this.list;
    }

    public getPopupShowHandler(): HasOpenHandlers<Popover<any>> {
        return this.popover;
    }

    public update(size: number) {
        if (size > 0) {
            this.label.setText('Hidden <span class="badge badge-light">' + size + '</span>' + (size > 1 ? ' fields' : ' field') + '\n');
            Util.setStyle(this.label, 'btn btn-primary mr-3 mb-3');
        } else {
            this.label.setText('Hide fields');
            Util.setStyle(this.label, BaseBarPanelViewImpl.defaultBtnStyle);
        }
    }


    public asElement(): HTMLElement {
        return this.root;
    }
}

export class GroupByBarPanelViewImpl extends BaseBarPanelViewImpl<HeaderGrouping> implements GroupByBarPanelView {

    expandAll: CheckBox<any> = new CheckBox<any>().setUserObject('expand all');

    constructor(template: HTMLTemplateElement) {
        super();
        TemplateParser.create(template, this, true).bind();
        this.init();
    }

    private init() {
        this.bind();
        this.label.setText('Group');
        this.expandAll.setValue(true);
        Util.setStyle(this.label, BaseBarPanelViewImpl.defaultBtnStyle);
    }

    public clear() {
        super.clear();
        this.contentPanel.appendChild(this.expandAll.asElement());
    }

    public update(size: number) {
        if (size > 0) {
            this.label.setText('Grouped by: <span class="badge badge-light">' + size + '</span>' + (size > 1 ? ' fields' : ' field') + '\n');
            Util.setStyle(this.label, 'btn btn-warning mr-3 mb-3');
        } else {
            this.label.setText('Group');
            Util.setStyle(this.label, BaseBarPanelViewImpl.defaultBtnStyle);
        }
    }

    public addExpandAllHandler(handler: ValueChangeHandler<boolean>) {
        this.expandAll.addValueChangeHandler(handler);
    }
}

export class CheckBoxHeaderTableCellViewImpl implements CheckBoxHeaderTableCellView {
    @UiField
    public textPanel: HTMLElement;
    @UiField
    checkBox: CheckBox<any>;
    @UiField
    root: HTMLElement;

    constructor(template: HTMLTemplateElement) {
        TemplateParser.create(template, this, true).bind();
    }

    public getCheckBox(): HasValue<boolean> {
        return this.checkBox;
    }

    public setText(text: string) {
        this.textPanel.innerHTML = text;
    }


    public asElement(): HTMLElement {
        return this.root;
    }
}


export class HeaderTableFilterCellViewImpl implements HeaderTableFilterCellView {

    @UiField
    root: HTMLElement;
    @UiField
    textPanel: HTMLElement;
    @UiField
    filterIconPanel: HTMLElement;
    @UiField
    filterPanelElement: HTMLElement;
    @UiField
    sortIconPanel: HTMLElement;

    constructor(template: HTMLTemplateElement) {
        TemplateParser.create(template, this, true).bind();
    }

    public setFilterPanel(fp: IsElement<any>) {
        Util.setVisible(this.filterIconPanel, false);
        Util.setVisible(this.sortIconPanel, false);
        this.filterPanelElement.appendChild(fp.asElement());
        ClickHandler.onClick(evt => {
            evt.stopPropagation();
        }).addTo(fp.asElement());

    }

    public setFilterIconVisible(b: boolean) {
        Util.setVisible(this.filterIconPanel, b);
    }

    public setSorted(direction: SortingDirection) {
    }

    public isActive(): boolean {
        return false;
    }

    public setActive(b: boolean) {
    }

    public setSortPresenter(presenter: SortPresenter) {
    }

    public setSortIconText(iconText: string) {
    }

    public setGroupOrder(order: number) {
    }


    public getText(): string {
        return this.textPanel.innerHTML;
    }

    public setText(text: string) {
        this.textPanel.innerHTML = text;
    }

    public asElement(): HTMLElement {
        return this.root;
    }
}

export class FilterPanelViewImpl<T> implements FilterPanelView<T> {
    @UiField
    root: HTMLElement;
    @UiField
    clear: HTMLElement;
    @UiField
    ac: Autocomplete<Comparator<any, any>>;
    @UiField
    public valueHolder: HTMLElement;
    cellEditor: CellEditor<T>;
    @UiField
    public mainPanel: HTMLDivElement;
    @UiStyle
    public booleanMainPanelStyle: string;

    constructor(template: HTMLTemplateElement) {
        TemplateParser.create(template, this, true).bind();
        Util.setVisible(this.clear, false);
    }


    public addClearClickHandler(clickHandler: ClickHandler) {
        clickHandler.addTo(this.clear);
    }

    public showClearElement(b: boolean) {
        Util.setVisible(this.clear, b);
    }


    public getValueComponent(): CellEditor<T> {
        return this.cellEditor;
    }

    public setValueComponent(valueWidget: CellEditor<T> | string) {
        if (typeof valueWidget === 'string') {
            this.setValueComponentStr(valueWidget);
        } else {
            if (valueWidget != null) {
                Util.replaceRaw(valueWidget.getIsElement(), this.valueHolder);
                this.cellEditor = valueWidget;
                this.valueHolder = this.cellEditor.getIsElement().asElement();
            } else {
                let holder: HTMLElement = Util.createDiv();
                Util.replaceRaw(holder, this.valueHolder);
                this.valueHolder = holder;
            }
        }
    }


    public setValueComponentStr<T1>(clzz: string) {
        if (clzz == null) throw new java.lang.NullPointerException('Class argument can\'t be null!');
        if (clzz === 'number') {
            this.cellEditor = <any>(new DefaultCellEditor(new TextBox()));
        } else if (clzz === 'string') {
            this.cellEditor = <any>(new DefaultCellEditor(new TextBox()));
        } else if (clzz === 'boolean') {
            this.mainPanel.className = this.booleanMainPanelStyle;
            this.mainPanel.appendChild(this.ac.asElement());
            this.cellEditor = <any>(new DefaultCellEditor(new CheckBox()));
        } else throw new java.lang.IllegalArgumentException(clzz + ' has no defined editor!');
    }

    public getComparatorHasValue(): HasValue<Comparator<any, any>> {
        return this.ac;
    }

    public getComparatorHasRowsData(): HasRowsDataList<Comparator<any, any>> {
        return this.ac.getHasRowsDataList();
    }

    public asElement(): HTMLElement {
        return this.root;
    }
}

export class TableViewImpl extends ListViewImpl implements TableView {
    @UiField
    contentColgroupPanel: HTMLTableColElement;
    @UiField
    rowsPanel: HTMLTableSectionElement;
    @UiField
    headerColgroupPanel: HTMLTableColElement;
    @UiField
    headerRow: HTMLTableRowElement;
    @UiField
    headerBodyPanel: HTMLTableSectionElement;
    @UiField
    footerBodyPanel: HTMLTableSectionElement;
    @UiField
    tableContent: HTMLElement;
    @UiField
    public tableContentPanel: HTMLElement;
    @UiField
    tableHeader: HTMLElement;
    @UiField
    headerBarRow: HTMLElement;
    @UiField
    footerPanel: HTMLElement;
    @UiField
    tableFooter: HTMLElement;
    @UiField
    tableFooterColGroup: HTMLElement;
    @UiField
    tableFooterRow: HTMLElement;
    @UiField
    footerPagerPanel: HTMLElement;

    public createEmptyRow(): HTMLElement {
        return Util.createTr();
    }

    public addHeaderItem(element: Element) {
        this.headerRow.appendChild(element);
        this.headerColgroupPanel.appendChild(Util.createCol());
        this.contentColgroupPanel.appendChild(Util.createCol());
    }


    public clearHeaders() {
        this.headerRow.innerHTML = '';
        this.headerColgroupPanel.innerHTML = '';
        this.contentColgroupPanel.innerHTML = '';
    }

    public setColumnWidth(column: number, width: string) {
        if (column > this.contentColgroupPanel.childNodes.length) return;
        if ((this.headerColgroupPanel.childNodes.item(column)) == null) {
            console.log('Warning: this shouldn\'t be a null ?');
            return;
        }
        (<HTMLElement>this.contentColgroupPanel.childNodes.item(column)).style.width = width;
    }

    public setHeaderColumnWidth(column: number, width: string) {
        if (column > this.contentColgroupPanel.childNodes.length) return;
        if ((this.headerColgroupPanel.childNodes.item(column)) == null) {
            console.log('Warning: this shouldn\'t be a null ?');
            return;
        }
        (<HTMLElement>this.headerColgroupPanel.childNodes.item(column)).style.width = width;
    }


    public setScrollable(b: boolean) {
        if (b)
            this.tableContentPanel.classList.add(this.scrollableStyle);
        else
            this.tableContentPanel.classList.remove(this.scrollableStyle);
    }

    public addScrollHandler(scrollHandler: ScrollHandler): HandlerRegistration {
        return scrollHandler.addTo(this.tableContentPanel);
    }

    public getScrollPanel(): HTMLElement {
        return this.tableContentPanel;
    }

    public setHeaderBar(bar: IsElement<any>, size: number) {
        this.headerBarRow.innerHTML = '';
        this.headerBarRow.appendChild(bar.asElement());
    }

    public insertAfter(rowTable: IsElement<any>, size: number): HTMLElement {
        let tr: HTMLElement = this.addToRow(size);
        if (rowTable != null && rowTable.asElement().parentNode != null)
            rowTable.asElement().parentNode.insertBefore(tr, rowTable.asElement().nextSibling);
        return <HTMLElement>tr.firstChild;
    }

    public addItemToRowColSpan(toAdd: IsElement<any>, colSize: number): HTMLElement {
        let row: HTMLElement = this.addToRow(colSize);
        this.addItem(row);
        return row;
    }

    private addToRow(colSize: number): HTMLElement {
        let row: HTMLElement = Util.createTr();
        let column: HTMLElement = Util.createTd();
        column.setAttribute('colspan', colSize + '');
        row.appendChild(column);
        return row;
    }

    public setPager(pager: IsElement<any>) {
        this.footerPagerPanel.innerHTML = '';
        this.footerPagerPanel.appendChild(pager.asElement());
    }

    public addFooterItem(element: IsElement<any>) {
        this.tableFooterColGroup.appendChild(Util.createCol());
        this.tableFooterRow.appendChild(element == null ? Util.createTd() : element.asElement());
    }

    public clearFooter() {
        this.tableFooterRow.innerHTML = '';
        this.tableFooterColGroup.innerHTML = '';
    }

    public setFooterColumnWidth(column: number, width: string) {
        if (this.tableFooterColGroup.hasChildNodes())
            (<HTMLElement>this.tableFooterColGroup.childNodes.item(column)).style.width = width;
    }

    public getHeaderRow(): HTMLElement {
        return this.headerBodyPanel;
    }

    public getFooterRow(): HTMLElement {
        return this.footerBodyPanel;
    }

    public initFilteringHeader() {
        this.tableHeader.classList.remove('table-header-style');
    }

    public getItemPanel(): HTMLElement {
        return this.rowsPanel;
    }
}
