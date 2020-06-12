import {CheckBoxViewImpl} from '../checkbox/CheckBoxViewImpl';
import {RadioView} from 'dncomponents/lib/checkbox/RadioView';
import {TemplateParser} from 'dncomponents/lib/TemplateParser';

export class RadioViewImpl extends CheckBoxViewImpl implements RadioView {

    static readonly VIEW_ID = 'default';

    constructor(template: HTMLTemplateElement) {
        super();
        TemplateParser.create(template, this, true).bind();
        this.labelText.addEventListener('click', ev => {
            if (this.isDisabled()) {
                return;
            }
            if (!this.checkBoxInput.checked) {
                this.checkBoxInput.checked = true;
                this.checkBoxInput.dispatchEvent(new Event('change', {bubbles: true}));
            }
        });

    }

}

