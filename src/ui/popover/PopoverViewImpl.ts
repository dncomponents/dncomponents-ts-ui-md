 import {PopoverView, PopoverViewSlots} from 'dncomponents/lib/popover/view/PopoverView';
import {TemplateParser, UiField} from 'dncomponents/lib/TemplateParser';
 import {TooltipViewImpl} from '../tooltip/TooltipViewImpl';

export class PopoverViewImpl extends TooltipViewImpl<PopoverViewSlots> implements PopoverView {

    static readonly VIEW_ID: string = 'default';
    @UiField
    popoverTitle: HTMLElement;

    constructor(template: HTMLTemplateElement) {
        super();
        TemplateParser.create(template, this, true).bind();
    }

    public setPopoverTitle(title: string) {
        this.popoverTitle.innerHTML = title;
    }

    viewSlots: PopoverViewSlots = null;

    public getViewSlots(): PopoverViewSlots {
        if (this.viewSlots == null)
            this.viewSlots = new PopoverViewSlotsImpl(this);
        return this.viewSlots;
    }
}

export class PopoverViewSlotsImpl implements PopoverViewSlots {
    view: PopoverViewImpl;

    constructor(view: PopoverViewImpl) {
        this.view = view;
    }

    getMainSlot(): HTMLElement {
        return this.view.popoverTitle;
    }

    getTitle(): HTMLElement {
        return this.view.contentPanel;
    }
}