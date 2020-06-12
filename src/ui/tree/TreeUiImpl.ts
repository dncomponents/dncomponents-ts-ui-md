import {
    BaseTreeCellView,
    ParentTreeCellView,
    TreeCellCheckboxParentView,
    TreeCellCheckboxSimpleView,
    TreeUi
} from 'dncomponents/lib/tree/view/TreeUi';
import {TreeView} from 'dncomponents/lib/table/views/TableUi';
import {Util} from 'dncomponents/lib/corecls/Util';
import {BaseCellViewImpl} from 'dncomponents/lib/corecls/BaseCellViewImpl';
import {TemplateParser, UiField, UiStyle} from 'dncomponents/lib/TemplateParser';
import {EventHandler} from 'dncomponents/lib/corecls/events';
import {CheckBox} from 'dncomponents/lib/checkbox/CheckBox';
import {ClickHandler} from 'dncomponents/lib/corecls/handlers';
import {HasValue} from 'dncomponents/lib/corecls/ValueClasses';
import {Ui} from 'dncomponents/lib/views/Ui';
import {ListViewImpl} from "../list/ListViewImpl";

export class TreeUiImpl implements TreeUi {

    public static VIEW_ID: string = 'default';

    @UiField
    treeMain: HTMLTemplateElement;
    @UiField
    public treeItemSimple: HTMLTemplateElement;
    @UiField
    treeItemSimpleParent: HTMLTemplateElement;
    @UiField
    treeItemSimpleCheckbox: HTMLTemplateElement;
    @UiField
    treeItemSimpleParentCheckbox: HTMLTemplateElement;

    treeView: TreeView;

    constructor(template?: HTMLTemplateElement) {
        if (template)
            TemplateParser.create(template, this, true).bind();
    }

    public getTreeCellView(icon?: string): BaseTreeCellView {
        return new TreeCellViewImpl(this.treeItemSimple).setIcon(icon);
    }

    public getParentTreeCellView(icon?: string): ParentTreeCellView {
        return new TreeCellParentViewImpl(this.treeItemSimpleParent).setIcon(icon);
    }

    public getTreeCellCheckBoxView(icon?: string): TreeCellCheckboxSimpleView {
        return new TreeCellCheckboxSimpleViewImpl(this.treeItemSimpleCheckbox).setIcon(icon);
    }

    public getParentTreeCellCheckboxView(icon?: string): TreeCellCheckboxParentView {
        return new TreeCellCheckboxParentViewImpl(this.treeItemSimpleParentCheckbox).setIcon(icon);
    }

    public getRootView(): TreeView {
        if (this.treeView == null)
            this.treeView = new TreeViewImpl(this.treeMain);
        return this.treeView;
    }

    asElement(): HTMLElement {
        return this.getRootView().asElement();
    }

    getTreeUi(): TreeUi {
        return this;
    }
}

export class TreeCellViewImpl extends BaseCellViewImpl implements BaseTreeCellView {

    @UiStyle
    activeStyle: string;
    @UiField
    iconPanel: HTMLElement;
    @UiField
    iconParent: HTMLElement;
    icon: string;

    constructor(template?: HTMLTemplateElement) {
        super();
        if (template)
            TemplateParser.create(template, this, true).bind();
    }

    public setActive(b: boolean) {
        if (b)
            this.asElement().classList.add(this.activeStyle);
        else
            this.asElement().classList.remove(this.activeStyle);
    }

    public setPadding(padding: number) {
        Util.setPaddingLeft(this.asElement(), padding + 'px');
    }

    setIcon<C extends BaseTreeCellView>(icon: string): C {
        this.icon = icon;
        if (icon != null && this.iconParent != null && this.iconPanel != null) {
            Util.setVisible(this.iconParent, true);
            Ui.get().getIconRenderer().render(this.iconPanel, icon);
        }
        return <C><any>this;
    }

}

export class TreeCellParentViewImpl extends TreeCellViewImpl implements ParentTreeCellView {
    @UiField
    public openCloseElement: HTMLElement;
    @UiStyle
    public openStyle: string;
    @UiStyle
    public closeStyle: string;

    constructor(template?: HTMLTemplateElement) {
        super();
        if (template)
            TemplateParser.create(template, this, true).bind();
    }

    public setOpened(b: boolean) {
        if (!b)
            this.openCloseElement.innerHTML = this.openStyle;
        else
            this.openCloseElement.innerHTML = this.closeStyle;
    }

    public addOpenCloseHandler(handler: EventHandler<any>) {
        handler.addTo(this.openCloseElement);
    }
}

export class TreeCellCheckboxSimpleViewImpl extends TreeCellViewImpl implements TreeCellCheckboxSimpleView {
    @UiField
    checkBox: CheckBox<any>;

    public constructor(templateElement: HTMLTemplateElement) {
        super(templateElement);
        ClickHandler.onClick(evt => evt.stopPropagation()).addTo(this.checkBox.asElement());
    }

    public getCheckBox(): HasValue<boolean> {
        return this.checkBox;
    }

    public setSelected(b: boolean) {
        super.setSelected(b);
        this.checkBox.setValue(b);
    }
}

export class TreeCellCheckboxParentViewImpl extends TreeCellParentViewImpl implements TreeCellCheckboxParentView {
    @UiField
    checkBox: CheckBox<any>;

    public constructor(templateElement: HTMLTemplateElement) {
        super(templateElement);
        ClickHandler.onClick(evt => evt.stopImmediatePropagation()).addTo(this.checkBox.asElement());
    }

    public getCheckBox(): HasValue<boolean> {
        return this.checkBox;
    }

    public setIndeterminate(b: boolean) {
        this.checkBox.setIndeterminate(b);
    }

    public setSelected(b: boolean) {
        super.setSelected(b);
        this.checkBox.setValue(b);
    }
}

export class TreeViewImpl extends ListViewImpl implements TreeView {
    public constructor(templateElement: HTMLTemplateElement) {
        super(templateElement);
    }
}