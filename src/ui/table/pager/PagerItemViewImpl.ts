import {PagerItemView} from 'dncomponents/lib/table/views/TableUi';
import {TemplateParser, UiField} from 'dncomponents/lib/TemplateParser';

export class PagerItemViewImpl implements PagerItemView {
    @UiField
    root: HTMLElement;
    @UiField
    textPanel: HTMLElement;


    public constructor(templateElement: HTMLTemplateElement) {
        TemplateParser.create(templateElement, this, true).bind();
    }

    public setText(str: string) {
        this.textPanel.innerHTML = str;
    }

    public setActive(b: boolean) {
        if (b)
            this.asElement().classList.add('active');
        else
            this.asElement().classList.remove('active');
    }

    public asElement(): HTMLElement {
        return this.root;
    }
}