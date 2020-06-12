import {TemplateParser, UiField} from 'dncomponents/lib/TemplateParser';
import {MainViewSlots, MainViewSlotsImpl} from 'dncomponents/lib/BaseComponent';
import {ButtonView} from 'dncomponents/lib/button/view/ButtonView';

export class ButtonViewImpl implements ButtonView {
    public static readonly VIEW_ID = 'default';
    @UiField
    root: HTMLButtonElement;
    @UiField
    iconPanel: HTMLElement;
    @UiField
    textPanel: HTMLElement;

    constructor();
    constructor(template?: HTMLTemplateElement);
    constructor(template?: HTMLTemplateElement) {
        TemplateParser.create(template, this, true).bind();
    };

    public setText(text: string): void {
        this.textPanel.innerHTML = text;
    }


    public setHTML(html: string): void {
        this.textPanel.innerHTML = html;
    }

    public getHTML(): string {
        return this.textPanel.innerHTML;
    }


    public getText(): string {
        return this.textPanel.textContent;
    }


    public setEnabled(enabled: boolean): void {
        if (!enabled)
            this.root.setAttribute('disabled', '');
        else
            this.root.removeAttribute('disabled');
    }

    public asElement(): HTMLElement {
        return this.root;
    }

    getViewSlots(): MainViewSlots {
        return new MainViewSlotsImpl(this.textPanel);
    }

}