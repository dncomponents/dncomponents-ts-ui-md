import {DropDownItemView, DropDownUi, DropDownView} from 'dncomponents/lib/dropdown/DropDownUi';
import {TemplateParser, UiField, UiStyle} from 'dncomponents/lib/TemplateParser';
import {EventHandler, HandlerRegistration} from 'dncomponents/lib/corecls/events';
import {IsElement} from 'dncomponents/lib/corecls/IsElement';
import {MainViewSlots, MainViewSlotsImpl} from 'dncomponents/lib/BaseComponent';
import {ClickHandler} from 'dncomponents/lib/corecls/handlers';

export class DropDownUiImpl implements DropDownUi {

    static readonly VIEW_ID: string = 'default';
    @UiField
    dropdown: HTMLTemplateElement;
    @UiField
    dropDownItem: HTMLTemplateElement;
    dropDownView: DropDownView;

    constructor();
    constructor(template?: HTMLTemplateElement);
    constructor(template?: HTMLTemplateElement) {
        TemplateParser.create(template, this, true).bind();
    };

    public getDropDownItemView(): DropDownItemView {
        return new DropDownItemViewImpl(this.dropDownItem);
    }

    public getRootView(): DropDownView {
        if (this.dropDownView == null)
            this.dropDownView = new DropDownViewImpl(this.dropdown);
        return this.dropDownView;
    }

    public asElement(): HTMLElement {
        return this.getRootView().asElement();
    }
}

export class DropDownViewImpl implements DropDownView {

    @UiField
    root: HTMLElement;
    @UiField
    button: HTMLElement;
    @UiField
    buttonText: HTMLElement;
    @UiField
    dropDownMenuPanel: HTMLElement;
    @UiField
    dropDownMenu: HTMLElement;
    @UiStyle
    dropDownMenuShowStyle: string;

    constructor(template: HTMLTemplateElement) {
        TemplateParser.create(template, this, true).bind();
    };

    public addClickOnButton(handler: EventHandler<any>) {
        handler.addTo(this.button);
    }

    public showList(b: boolean) {
        if (b)
            this.dropDownMenuPanel.classList.add(this.dropDownMenuShowStyle);
        else
            this.dropDownMenuPanel.classList.remove(this.dropDownMenuShowStyle);
    }

    public addItem(item: IsElement<any>) {
        this.dropDownMenu.appendChild(item.asElement());
    }

    public removeItem(item: IsElement<any>) {
        item.asElement().remove();
    }

    public setButtonHtmlContent(content: HTMLElement) {
        this.buttonText.innerHTML = '';
        this.buttonText.appendChild(content);
    }

    public getRelativeElement(): IsElement<any> {
        let self = this;
        return new class implements IsElement<any> {
            asElement(): any {
                return self.button;
            }
        };
    }

    public setButtonContent(content: string) {
        this.buttonText.innerHTML = content;
    }

    public addClickOutOfButton(clickHandler: ClickHandler): HandlerRegistration {
        return clickHandler.addTo(document.body);
    }

    public addDropDownPanel(dropDownPanel: IsElement<any>) {
    }

    public asElement(): HTMLElement {
        return this.root;
    }
}

export class DropDownItemViewImpl implements DropDownItemView {

    @UiField
    root: HTMLElement;

    constructor(template: HTMLTemplateElement) {
        TemplateParser.create(template, this, true).bind();
    };

    public setContent(content: string) {
        this.asElement().innerHTML = content;
    }

    public setHtmlContent(content: HTMLElement) {
        this.asElement().innerHTML = '';
        this.asElement().appendChild(content);
    }

    public addClickHandler(clickHandler: ClickHandler) {
        clickHandler.addTo(this.asElement());
    }

    public setActive(active: boolean) {
        if (active)
            this.asElement().classList.add('active');
        else
            this.asElement().classList.remove('active');
    }

    public asElement(): HTMLElement {
        return this.root;
    }

    public getViewSlots(): MainViewSlots {
        return new MainViewSlotsImpl(this.asElement());
    }
}