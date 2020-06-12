import {DropDownTreeNodePanelView} from 'dncomponents/lib/multi/view/DropDownMultiLevelUi';
import {MouseEnterHandler, MouseLeaveHandler} from 'dncomponents/lib/corecls/handlers';
import {IsElement} from 'dncomponents/lib/corecls/IsElement';
import {TemplateParser, UiField} from 'dncomponents/lib/TemplateParser';

export class DropDownTreeNodePanelViewImpl implements DropDownTreeNodePanelView {

    @UiField
    public root: HTMLElement;

    // popper: Popper;

    public constructor(template: HTMLTemplateElement) {
        TemplateParser.create(template, this, true).bind();
        setTimeout(p => {
            this.root.style.left = '-30px !important';
        }, 200);
    }

    public asElement(): HTMLElement {
        return this.root;
    }

    public add(item: IsElement<any>) {
        this.root.appendChild(item.asElement());
    }

    public clear() {
        this.root.innerHTML = '';
    }

    public show(relativeTo: IsElement<any>, b: boolean, orientation: string) {
        if (b)
            this.root.classList.add('show');
        else
            this.root.classList.remove('show');
        // if (this.popper == null) {
        //     let def: popover.Popper.Defaults = popover.Popper.Defaults.create();
        //     def.setPlacement(orientation);
        //     this.popper = new popover.Popper(relativeTo.asElement(), this.asElement(), def);
        // }
        // this.popper.scheduleUpdate();
    }

    public addMouseEnterHandler(mouseEnterHandler: MouseEnterHandler) {
        mouseEnterHandler.addTo(this.asElement());
    }

    public addMouseLeaveHandler(mouseLeaveHandler: MouseLeaveHandler) {
        mouseLeaveHandler.addTo(this.asElement());
    }
}
