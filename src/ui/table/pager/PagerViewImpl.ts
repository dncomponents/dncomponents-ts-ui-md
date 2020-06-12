import {Util} from 'dncomponents/lib/corecls/Util';
import {PagerView, PagerViewPresenter} from 'dncomponents/lib/table/views/TableUi';
import {ClickHandler} from 'dncomponents/lib/corecls/handlers';
import {ValueChangeHandler} from 'dncomponents/lib/corecls/ValueClasses';
import {IntegerBox} from 'dncomponents/lib/textbox/IntegerBox';
import {TemplateParser, UiField, UiStyle} from 'dncomponents/lib/TemplateParser';

export class PagerViewImpl implements PagerView {
    @UiField
    public root: HTMLElement;
    @UiField
    public first: HTMLElement;
    @UiField
    public previous: HTMLElement;
    @UiField
    public next: HTMLElement;
    @UiField
    public last: HTMLElement;
    @UiField
    public textPanel: HTMLElement;
    @UiField
    public numberField: IntegerBox;
    @UiStyle
    public disabledStyle: string;

    presenter: PagerViewPresenter;


    public constructor(templateElement: HTMLTemplateElement) {
        TemplateParser.create(templateElement, this, true).bind();
        this.init();
    }


    private init() {
        ClickHandler.onClick(evt => this.presenter.previous()).addTo(this.previous);
        ClickHandler.onClick(evt => this.presenter.next()).addTo(this.next);
        ClickHandler.onClick(evt => this.presenter.first()).addTo(this.first);
        ClickHandler.onClick(evt => this.presenter.last()).addTo(this.last);
        this.numberField.addValueChangeHandler(ValueChangeHandler.onValueChange(evt => {
            this.presenter.setCurrentPage(evt.value);
        }));
    }


    public setText(s: string) {
        this.textPanel.innerHTML = s;
    }

    public setPresenter(presenter: PagerViewPresenter) {
        this.presenter = presenter;
    }

    public setPageNumber(pageNumber: number) {
        this.numberField.setValue(pageNumber);
    }

    public enablePrevious(b: boolean) {
        if (b)
            Util.removeStyle(this.previous, this.disabledStyle);
        else
            Util.addStyle(this.previous, this.disabledStyle);
    }

    public enableNext(b: boolean) {
        if (b)
            Util.removeStyle(this.next, this.disabledStyle);
        else
            Util.addStyle(this.next, this.disabledStyle);
    }


    public asElement(): HTMLElement {
        return this.root;
    }
}