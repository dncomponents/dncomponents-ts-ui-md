import {PagerItemView, PagerUi, PagerView} from 'dncomponents/lib/table/views/TableUi';
import {PagerItemViewImpl} from './PagerItemViewImpl';
import {TemplateParser, UiField} from 'dncomponents/lib/TemplateParser';
import {PagerViewImpl} from './PagerViewImpl';

export class PagerUiImpl implements PagerUi<any> {

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

    pagerView: PagerView;

    public getRootView(): PagerView {
        if (this.pagerView == null)
            this.pagerView = new PagerViewImpl(this.pager);
        return this.pagerView;
    }

    asElement(): HTMLElement {
        return this.getRootView().asElement();
    }
}