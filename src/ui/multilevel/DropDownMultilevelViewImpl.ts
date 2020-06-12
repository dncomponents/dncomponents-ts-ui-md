import {IsElement} from 'dncomponents/lib/corecls/IsElement';
import {DropDownView} from 'dncomponents/lib/dropdown/DropDownUi';
import {TemplateParser, UiField, UiStyle} from 'dncomponents/lib/TemplateParser';
import {EventHandler, HandlerRegistration} from 'dncomponents/lib/corecls/events';
import {ClickHandler} from 'dncomponents/lib/corecls/handlers';
import {Command} from 'dncomponents/lib/BaseComponent';

export class DropDownMultilevelViewImpl implements DropDownView {

    @UiField
    root: HTMLElement;
    @UiField
    button: HTMLElement;
    @UiField
    dropDownMenu: HTMLElement;
    @UiStyle
    dropDownMenuShowStyle: string;

    public constructor(template: HTMLTemplateElement) {
        TemplateParser.create(template, this, true).bind();
    }

    public addClickOnButton(handler: EventHandler<any>) {
        handler.addTo(this.button);
    }

    public showList(b: boolean) {
        if (b)
            this.dropDownMenu.classList.add(this.dropDownMenuShowStyle);
        else
            this.dropDownMenu.classList.remove(this.dropDownMenuShowStyle);
    }

    public addItem(item: IsElement<any>) {
        this.dropDownMenu.appendChild(item.asElement());
    }

    public removeItem(item: IsElement<any>) {
        item.asElement().remove();
    }

    public setButtonHtmlContent(content: HTMLElement) {
        this.button.innerHTML = '';
        this.button.appendChild(content);
    }

    public getRelativeElement(): IsElement<any> {
        return {asElement: () => this.button};
    }

    public setButtonContent(content: string) {
        this.button.innerHTML = content;
    }

    public addClickOutOfButton(clickHandler: ClickHandler): HandlerRegistration {
        return clickHandler.addTo(document.body);
    }

    public addDropDownPanel(dropDownPanel: IsElement<any>) {
        this.root.appendChild(dropDownPanel.asElement());
    }

    public asElement(): HTMLElement {
        return this.root;
    }
}

