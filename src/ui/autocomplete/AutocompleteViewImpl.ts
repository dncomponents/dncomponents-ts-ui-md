import {BaseAutocompleteViewImpl} from './BaseAutocompleteViewImpl';
import {AutocompleteView} from 'dncomponents/lib/autocomplete/views/AutocompleteView';
import {TemplateParser, UiField} from 'dncomponents/lib/TemplateParser';
import {ListData} from 'dncomponents/lib/list/ListData';
import {DefaultMultiSelectionModel, SelectionMode} from 'dncomponents/lib/corecls/selectionmodel/selectionImpl';
import {Filter} from 'dncomponents/lib/corecls/Filter';
import {HasRowsDataList} from 'dncomponents/lib/AbstractCellComponent';
import {SelectionHandler} from 'dncomponents/lib/corecls/handlers';
import {java} from 'j4ts';
import {HandlerRegistration} from 'dncomponents/lib/corecls/events';
import {CellConfig} from 'dncomponents/lib/CellConfig';
import List = java.util.List;

export class AutocompleteViewImpl<T> extends BaseAutocompleteViewImpl<T> implements AutocompleteView<T> {

    @UiField
    protected list: ListData<T, String>;

    constructor(template: HTMLTemplateElement) {
        super();
        this.list = <any>new Object();
        this.root = <any>new Object();
        this.textBox = <any>new Object();
        this.listPanel = <any>new Object();
        this.button = <any>new Object();
        this.buttonText = <any>new Object();
        TemplateParser.create(template, this, true).bind();
        this.init();
    };

    private init(): void {
        this.list.setEditable(false);
        this.list.getRowCellConfig().setFieldGetter(p1 => p1 + '');
        this.list.getSelectionModel().setSelectionMode(SelectionMode.SINGLE);
    }

    public focusList(): void {
        if (!this.list.getCells().isEmpty())
            this.list.getSelectionModel().focusCell(this.list.getRowCell(0));
    }

    public getSelectionModel(): DefaultMultiSelectionModel<any> {
        return this.list.getSelectionModel();
    }

    public setFilter(filter: Filter<T>): void {
        this.list.addFilter(filter);
    }

    public getHasRowsData(): HasRowsDataList<T> {
        return this.list;
    }

    setFieldGetter(fieldGetter: (p1: any) => string): void {
        this.list.getRowCellConfig().setFieldGetter(fieldGetter);
    }

    getRowCellConfig(): CellConfig<T, string> {
        return <CellConfig<T, string>>this.list.getRowCellConfig();
    }

    public addSelectionHandler(handler: SelectionHandler<List<T>>): HandlerRegistration {
        return this.list.getSelectionModel().addSelectionHandler(handler);
    }
}