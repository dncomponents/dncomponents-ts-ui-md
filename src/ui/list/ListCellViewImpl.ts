import {BaseCellViewImpl} from 'dncomponents/lib/corecls/BaseCellViewImpl';
import {TemplateParser} from 'dncomponents/lib/TemplateParser';

export class ListCellViewImpl extends BaseCellViewImpl {

    constructor(template?: HTMLTemplateElement) {
        super();
        TemplateParser.create(template, this, true).bind();
    }

    public getValuePanel(): HTMLElement {
        return this.asElement();
    }
}
