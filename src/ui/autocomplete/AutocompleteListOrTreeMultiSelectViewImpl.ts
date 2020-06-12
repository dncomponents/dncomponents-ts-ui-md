import {AutocompleteMultiSelectView} from 'dncomponents/lib/autocomplete/views/AutocompleteMultiSelectView';
import {TemplateParser, UiField} from 'dncomponents/lib/TemplateParser';
import {BaseAutocompleteViewImpl} from './BaseAutocompleteViewImpl';
import {ClickHandler, SelectionHandler} from 'dncomponents/lib/corecls/handlers';
import {AbstractCellComponent, HasRowsData} from 'dncomponents/lib/AbstractCellComponent';
import {DefaultMultiSelectionModel, SelectionMode} from 'dncomponents/lib/corecls/selectionmodel/selectionImpl';
import {ListTreeMultiSelectionModel} from 'dncomponents/lib/list/ListTreeMultiSelectionModel';
import {CellConfig} from 'dncomponents/lib/CellConfig';
import {IsElement} from 'dncomponents/lib/corecls/IsElement';
import {AutocompleteMultiSelectItemView} from 'dncomponents/lib/autocomplete/views/AutocompleteMultiSelectItemView';
import {AutocompleteMultiSelectItemViewImpl} from './AutocompleteMultiSelectItemViewImpl';
import {Filter} from 'dncomponents/lib/corecls/Filter';
import {HandlerRegistration} from 'dncomponents/lib/corecls/events';
import {java} from 'j4ts';
import {ListData} from 'dncomponents/lib/list/ListData';
import {Tree} from 'dncomponents/lib/tree/Tree';

export class AutocompleteListOrTreeMultiSelectViewImpl extends BaseAutocompleteViewImpl<any> implements AutocompleteMultiSelectView<any> {
    @UiField
    listOrTreePanel: HTMLElement;
    @UiField
    selectionPanel: HTMLUListElement;
    itemView: HTMLTemplateElement;
    listOrTree: AbstractCellComponent<any, any, any>;

    public static getInstance(templateElement: HTMLTemplateElement, tree: boolean): AutocompleteListOrTreeMultiSelectViewImpl {
        if (tree) {
            let tree1 = new Tree<any>();
            tree1.showRoot(false);
            return new AutocompleteListOrTreeMultiSelectViewImpl(templateElement, <any>tree1);
        } else
            return new AutocompleteListOrTreeMultiSelectViewImpl(templateElement, <any>new ListData<any, any>());
    }

    private constructor(templateElement: HTMLTemplateElement, listOrTree: AbstractCellComponent<any, any, any>) {
        super();
        let templateParser = new TemplateParser(templateElement, null, true);
        let mainTemplate: HTMLTemplateElement = templateParser.getElement('rootView');
        this.itemView = templateParser.getElement('itemView');
        TemplateParser.create(mainTemplate, this, true).bind();
        this.listOrTree = listOrTree;
        this.init();
    };

    addButtonClickHandler(clickHandler: ClickHandler) {
        return clickHandler.addTo(this.selectionPanel);
    }

    setTextBoxCurrentValue(value: string) {

    }

    private init(): void {
        this.listOrTreePanel.appendChild(this.listOrTree.asElement());
        this.listOrTree.getSelectionModel().setSelectionMode(SelectionMode.MULTI);
        this.listOrTree.getRowCellConfig().setFieldGetter(p1 => p1 + '');
        (<ListTreeMultiSelectionModel<any>>this.listOrTree.getSelectionModel()).useMetaKeyForSelection(false);
        ClickHandler.onClick(evt => this.textBox.setFocus(true)).addTo(this.root);
    }

    focusList(): void {
        if (!this.listOrTree.getCells().isEmpty())
            (<ListTreeMultiSelectionModel<any>>this.listOrTree.getSelectionModel()).focusCell(this.listOrTree.getRowCell(0));
    }

    getSelectionModel(): DefaultMultiSelectionModel<any> {
        return this.listOrTree.getSelectionModel();
    }

    getHasRowsData(): HasRowsData<any> {
        return this.listOrTree;
    }

    setFieldGetter(fieldGetter: (p1: any) => string): void {
        this.listOrTree.getRowCellConfig().setFieldGetter(fieldGetter);
    }

    getRowCellConfig(): CellConfig<any, string> {
        return this.listOrTree.getRowCellConfig();
    }

    clearItems(): void {
        this.selectionPanel.innerHTML = '';
    }

    addItem(item: IsElement<any>): void {
        this.selectionPanel.appendChild(item.asElement());
    }

    getAutocompleteMultiSelectItemView(): AutocompleteMultiSelectItemView {
        return new AutocompleteMultiSelectItemViewImpl(this.itemView);
    }

    setFilter(filter: Filter<any>): void {
        this.listOrTree.addFilter(filter);
    }

    addSelectionHandler(handler: SelectionHandler<java.util.List<any>>): HandlerRegistration {
        return this.listOrTree.getSelectionModel().addSelectionHandler(handler);
    }

}