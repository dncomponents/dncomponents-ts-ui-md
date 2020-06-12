import {AutocompleteMultiSelectItemView} from 'dncomponents/lib/autocomplete/views/AutocompleteMultiSelectItemView';
import {TemplateParser, UiField} from 'dncomponents/lib/TemplateParser';
import {ClickHandler} from 'dncomponents/lib/corecls/handlers';
import {MainViewSlots} from 'dncomponents/lib/BaseComponent';

export class AutocompleteMultiSelectItemViewImpl implements AutocompleteMultiSelectItemView {

    @UiField
    root: HTMLElement;
    @UiField
    mainPanel: HTMLElement;
    @UiField
    removeBtn: HTMLElement;

    constructor(template: HTMLTemplateElement) {
        TemplateParser.create(template, this, true).bind();
    };

    addRemoveClickHandler(clickHandler: ClickHandler): void {
        clickHandler.addTo(this.removeBtn);
    }

    asElement(): HTMLElement {
        return this.root;
    }

    getViewSlots(): MainViewSlots {
        return {getMainSlot: () => this.mainPanel};
    }

}