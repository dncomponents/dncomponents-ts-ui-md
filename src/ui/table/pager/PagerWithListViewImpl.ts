import {PagerViewPresenter, PagerWithListView} from 'dncomponents/lib/table/views/TableUi';
import {java} from 'j4ts';
import {IsElement} from 'dncomponents/lib/corecls/IsElement';
import {TemplateParser, UiField} from 'dncomponents/lib/TemplateParser';

export class PagerWithListViewImpl implements PagerWithListView {

    @UiField
    root: HTMLElement;

    presenter: PagerViewPresenter;


    public constructor(templateElement: HTMLTemplateElement) {
        TemplateParser.create(templateElement, this, true).bind();
    }

    public setText(s: string) {
    }

    public setPresenter(presenter: PagerViewPresenter) {
        this.presenter = presenter;
    }

    public setPageNumber(pageNumber: number) {
    }

    public enablePrevious(b: boolean) {
    }

    public enableNext(b: boolean) {
    }


    public setNumberOfPages(numberOfPages: number) {
    }


    public update(itemsList: java.util.ArrayList<number>) {
    }


    public addItem(element: IsElement<any>) {
        this.asElement().appendChild(element.asElement());
    }

    public clear() {
        this.asElement().innerHTML = '';
    }

    public asElement(): HTMLElement {
        return this.root;
    }
}
