import {TemplateParser, UiStyle} from 'dncomponents/lib/TemplateParser';
import {MaterialUi} from '../MaterialUi';

export class ButtonBuilderConst {
    @UiStyle
    base: string;
    @UiStyle
    raised: string;
    @UiStyle
    unelevated: string;
    @UiStyle
    outlined: string;
    @UiStyle
    dense: string;
    @UiStyle
    icon: string;


    private static instance: ButtonBuilderConst;

    public static getInstance(): ButtonBuilderConst {
        if (this.instance == null)
            this.instance = new ButtonBuilderConst();
        return this.instance;
    }

    private constructor() {
        TemplateParser.create(MaterialUi.getUi().buttonBuilder, this, true).bind();
    }

}