import {AccordionItemView, AccordionUi, AccordionView} from 'dncomponents/lib/accordion/accrodion_views';
import {TemplateParser, UiField} from 'dncomponents/lib/TemplateParser';
import {AccordionViewImpl} from './AccordionViewImpl';
import {AccordionItemViewImpl} from './AccordionItemViewImpl';

export class AccordionUiImpl implements AccordionUi {

    static VIEW_ID: string;
    @UiField
    accordion: HTMLTemplateElement;
    @UiField
    accordionItem: HTMLTemplateElement;
    accordionView: AccordionView;

    constructor(template: HTMLTemplateElement) {
        TemplateParser.create(template, this, true).bind();
    };


    public getAccordionItemView(): AccordionItemView {
        return new AccordionItemViewImpl(this.accordionItem);
    }


    public getRootView(): AccordionView {
        if (this.accordionView == null) {
            this.accordionView = new AccordionViewImpl(this.accordion);
        }
        return this.accordionView;
    }

    asElement(): HTMLElement {
        return this.getRootView().asElement();
    }
}