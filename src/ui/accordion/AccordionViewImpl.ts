/**
 * @author nikolasavic
 */
import {AccordionView} from 'dncomponents/lib/accordion/accrodion_views';
import {TemplateParser, UiField} from 'dncomponents/lib/TemplateParser';
import {IsElement} from 'dncomponents/lib/corecls/IsElement';

export class AccordionViewImpl implements AccordionView {

    @UiField
    root: HTMLElement;

    constructor(template: HTMLTemplateElement) {
        TemplateParser.create(template, this, true).bind();
    }

    addItem(item: IsElement<any>): void {
        this.root.appendChild(item.asElement());
    }

    asElement(): HTMLElement {
        return this.root;
    }

    clearAll(): void {
        this.root.innerHTML = '';
    }

    removeItem(item: IsElement<any>): void {
        this.root.removeChild(item.asElement());
    }
}