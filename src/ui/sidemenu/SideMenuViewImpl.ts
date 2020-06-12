import {SideMenuView} from 'dncomponents/lib/sidemenu/view/SideMenuView';
import {Tree, TreeCellConfig} from 'dncomponents/lib/tree/Tree';
import {Util} from 'dncomponents/lib/corecls/Util';
import {TemplateParser, UiField, UiStyle} from 'dncomponents/lib/TemplateParser';
import {SelectionMode} from 'dncomponents/lib/corecls/selectionmodel/selectionImpl';
import {TreeUiImpl} from '../tree/TreeUiImpl';
import {BaseTreeCellView, ParentTreeCellView} from 'dncomponents/lib/tree/view/TreeUi';
import {HandlerRegistration} from 'dncomponents/lib/corecls/events';
import {FilterHandler, KeyUpHandler, SelectionHandler} from 'dncomponents/lib/corecls/handlers';
import {TreeNode} from 'dncomponents/lib/tree/TreeNode';
import {java} from 'j4ts';
import {Filter} from 'dncomponents/lib/corecls/Filter';
import {CellRenderer} from 'dncomponents/lib/BaseCell';
import {SideMenuTreeCellParentViewImpl} from './SideMenuTreeCellParentViewImpl';
import {SideMenuTreeCellViewImpl} from './SideMenuTreeCellViewImpl';

export class SideMenuViewImpl implements SideMenuView {
    static VIEW_ID: string = 'default';
    @UiField
    root: HTMLElement;
    @UiField
    treePanel: HTMLElement;
    @UiField
    searchField: HTMLInputElement;
    @UiField
    treeSideTemplate: HTMLTemplateElement;
    @UiStyle
    collapsedStyle: string;
    @UiStyle
    showNavBarPanelStyle: string;
    @UiStyle
    hideNavBarPanelStyle: string;
    @UiField
    public navBtn: HTMLButtonElement;
    @UiField
    public navbarPanel: HTMLDivElement;
    @UiField
    public treeHolder: HTMLDivElement;
    tree: Tree<any>;
    private collapsedToggle: boolean = true;

    constructor();
    constructor(template?: HTMLTemplateElement);
    constructor(template?: HTMLTemplateElement) {
        TemplateParser.create(template, this, true).bind();
        this.initTree();
        this.init();
    }

    private initTree() {
        let self = this;
        this.tree = new Tree(new class extends TreeUiImpl {
            constructor() {
                super(self.treeSideTemplate);
            }

            getParentTreeCellView(icon: string): ParentTreeCellView {
                return new SideMenuTreeCellParentViewImpl(this.treeItemSimpleParent).setIcon(icon);
            }

            getTreeCellView(icon: string): BaseTreeCellView {
                return new SideMenuTreeCellViewImpl(this.treeItemSimple).setIcon(icon);
            }
        });
        Util.replaceRaw(this.tree, this.treeHolder);
    }


    private init() {
        this.tree.getSelectionModel().setSelectionMode(SelectionMode.SINGLE);
        this.tree.setScrollHeight('100%');
        this.tree.showRoot(false);
        this.tree.showChildren(true);
        this.tree.setEditable(false);
        Util.addHandler(this.searchField, KeyUpHandler.onKeyUp(evt => {
            this.tree.expandAll(this.searchField.value != null);
            this.tree.drawData();
        }));
        window.addEventListener('resize', ev => this.show(null));
        this.tree.asElement().style.setProperty('padding-bottom', '80px');
    }

    public showFilter(b: boolean) {
        Util.setVisible(this.searchField, b);
    }

    public setRoot(item: TreeNode<any>) {
        this.tree.setRoot(item);
    }

    public drawData() {
        this.tree.drawData();
    }

    public expandAll(b: boolean) {
        this.tree.expandAll(b);
    }

    public addSelectionHandler<T>(handler: SelectionHandler<java.util.List<TreeNode<T>>>): HandlerRegistration {
        return this.tree.getSelectionModel().addSelectionHandler(handler);
    }

    public getAll(): java.util.List<TreeNode<any>> {
        return this.tree.getRowsData();
    }

    public getValueFromView(): string {
        return this.searchField.value;
    }

    public registerFilter(filter: Filter<TreeNode<any>>) {
        this.tree.addFilter(<any>(filter));
        filter.addFilterHandler(FilterHandler.onFilter(evt => this.tree.expandAll(true)));
    }

    public showNode(treeNode: TreeNode<any>) {
        this.tree.showTreeNode(treeNode);
    }

    public setCellConfig(menuItem: TreeNode<any>, cellConfig: TreeCellConfig<any, any>) {
        // @ts-ignore
        this.tree.setCellConfig(menuItem, cellConfig);
    }

    public setRenderer<T>(renderer: CellRenderer<TreeNode<T>, any>) {
        this.tree.getRowCellConfig().getCellBuilder().setCellRenderer(renderer);
    }

    public asElement(): HTMLElement {
        return this.root;
    }

    public setHeight(height: string) {
        this.treePanel.style.maxHeight = height;
    }

    public setWidth(width: string) {
        this.root.style.minWidth = width;
    }

    public setSelected<T>(item: TreeNode<T>, selected: boolean, fireEvent: boolean) {
        this.tree.getSelectionModel().setSelected(item, selected, fireEvent);
    }

    public show(b: boolean) {
        if (b == null) {
            if (this.root.classList.contains(this.showNavBarPanelStyle)) {
                this.root.classList.remove(this.showNavBarPanelStyle);
            }
            if (this.root.classList.contains(this.hideNavBarPanelStyle)) {
                this.root.classList.remove(this.hideNavBarPanelStyle);
            }
            return;
        }
        if (b) {
            this.root.classList.add(this.showNavBarPanelStyle);
            this.root.classList.remove(this.hideNavBarPanelStyle);
        } else {
            this.root.classList.add(this.hideNavBarPanelStyle);
            this.root.classList.remove(this.showNavBarPanelStyle);
        }

    }

    public isShown(): boolean {
        return false;
    }
}
