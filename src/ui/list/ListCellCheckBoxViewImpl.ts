import {TemplateParser, UiField} from 'dncomponents/lib/TemplateParser';
import {BaseCellViewImpl} from 'dncomponents/lib/corecls/BaseCellViewImpl';
import {ListCellCheckBoxView} from 'dncomponents/lib/list/ListUi';
import {CheckBox} from 'dncomponents/lib/checkbox/CheckBox';
import {HasValue} from 'dncomponents/lib/corecls/ValueClasses';

export class ListCellCheckBoxViewImpl extends BaseCellViewImpl implements ListCellCheckBoxView {
    @UiField
    root: HTMLElement;
    @UiField
    checkBox: CheckBox<any>;
    @UiField
    valuePanel: HTMLElement;

    constructor(template?: HTMLTemplateElement) {
        super();
        TemplateParser.create(template, this, true).bind();
    }

    public setToValuePanel(element: Element) {
        this.getValuePanel().innerHTML = '';
        this.getValuePanel().appendChild(element);
    }

    public asElement(): HTMLElement {
        return this.root;
    }

    public getValuePanel(): HTMLElement {
        return this.valuePanel;
    }

    public getCheckbox(): HasValue<boolean> {
        return this.checkBox;
    }

    public setSelected(b: boolean) {
        super.setSelected(b);
        this.checkBox.setValue(b);
    }
}
