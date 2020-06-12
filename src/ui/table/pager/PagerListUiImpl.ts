import {PagerItemView, PagerListUi, PagerWithListView} from 'dncomponents/lib/table/views/TableUi';
import {PagerItemViewImpl} from './PagerItemViewImpl';
import {TemplateParser, UiField} from 'dncomponents/lib/TemplateParser';
import {PagerWithListViewImpl} from './PagerWithListViewImpl';

export class PagerListUiImpl implements PagerListUi {

    @UiField
    pagerItem: HTMLTemplateElement;
    @UiField
    pager: HTMLTemplateElement;

    public constructor(templateElement: HTMLTemplateElement) {
        TemplateParser.create(templateElement, this, true).bind();
    }

    public getPagerItemView(): PagerItemView {
        return new PagerItemViewImpl(this.pagerItem);
    }

    pagerWithListView: PagerWithListView;

    public getRootView(): PagerWithListView {
        if (this.pagerWithListView == null)
            this.pagerWithListView = new PagerWithListViewImpl(this.pager);
        return this.pagerWithListView;
    }

    asElement(): HTMLElement {
        return this.getRootView().asElement();
    }
}