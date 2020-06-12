import {ListCellCheckBoxView, ListUi, ListView} from 'dncomponents/lib/list/ListUi';
import {BaseCellView} from 'dncomponents/lib/corecls/BaseCellView';
import {TemplateParser, UiField} from 'dncomponents/lib/TemplateParser';
import {ListCellViewImpl} from './ListCellViewImpl';
import {ListCellCheckBoxViewImpl} from './ListCellCheckBoxViewImpl';
import {ListViewImpl} from './ListViewImpl';

export class ListUiImpl implements ListUi {

    static readonly VIEW_ID: string = 'default';
    @UiField
    listMain: HTMLTemplateElement;
    @UiField
    public listItem: HTMLTemplateElement;

    @UiField
    listItemCheckbox: HTMLTemplateElement;
    listView: ListView;

    constructor();
    constructor(template?: HTMLTemplateElement);
    constructor(template?: HTMLTemplateElement) {
        TemplateParser.create(template, this, true).bind();
    };

    public getListCellView(): BaseCellView {
        return new ListCellViewImpl(this.listItem);
    }

    public getListCheckBoxView(): ListCellCheckBoxView {
        return new ListCellCheckBoxViewImpl(this.listItemCheckbox);
    }

    public getRootView(): ListView {
        if (this.listView == null)
            this.listView = new ListViewImpl(this.listMain);
        return this.listView;
    }

    asElement(): HTMLElement {
        return this.getRootView().asElement();
    }

}