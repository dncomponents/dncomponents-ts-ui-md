import {TemplateParser, UiField} from 'dncomponents/lib/TemplateParser';
import {BaseTextView, BaseTextViewBuilder} from './BaseTextView';
import {MaterialIcons} from '../button/MaterialIcons';
import {TextBoxType} from './TextBoxType';
import {MaterialUi} from '../MaterialUi';
import {TextBoxBuilderConst} from './TextBoxBuilderConst';

export class TextBoxViewImpl extends BaseTextView {

    static readonly VIEW_ID: string = 'default';
    @UiField
    inputElement: HTMLInputElement;
    //icons
    @UiField
    leadingIcon: HTMLElement;
    @UiField
    trailingIcon: HTMLElement;

    constructor();
    constructor(template?: HTMLTemplateElement);
    constructor(template?: HTMLTemplateElement) {
        super();
        TemplateParser.create(template, this, true).bind();
        this.currentRoot = this.wrapperRoot;
        this.init();
    };

    getInputElement(): HTMLElement {
        return this.inputElement;
    }

    protected getInputElementValue(): string {
        return this.inputElement.value;
    }

    protected setInputElementValue(value: string): void {
        this.inputElement.value = value;
    }

}

export class TextBoxViewBuilder extends BaseTextViewBuilder<TextBoxViewBuilder> {

    private leadingIcon: MaterialIcons;
    private trailingIcon: MaterialIcons;

    static readonly leadingIconId = 'leadingicon';
    static readonly trailingIconId = 'trailingicon';

    public static get(): TextBoxViewBuilder {
        return new TextBoxViewBuilder();
    }

    public setLeadingIcon(leadingIcon: MaterialIcons): TextBoxViewBuilder {
        this.leadingIcon = leadingIcon;
        return this;
    }

    public setTrailingIcon(trailingIcon: MaterialIcons): TextBoxViewBuilder {
        this.trailingIcon = trailingIcon;
        return this;
    }

    protected init(v: BaseTextView): void {
        if (this.type == null)
            this.type = TextBoxType.FILLED;
        this.initIcon(this.leadingIcon, v.root, (<TextBoxViewImpl>v).leadingIcon, TextBoxBuilderConst.getInstance().withLeadingIcon);
        this.initIcon(this.trailingIcon, v.root, (<TextBoxViewImpl>v).trailingIcon, TextBoxBuilderConst.getInstance().withTrailingIcon);
        super.init(v);
    }

    public build<B extends BaseTextView>(): B {
        if (this.templateElement == null)
            this.templateElement = MaterialUi.getUi().textbox;
        let view = new TextBoxViewImpl(this.templateElement);
        this.init(view);
        return <any>view;
    }

    private initIcon(icon: MaterialIcons, root: HTMLElement, iconPanel: HTMLElement, style: string): void {
        if (icon == null) {
            if (iconPanel != null)
                iconPanel.remove();
        } else {
            iconPanel.textContent = icon.getStyle();
            root.classList.add(style);
        }
    }

}