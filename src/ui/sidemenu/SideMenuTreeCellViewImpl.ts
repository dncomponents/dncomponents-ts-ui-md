import {TemplateParser} from 'dncomponents/lib/TemplateParser';
import {Util} from 'dncomponents/lib/corecls/Util';
import {TreeCellViewImpl} from '../tree/TreeUiImpl';
import {ClickHandler} from 'dncomponents/lib/corecls/handlers';
/**
 * @author nikolasavic
 */
export class SideMenuTreeCellViewImpl extends TreeCellViewImpl {

    constructor();
    constructor(template?: HTMLTemplateElement);
    constructor(template?: HTMLTemplateElement) {
        super();
        TemplateParser.create(template, this, true).bind();
        Util.addHandler(this.valuePanel, ClickHandler.onClick(evt => {
            evt.preventDefault();
        }));
    }


    addClickHandler(clickHandler: ClickHandler): void {
        clickHandler.addTo(this.valuePanel);
    }

}
