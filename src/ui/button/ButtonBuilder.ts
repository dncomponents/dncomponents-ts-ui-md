import {ButtonBuilderConst} from './ButtonBuilderConst';
import {MaterialUi} from '../MaterialUi';
import {ButtonType} from './ButtonType';
import {MaterialIcons} from './MaterialIcons';
import {ButtonViewImpl} from './ButtonViewImpl';

export class ButtonBuilder {

    // private static BASE_STYLE = ButtonBuilderConst.getInstance().base;

    private templateElement: HTMLTemplateElement;

    private typeB: ButtonType;
    private icon: MaterialIcons;
    private label: string;

    //parser
    static readonly typeId = 'type';
    static readonly iconId = 'icon';
    static readonly labelId = 'label';

    private constructor() {
    }

    public static get(): ButtonBuilder {
        return new ButtonBuilder();
    }

    public type(buttonType: ButtonType): ButtonBuilder {
        this.typeB = buttonType;
        return this;
    }

    public setIcon(icon: MaterialIcons): ButtonBuilder {
        this.icon = icon;
        return this;
    }

    public setLabel(label: string): ButtonBuilder {
        this.label = label;
        return this;
    }

    public template(templateElement: HTMLTemplateElement): ButtonBuilder {
        this.templateElement = templateElement;
        return this;
    }

    public build(): ButtonViewImpl {
        if (this.templateElement == null)
            this.templateElement = MaterialUi.getUi().button;
        let view = new ButtonViewImpl(this.templateElement);
        if (this.typeB == null)
            this.typeB = ButtonType.TEXT;
        if (!(this.typeB.getStyle().length == 0))
            view.root.classList.add(this.typeB.getStyle());
        if (this.icon == null)
            view.iconPanel.remove();
        else
            view.iconPanel.innerHTML = this.icon.getStyle();
        if (this.label != null)
            view.textPanel.innerHTML = this.label;
        return view;
    }
}