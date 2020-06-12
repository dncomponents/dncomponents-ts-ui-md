import {TreeUiImpl} from '../tree/TreeUiImpl';
import {Util} from "dncomponents/lib/corecls/Util";
import {treeTUi} from "./TreeTUiHtml";

export class TreeTUi extends TreeUiImpl {

    constructor() {
        let template = Util.createTemplate();
        template.innerHTML = treeTUi;
        super(template);
    }
}
