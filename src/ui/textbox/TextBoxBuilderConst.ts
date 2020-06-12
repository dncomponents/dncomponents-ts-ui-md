import {TemplateParser, UiStyle} from 'dncomponents/lib/TemplateParser';
import {MaterialUi} from '../MaterialUi';

export class TextBoxBuilderConst {

    @UiStyle
    base: string;
    @UiStyle
    outlined: string;
    @UiStyle
    fullwidth: string;
    @UiStyle
    textarea: string;
    @UiStyle
    disabled: string;
    @UiStyle
    dense: string;
    @UiStyle
    withLeadingIcon: string;
    @UiStyle
    withTrailingIcon: string;
    @UiStyle
    focused: string;
    @UiStyle
    floatingLabelAbove: string;
    @UiStyle
    lineRippleActive: string;
    @UiStyle
    outlineNotched: string;
    @UiStyle
    invalid: string;
    @UiStyle
    noLabel: string;
    @UiStyle
    invalidTextMessage: string;
    @UiStyle
    persistent: string;

    private static instance: TextBoxBuilderConst = null;

    public static getInstance(): TextBoxBuilderConst {
        if (TextBoxBuilderConst.instance == null)
            TextBoxBuilderConst.instance = new TextBoxBuilderConst();
        return TextBoxBuilderConst.instance;
    }

    private constructor() {
        TemplateParser.create(MaterialUi.getUi().textBoxBuilder, this, true).bind();
    }

}
