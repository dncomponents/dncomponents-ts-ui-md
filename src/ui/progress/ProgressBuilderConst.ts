import {TemplateParser, UiStyle} from 'dncomponents/lib/TemplateParser';
import {MaterialUi} from '../MaterialUi';

export class ProgressBuilderConst {
    @UiStyle
    indeterminate: string;
    @UiStyle
    reversed: string;
    @UiStyle
    closed: string;

    static instance: ProgressBuilderConst = null;

    public static getInstance(): ProgressBuilderConst {
        if (ProgressBuilderConst.instance == null)
            ProgressBuilderConst.instance = new ProgressBuilderConst();
        return ProgressBuilderConst.instance;
    }

    private constructor() {
        TemplateParser.create(MaterialUi.getUi().progressBuilder, this, true).bind();
    }
}


