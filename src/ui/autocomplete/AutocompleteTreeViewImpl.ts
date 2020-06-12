import {Tree} from 'dncomponents/lib/tree/Tree';
import {TemplateParser, UiField} from 'dncomponents/lib/TemplateParser';
import {AutocompleteTreeView} from 'dncomponents/lib/autocomplete/views/AutocompleteTreeView';
import {DefaultMultiSelectionModel} from 'dncomponents/lib/corecls/selectionmodel/selectionImpl';
import {HasTreeData} from 'dncomponents/lib/AbstractCellComponent';
import {HasCloseHandlers, HasOpenHandlers, SelectionHandler} from 'dncomponents/lib/corecls/handlers';
import {BaseAutocompleteViewImpl} from './BaseAutocompleteViewImpl';
import {CellConfig} from 'dncomponents/lib/CellConfig';
import {java} from 'j4ts';
import {TreeNode} from 'dncomponents/lib/tree/TreeNode';
import {HandlerRegistration} from 'dncomponents/lib/corecls/events';
import {Filter} from 'dncomponents/lib/corecls/Filter';
import List = java.util.List;

export class AutocompleteTreeViewImpl<T> extends BaseAutocompleteViewImpl<TreeNode<T>> implements AutocompleteTreeView<T> {

    @UiField
    private tree: Tree<any>;

    constructor(template: HTMLTemplateElement) {
        super();
        TemplateParser.create(template, this, true).bind();
        this.tree.showRoot(false);
    };

    public focusList(): void {
        if (!this.tree.getCells().isEmpty())
            this.tree.getSelectionModel().focusCell(<any>this.tree.getRowCell(0));
    }

    public getSelectionModel(): DefaultMultiSelectionModel<any> {
        return this.tree.getSelectionModel();
    }

    public getHasRowsData(): HasTreeData<T> {
        return this.tree;
    }

    public getHasOpenHandlers(): HasOpenHandlers<TreeNode<T>> {
        return this.tree;
    }

    public getHasCloseHandlers(): HasCloseHandlers<TreeNode<T>> {
        return this.tree;
    }

    public setFieldGetter(fieldGetter: (p1: any) => string): void {
        this.tree.getRowCellConfig().setFieldGetter(fieldGetter);
    }

    public getRowCellConfig(): CellConfig<TreeNode<T>, String> {
        // @ts-ignore
        return this.tree.getRowCellConfig();
    }

    public setFilter(filter: Filter<TreeNode<T>>): void {
        this.tree.addFilter(filter);
    }

    public addSelectionHandler(handler: SelectionHandler<List<TreeNode<T>>>): HandlerRegistration {
        return this.tree.getSelectionModel().addSelectionHandler(handler);
    }

}