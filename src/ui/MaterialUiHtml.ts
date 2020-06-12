export class MaterialUiHtml {

    static ui="<template ui-field=\"checkBoxFactory\">\n" +
        "    <template ui-field=\"checkBoxDefault\">\n" +
        "        <div ui-field=\"root\" class=\"form-check\">\n" +
        "            <label class=\"form-check-label\">\n" +
        "                <input ui-field=\"checkBoxInput\" class=\"form-check-input\" type=\"checkbox\" value=\"\">\n" +
        "                <span ui-field=\"labelText\"></span>\n" +
        "            </label>\n" +
        "        </div>\n" +
        "    </template>\n" +
        "    <template ui-field=\"checkBoxSimple\">\n" +
        "        <input ui-field=\"checkBoxInput\" class=\"mdc-checkbox__native-controlt\" type=\"checkbox\" value=\"\">\n" +
        "    </template>\n" +
        "</template>\n" +
        "\n" +
        "<style-item ui-field=\"rowHeight\" class=\"49\"></style-item>\n" +
        "<!--   SIDE MENU -->\n" +
        "<template ui-field=\"treeCellIconView\">\n" +
        "    <li ui-field=\"root\" class=\"list-group-item\">\n" +
        "        <a>\n" +
        "            <i ui-field=\"iconPanel\" class=\"fa fa-envelope-open\"></i>\n" +
        "            <span ui-field=\"valuePanel\"></span>\n" +
        "        </a>\n" +
        "    </li>\n" +
        "    <style-item ui-field=\"modelSelected\" class=\"active\"></style-item>\n" +
        "</template>\n" +
        "<template ui-field=\"treeCellParentIconView\">\n" +
        "    <li ui-field=\"root\" class=\"list-group-item\">\n" +
        "        <a href=\"javascript:void(0)\">\n" +
        "            <i ui-field=\"iconPanel\" class=\"fa fa-bus\"></i>\n" +
        "            <span ui-field=\"valuePanel\"></span>\n" +
        "            <span class=\"pull-right-container\">\n" +
        "                          <i ui-field=\"openCloseElement\" class=\"material-icons\"></i>\n" +
        "                 </span>\n" +
        "        </a>\n" +
        "    </li>\n" +
        "    <style-item ui-field=\"openStyle\" class=\"chevron_right\"></style-item>\n" +
        "    <style-item ui-field=\"closeStyle\" class=\"expand_more\"></style-item>\n" +
        "</template>\n" +
        "<template ui-field=\"treeCellIconViewwww\">\n" +
        "    <li ui-field=\"root\" class=\"list-group-item\">\n" +
        "        <a href=\"javascript:void(0)\">\n" +
        "            <i ui-field=\"iconPanel\" class=\"fa fa-bus\"></i>\n" +
        "            <span ui-field=\"valuePanel\"></span>\n" +
        "            <span class=\"pull-right-container\">\n" +
        "                          <i ui-field=\"openCloseElement\" class=\"material-icons\" class=\"fa fa-angle-down pull-right\"></i>\n" +
        "                 </span>\n" +
        "        </a>\n" +
        "    </li>\n" +
        "    <style-item ui-field=\"openStyle\" class=\"chevron_right\"></style-item>\n" +
        "    <style-item ui-field=\"closeStyle\" class=\"expand_more\"></style-item>\n" +
        "</template>\n" +
        "<template ui-field=\"filterPanelList\">\n" +
        "    <div ui-field=\"root\" class=\"d-flex\"> <!--style=\"float: left;text-align: left;margin-left: 10px;display: flex;\"-->\n" +
        "        <div style=\"text-align: left;margin-left: 2px;\"> <!-- style=\"display: flex;\"-->\n" +
        "            <dn-autocomplete ui-field=\"ac\" template-id=\"acc\"></dn-autocomplete>\n" +
        "            <div ui-field=\"valueHolder\"></div>\n" +
        "        </div>\n" +
        "        <div style=\"position: relative\">\n" +
        "            <i ui-field=\"clear\" class=\"material-icons\" style=\"\n" +
        "            font-size: 16px;margin-left: 10px;\n" +
        "            position: absolute;\n" +
        "            top: 0;\n" +
        "            left: 200px;\n" +
        "            cursor: pointer;\">\n" +
        "                close\n" +
        "            </i>\n" +
        "        </div>\n" +
        "\n" +
        "    </div>\n" +
        "    <template ui-template=\"acc\" ui-field=\"accTemplate\">\n" +
        "        <div ui-field='root' class='mdc-select'>\n" +
        "            <div ui-field='button' class=\"mdc-select__anchor demo-width-class\">\n" +
        "                <i class=\"mdc-select__dropdown-icon\"></i>\n" +
        "                <div class=\"mdc-select__selected-text\"></div>\n" +
        "                <span ui-field='buttonText' class=\"mdc-floating-label\">Choose ...</span>\n" +
        "                <div class=\"mdc-line-ripple\"></div>\n" +
        "            </div>\n" +
        "            <div ui-field='listPanel' class='mdc-select__menu mdc-menu mdc-menu-surface demo-width-class'\n" +
        "                 style=\"transform-origin: center top;left: 0px;top: 56px;max-height: 519px;\"\n" +
        "            >\n" +
        "                <dn-text-box ui-field='textBox'></dn-text-box>\n" +
        "                <dn-list ui-field=\"list\"></dn-list>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </template>\n" +
        "    <template ui-field=\"autocompleteMs\">\n" +
        "        <template ui-field=\"rootView\">\n" +
        "            <div ui-field='root' class='autocomplete-multiselect'>\n" +
        "                <div ui-field=\"selectionPanel\" class=\"mdc-chip-set\">\n" +
        "\n" +
        "                </div>\n" +
        "                <div ui-field='listPanel' style=\"width: 100%;left: 0\"\n" +
        "                     class='mdc-select__menu mdc-menu mdc-menu-surface demo-width-class'>\n" +
        "                    <dn-text-box ui-field='textBox' style=\"width: 100%\"></dn-text-box>\n" +
        "                    <dn-list ui-field=\"list\"></dn-list>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </template>\n" +
        "        <template ui-field=\"itemView\">\n" +
        "            <div class=\"mdc-chip\" role=\"row\" ui-field=\"root\">\n" +
        "                <div class=\"mdc-chip__ripple\"></div>\n" +
        "                <span role=\"gridcell\">\n" +
        "               <span ui-field=\"mainPanel\" role=\"button\" tabindex=\"0\" class=\"mdc-chip__text\">Chip One</span>\n" +
        "            </span>\n" +
        "                <i ui-field=\"removeBtn\" class=\"material-icons\" style=\"font-size: 16px;margin-left: 10px\">\n" +
        "                    close\n" +
        "                </i>\n" +
        "            </div>\n" +
        "        </template>\n" +
        "    </template>\n" +
        "</template>\n" +
        "<!--  TEXTBOX  -->\n" +
        "<template ui-field=\"textbox\">\n" +
        "    <div ui-field=\"wrapperRoot\" class=\"inline-text-field-container\">\n" +
        "        <div ui-field=\"root\" class=\"mdc-text-field\">\n" +
        "            <i ui-field=\"leadingIcon\" class=\"material-icons mdc-text-field__icon\">phone</i>\n" +
        "            <input ui-field=\"inputElement\" type=\"text\" class=\"mdc-text-field__input\">\n" +
        "            <i ui-field=\"trailingIcon\" class=\"material-icons mdc-text-field__icon\" tabindex=\"0\" role=\"button\">event</i>\n" +
        "            <div ui-field=\"ripple\" class=\"mdc-line-ripple\"></div>\n" +
        "            <label ui-field=\"filledLabel\" class=\"mdc-floating-label\"></label>\n" +
        "            <div ui-field=\"notchedPanel\" class=\"mdc-notched-outline\">\n" +
        "                <div class=\"mdc-notched-outline__leading\"></div>\n" +
        "                <div class=\"mdc-notched-outline__notch\">\n" +
        "                    <label ui-field=\"outLinedLabel\" class=\"mdc-floating-label\">Phone Number</label>\n" +
        "                </div>\n" +
        "                <div class=\"mdc-notched-outline__trailing\"></div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <div ui-field=\"helperPanel\" class=\"mdc-text-field-helper-line\">\n" +
        "            <div ui-field=\"helperText\" class=\"mdc-text-field-helper-text mdc-text-field-helper-text--persistent\">\n" +
        "                Helper message\n" +
        "            </div>\n" +
        "            <div ui-field=\"characterCounter\" class=\"mdc-text-field-character-counter\">0 / 20</div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "</template>\n" +
        "<template ui-field=\"textBoxBuilder\">\n" +
        "    <style-item ui-field=\"base\" class=\"mdc-text-field\"></style-item>\n" +
        "    <style-item ui-field=\"outlined\" class=\"mdc-text-field--outlined\"></style-item>\n" +
        "    <style-item ui-field=\"fullwidth\" class=\"mdc-text-field--fullwidth\"></style-item>\n" +
        "    <style-item ui-field=\"textarea\" class=\"mdc-text-field--textarea\"></style-item>\n" +
        "    <style-item ui-field=\"disabled\" class=\"mdc-text-field--disabled\"></style-item>\n" +
        "    <style-item ui-field=\"dense\" class=\"mdc-text-field--dense\"></style-item>\n" +
        "    <style-item ui-field=\"withLeadingIcon\" class=\"mdc-text-field--with-leading-icon\"></style-item>\n" +
        "    <style-item ui-field=\"withTrailingIcon\" class=\"mdc-text-field--with-trailing-icon\"></style-item>\n" +
        "    <style-item ui-field=\"focused\" class=\"mdc-text-field--focused\"></style-item>\n" +
        "    <style-item ui-field=\"noLabel\" class=\"mdc-text-field--no-label\"></style-item>\n" +
        "    <!--O-->\n" +
        "    <style-item ui-field=\"floatingLabelAbove\" class=\"mdc-floating-label--float-above\"></style-item>\n" +
        "    <style-item ui-field=\"lineRippleActive\" class=\"mdc-line-ripple--active\"></style-item>\n" +
        "    <!--outlined-->\n" +
        "    <style-item ui-field=\"outlineNotched\" class=\"mdc-notched-outline--notched\"></style-item>\n" +
        "    <!--error-->\n" +
        "    <style-item ui-field=\"invalid\" class=\"mdc-text-field--invalid\"></style-item>\n" +
        "    <style-item ui-field=\"invalidTextMessage\" class=\"mdc-text-field-helper-text--validation-msg\"></style-item>\n" +
        "    <style-item ui-field=\"persistent\" class=\"mdc-text-field-helper-text--persistent\"></style-item>\n" +
        "</template>\n" +
        "\n" +
        "<!--  end TEXT_BOX-->\n" +
        "<!--  HELPER_TEXT  -->\n" +
        "<template ui-field=\"helperText\">\n" +
        "    <p ui-field=\"root\"\n" +
        "       class=\"mdc-text-field-helper-text\t mdc-text-field-helper-text--persistent mdc-text-field-helper-text--validation-msg\">\n" +
        "        Helper Text\n" +
        "    </p>\n" +
        "    <style-item ui-field=\"base\" class=\"mdc-text-field-helper-text\"></style-item>\n" +
        "    <style-item ui-field=\"persistent\" class=\"mdc-text-field-helper-text--persistent\"></style-item>\n" +
        "    <style-item ui-field=\"validation\" class=\"mdc-text-field-helper-text--validation-msg\"></style-item>\n" +
        "</template>\n" +
        "<!-- end HELPER_TEXT  -->\n" +
        "\n" +
        "<!--  TEXTAREA  -->\n" +
        "<template ui-field=\"textarea\">\n" +
        "    <div ui-field=\"wrapperRoot\" class=\"inline-text-field-container\">\n" +
        "        <div ui-field=\"root\" class=\"mdc-text-field mdc-text-field--textarea\">\n" +
        "            <div ui-field=\"characterCounter\" class=\"mdc-text-field-character-counter\">0 / 20</div>\n" +
        "            <textarea ui-field=\"inputElement\" id=\"textarea\" class=\"mdc-text-field__input\" rows=\"8\" cols=\"40\"></textarea>\n" +
        "            <div ui-field=\"ripple\" class=\"mdc-line-ripple\"></div>\n" +
        "            <label ui-field=\"filledLabel\" class=\"mdc-floating-label\"></label>\n" +
        "            <div ui-field=\"notchedPanel\" class=\"mdc-notched-outline\">\n" +
        "                <div class=\"mdc-notched-outline__leading\"></div>\n" +
        "                <div class=\"mdc-notched-outline__notch\">\n" +
        "                    <label ui-field=\"outLinedLabel\" class=\"mdc-floating-label\"></label>\n" +
        "                </div>\n" +
        "                <div class=\"mdc-notched-outline__trailing\"></div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <div ui-field=\"helperPanel\" class=\"mdc-text-field-helper-line\">\n" +
        "            <div ui-field=\"helperText\" class=\"mdc-text-field-helper-text mdc-text-field-helper-text--persistent\">\n" +
        "                Helper message\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <style-item ui-field=\"focusTextAreaStyle\" class=\"mdc-text-field--focused\"></style-item>\n" +
        "    <style-item ui-field=\"focusFloatingLabelStyle\" class=\"mdc-floating-label--float-above\"></style-item>\n" +
        "    <style-item ui-field=\"notchedStyle\" class=\"mdc-notched-outline--notched\"></style-item>\n" +
        "</template>\n" +
        "<!--  end TEXTAREA  -->\n" +
        "\n" +
        "<!--RADIO-->\n" +
        "<template ui-field=\"radio\">\n" +
        "    <div ui-field=\"root\" class=\"mdc-form-field\">\n" +
        "        <div class=\"mdc-radio\">\n" +
        "            <input ui-field=\"checkBoxInput\" class=\"mdc-radio__native-control\" type=\"radio\" id=\"radio-1\" name=\"radios\"\n" +
        "                   checked>\n" +
        "            <div class=\"mdc-radio__background\">\n" +
        "                <div class=\"mdc-radio__outer-circle\"></div>\n" +
        "                <div class=\"mdc-radio__inner-circle\"></div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <label ui-field=\"labelText\"></label>\n" +
        "    </div>\n" +
        "</template>\n" +
        "<!--end RADIO-->\n" +
        "<!--CHECKBOX-->\n" +
        "<template ui-field=\"checkbox\">\n" +
        "    <div ui-field=\"root\" class=\"mdc-form-field\">\n" +
        "        <div class=\"mdc-checkbox\">\n" +
        "            <input ui-field=\"checkBoxInput\" type=\"checkbox\"\n" +
        "                   class=\"mdc-checkbox__native-control\"\n" +
        "                   id=\"checkbox-1\"/>\n" +
        "            <div class=\"mdc-checkbox__background\">\n" +
        "                <svg class=\"mdc-checkbox__checkmark\"\n" +
        "                     viewBox=\"0 0 24 24\">\n" +
        "                    <path class=\"mdc-checkbox__checkmark-path\"\n" +
        "                          fill=\"none\"\n" +
        "                          d=\"M1.73,12.91 8.1,19.28 22.79,4.59\"/>\n" +
        "                </svg>\n" +
        "                <div class=\"mdc-checkbox__mixedmark\"></div>\n" +
        "            </div>\n" +
        "            <div class=\"mdc-checkbox__ripple\"></div>\n" +
        "        </div>\n" +
        "        <label ui-field=\"labelText\"></label>\n" +
        "    </div>\n" +
        "</template>\n" +
        "<!--end CHECKBOX-->\n" +
        "<!--SIMPLE CHECKBOX-->\n" +
        "<template ui-field=\"simplecheckbox\">\n" +
        "    <input ui-field=\"root\" class=\"form-check-input\" type=\"checkbox\" value=\"\">\n" +
        "</template>\n" +
        "<!--  BUTTON  -->\n" +
        "<template ui-field=\"button\">\n" +
        "    <button ui-field=\"root\" class=\"mdc-button\">\n" +
        "        <div class=\"mdc-button__ripple\"></div>\n" +
        "        <i ui-field=\"iconPanel\" class=\"material-icons mdc-button__icon\" aria-hidden=\"true\">favorite</i>\n" +
        "        <span ui-field=\"textPanel\" class=\"mdc-button__label\">Button</span>\n" +
        "    </button>\n" +
        "</template>\n" +
        "<template ui-field=\"buttonBuilder\">\n" +
        "    <style-item ui-field=\"base\" class=\"mdc-button\"></style-item>\n" +
        "    <style-item ui-field=\"raised\" class=\"mdc-button--raised\"></style-item>\n" +
        "    <style-item ui-field=\"unelevated\" class=\"mdc-button--unelevated\"></style-item>\n" +
        "    <style-item ui-field=\"outlined\" class=\"mdc-button--outlined\"></style-item>\n" +
        "    <style-item ui-field=\"dense\" class=\"mdc-button--dense\"></style-item>\n" +
        "    <style-item ui-field=\"icon\" class=\"mdc-button__icon\"></style-item>\n" +
        "</template>\n" +
        "<!-- end BUTTON  -->\n" +
        "\n" +
        "<!--  TAB  -->\n" +
        "<template ui-field=\"tabUi\">\n" +
        "    <template ui-field=\"tab\">\n" +
        "        <div class=\"mdc-tab-scroller\" ui-field=\"root\">\n" +
        "            <div class=\"mdc-tab-scroller__scroll-area\" role=\"tablist\">\n" +
        "                <div class=\"mdc-tab-scroller__scroll-area\">\n" +
        "                    <div ui-field=\"tabPanel\" class=\"mdc-tab-scroller__scroll-content\">\n" +
        "\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <div ui-field=\"tabContentPanel\" class=\"tab-content\" style=\"padding:10px;\">\n" +
        "\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </template>\n" +
        "    <template ui-field=\"tabVertical\">\n" +
        "        <div ui-field=\"root\" class=\"mdc-tab-scroller\" style=\"display: flex\">\n" +
        "            <div class=\"mdc-tab-scroller__scroll-area\" role=\"tablist\">\n" +
        "                <div class=\"mdc-tab-scroller__scroll-area\">\n" +
        "                    <div ui-field=\"tabPanel\" class=\"mdc-tab-scroller__scroll-content\" style=\"display: block\">\n" +
        "\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <div ui-field=\"tabContentPanel\" class=\"tab-content\" style=\"padding:10px;\">\n" +
        "\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </template>\n" +
        "\n" +
        "    <template ui-field=\"tabItem\">\n" +
        "        <button ui-field=\"tabItemNav\" class=\"mdc-tab\" role=\"tab\" aria-selected=\"true\" tabindex=\"0\">\n" +
        "                               <span class=\"mdc-tab__content\">\n" +
        "                                <span ui-field=\"iconPanel\" class=\"mdc-tab__icon material-icons\"\n" +
        "                                      aria-hidden=\"true\"></span>\n" +
        "                                <span ui-field=\"tabItemPanel\" class=\"mdc-tab__text-label\">Favorites</span>\n" +
        "                              </span>\n" +
        "            <span ui-field=\"indicator\" class=\"mdc-tab-indicator\">\n" +
        "                                <span class=\"mdc-tab-indicator__content mdc-tab-indicator__content--underline\"></span>\n" +
        "                              </span>\n" +
        "            <span class=\"mdc-tab__ripple\"></span>\n" +
        "        </button>\n" +
        "\n" +
        "        <div ui-field=\"tabItemContent\" class=\"tab-pane fade\" role=\"tabpanel\">\n" +
        "\n" +
        "        </div>\n" +
        "\n" +
        "        <style-item ui-field=\"showTabContentStyle\" class=\"showTabContent\"/>\n" +
        "        <style-item ui-field=\"active\" class=\"mdc-tab--active\"/>\n" +
        "        <style-item ui-field=\"activeIndicator\" class=\"mdc-tab-indicator--active\"/>\n" +
        "    </template>\n" +
        "</template>\n" +
        "<!-- end TAB  -->\n" +
        "\n" +
        "\n" +
        "<!--  ACCORDION  -->\n" +
        "<template ui-field=\"accordionUi\">\n" +
        "    <template ui-field=\"accordion\">\n" +
        "        <div ui-field=\"root\" class=\"accordion-style\">\n" +
        "        </div>\n" +
        "    </template>\n" +
        "    <template ui-field=\"accordionItem\">\n" +
        "        <div ui-field=\"root\" class=\"header-accordion\">\n" +
        "            <div ui-field=\"accordionItemTitlePanel\" class=\"accordion-header-style\">\n" +
        "                <span ui-field=\"accordionItemTitle\" style=\"font-size: 15px;font-weight: 600;\"></span>\n" +
        "            </div>\n" +
        "            <div ui-field=\"contentPanelParent\" class=\"accordion-body-style\" role=\"tabpanel\"\n" +
        "                 aria-labelledby=\"headingOne\">\n" +
        "                <div ui-field=\"contentPanel\" class=\"card-body\">\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <style-item ui-field=\"showContentStyle\" class=\"show-accordion-item\"/>\n" +
        "    </template>\n" +
        "</template>\n" +
        "<!-- end ACCORDION  -->\n" +
        "\n" +
        "<!--DROPDOWN-->\n" +
        "<template ui-field=\"dropDownUi\">\n" +
        "    <template ui-field=\"dropdown\">\n" +
        "        <div ui-field='root' class='mdc-select'>\n" +
        "            <div ui-field='button' class=\"mdc-select__anchor custom-enhanced-select-width mdc-ripple-upgraded\">\n" +
        "                <i class=\"mdc-select__dropdown-icon\"></i>\n" +
        "                <div class=\"mdc-select__selected-text\"></div>\n" +
        "                <span ui-field='buttonText' class=\"mdc-floating-label mdc-floating-label--float-above\">Choose ...</span>\n" +
        "                <div class=\"mdc-line-ripple\"></div>\n" +
        "            </div>\n" +
        "            <div ui-field=\"dropDownMenuPanel\" style=\"left: 1px;min-width: 200px;\"\n" +
        "                 class=\"mdc-select__menu mdc-menu mdc-menu-surface demo-enhanced-select custom-enhanced-select-width\">\n" +
        "                <ul ui-field='dropDownMenu' class='mdc-list'\n" +
        "                    style=\"transform-origin: center top;left: 0px;top: 56px;max-height: 519px;\">\n" +
        "                </ul>\n" +
        "            </div>\n" +
        "\n" +
        "        </div>\n" +
        "        <style-item ui-field=\"dropDownMenuShowStyle\" class=\"mdc-menu-surface--open\"></style-item>\n" +
        "    </template>\n" +
        "    <template ui-field=\"dropDownItem\">\n" +
        "        <li ui-field=\"root\" class=\"mdc-list-item\"></li>\n" +
        "    </template>\n" +
        "</template>\n" +
        "\n" +
        "<template ui-field=\"listCellIconView\">\n" +
        "    <li ui-field=\"root\" class=\"mdc-list-item\">\n" +
        "        <span ui-field=\"iconPanel\" class=\"mdc-list-item__graphic material-icons\" aria-hidden=\"true\"></span>\n" +
        "        <span ui-field=\"valuePanel\"></span>\n" +
        "    </li>\n" +
        "    <style-item ui-field=\"modelSelected\" class=\"mdc-list-item--selected\"></style-item>\n" +
        "</template>\n" +
        "<!-- end LIST  -->\n" +
        "\n" +
        "<!--POPOVER-->\n" +
        "<template ui-field=\"popover\">\n" +
        "    <div ui-field=\"root\" class=\"popover fade bs-popover-right show\" role=\"tooltip\" x-placement=\"right\">\n" +
        "        <!--        <div ui-field=\"arrowPanel\" class=\"arrow\"></div>-->\n" +
        "        <h3 ui-field=\"popoverTitle\" class=\"popover-header\"></h3>\n" +
        "        <div ui-field=\"contentPanel\" class=\"popover-body\">\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <style-item ui-field=\"topStyle\" class=\"bs-popover-top\"></style-item>\n" +
        "    <style-item ui-field=\"bottomStyle\" class=\"bs-popover-bottom\"></style-item>\n" +
        "    <style-item ui-field=\"leftStyle\" class=\"bs-popover-left\"></style-item>\n" +
        "    <style-item ui-field=\"rightStyle\" class=\"bs-popover-right\"></style-item>\n" +
        "    <style-item ui-field=\"baseStyle\" class=\"popover\"></style-item>\n" +
        "    <style-item ui-field=\"fadeStyle\" class=\"fade\"></style-item>\n" +
        "    <style-item ui-field=\"showStyle\" class=\"show\"></style-item>\n" +
        "</template>\n" +
        "<!--TOOLTIP-->\n" +
        "<template ui-field=\"tooltip\">\n" +
        "    <div ui-field=\"root\" class=\"tooltip\" role=\"tooltip\">\n" +
        "        <div ui-field=\"contentPanel\" class=\"tooltip-inner\">\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <style-item ui-field=\"topStyle\" class=\"bs-tooltip-top\"></style-item>\n" +
        "    <style-item ui-field=\"bottomStyle\" class=\"bs-tooltip-bottom\"></style-item>\n" +
        "    <style-item ui-field=\"leftStyle\" class=\"bs-tooltip-left\"></style-item>\n" +
        "    <style-item ui-field=\"rightStyle\" class=\"bs-tooltip-right\"></style-item>\n" +
        "    <style-item ui-field=\"baseStyle\" class=\"tooltip show\"></style-item>\n" +
        "    <style-item ui-field=\"fadeStyle\" class=\"fade\"></style-item>\n" +
        "    <style-item ui-field=\"showStyle\" class=\"show\"></style-item>\n" +
        "</template>¡\n" +
        "<!--DIALOG-->\n" +
        "<template ui-field=\"modalDialog\">\n" +
        "    <div ui-field=\"root\" class=\"mdc-dialog\"\n" +
        "         role=\"alertdialog\"\n" +
        "         aria-modal=\"true\"\n" +
        "         aria-labelledby=\"my-dialog-title\"\n" +
        "         aria-describedby=\"my-dialog-content\">\n" +
        "        <div class=\"mdc-dialog__container\">\n" +
        "            <div class=\"mdc-dialog__surface\">\n" +
        "                <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->\n" +
        "                <div ui-field=\"header\" class=\"mdc-dialog__title_parent\">\n" +
        "                    <h2 ui-field=\"titleHeader\" class=\"mdc-dialog__title\"></h2>\n" +
        "                </div>\n" +
        "                <div ui-field=\"body\" class=\"mdc-dialog__content\">\n" +
        "\n" +
        "                </div>\n" +
        "                <footer ui-field=\"footer\" class=\"mdc-dialog__actions\">\n" +
        "                    <button ui-field=\"closeButton\" type=\"button\" class=\"mdc-button mdc-dialog__button\">\n" +
        "                        <span class=\"mdc-button__label\">Close</span>\n" +
        "                    </button>\n" +
        "                </footer>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <div class=\"mdc-dialog__scrim\"></div>\n" +
        "        <style-item ui-field=\"showDialogStyle\" class=\"mdc-dialog--open\"></style-item>\n" +
        "    </div>\n" +
        "</template>\n" +
        "\n" +
        "<!--PROGRESS-->\n" +
        "<template ui-field=\"progress\">\n" +
        "    <div ui-field=\"root\" role=\"progressbar\" class=\"mdc-linear-progress\">\n" +
        "        <div class=\"mdc-linear-progress__buffering-dots\"></div>\n" +
        "        <div ui-field=\"bufferedBar\" class=\"mdc-linear-progress__buffer\"></div>\n" +
        "        <div ui-field=\"progressBar\" class=\"mdc-linear-progress__bar mdc-linear-progress__primary-bar\">\n" +
        "            <span class=\"mdc-linear-progress__bar-inner\"></span>\n" +
        "        </div>\n" +
        "        <div class=\"mdc-linear-progress__bar mdc-linear-progress__secondary-bar\">\n" +
        "            <span class=\"mdc-linear-progress__bar-inner\"></span>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "</template>\n" +
        "<template ui-field=\"progressBuilder\">\n" +
        "    <style-item ui-field=\"indeterminate\" class=\"mdc-linear-progress--indeterminate\"/>\n" +
        "    <style-item ui-field=\"reversed\" class=\"mdc-linear-progress--reversed\"/>\n" +
        "    <style-item ui-field=\"closed\" class=\"mdc-linear-progress--closed\"/>\n" +
        "</template>\n" +
        "<!-- %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% -->\n" +
        "\n" +
        "<!--CELLS-->\n" +
        "<!--  LIST  -->\n" +
        "<template ui-field=\"list\">\n" +
        "    <template ui-field=\"listMain\">\n" +
        "        <ul ui-field=\"root\" class=\"mdc-list scroll-style\"></ul>\n" +
        "        <style-item ui-field='scrollableStyle' class='scroll-style'></style-item>\n" +
        "        <style-item ui-field=\"rowHeight\" class=\"49\"></style-item>\n" +
        "    </template>\n" +
        "\n" +
        "    <template ui-field=\"listItem\">\n" +
        "        <li ui-field=\"root\" class=\"mdc-list-item\">\n" +
        "            <span ui-field=\"valuePanel\" class=\"mdc-list-item__text\"></span>\n" +
        "        </li>\n" +
        "        <style-item ui-field=\"modelSelected\" class=\"mdc-list-item--activated\"></style-item>\n" +
        "    </template>\n" +
        "\n" +
        "    <template ui-field=\"listItemCheckbox\">\n" +
        "        <li ui-field=\"root\" class=\"mdc-list-item\" style=\"padding-left:  30px;\">\n" +
        "            <dn-checkbox ui-field=\"checkBox\"></dn-checkbox>\n" +
        "            <span ui-field=\"valuePanel\"></span>\n" +
        "        </li>\n" +
        "        <style-item ui-field=\"modelSelected\" class=\"mdc-list-item--selected\"></style-item>\n" +
        "    </template>\n" +
        "</template>\n" +
        "<!--   TREE  -->\n" +
        "<template ui-field=\"tree\">\n" +
        "    <template ui-field=\"treeMain\">\n" +
        "        <ul ui-field=\"root\" class=\"mdc-list scroll-style\" style=\"border: 1px solid lightgrey;\"></ul>\n" +
        "        <style-item ui-field=\"rowHeight\" class=\"49\"></style-item>\n" +
        "    </template>\n" +
        "    <template ui-field=\"treeItemSimple\">\n" +
        "        <li ui-field=\"root\" class=\"mdc-list-item\">\n" +
        "                <span style=\"margin-left:48px;\">\n" +
        "                  <span ui-field=\"valuePanel\"></span>\n" +
        "                </span>\n" +
        "        </li>\n" +
        "        <style-item ui-field=\"modelSelected\" class=\"mdc-list-item--selected\"></style-item>\n" +
        "    </template>\n" +
        "    <template ui-field=\"treeItemSimpleParent\">\n" +
        "        <li ui-field=\"root\" class=\"mdc-list-item\">\n" +
        "            <i ui-field=\"openCloseElement\" class=\"material-icons\" style=\"margin-right:  10px;\"></i>\n" +
        "            <span ui-field=\"valuePanel\"></span>\n" +
        "        </li>\n" +
        "        <!--        <style-item ui-field=\"openStyle\" class=\"arrow_right\"></style-item>-->\n" +
        "        <!--        <style-item ui-field=\"closeStyle\" class=\"arrow_drop_down\"></style-item>-->\n" +
        "        <style-item ui-field=\"openStyle\" class=\"chevron_right \"></style-item>\n" +
        "        <style-item ui-field=\"closeStyle\" class=\"expand_more\"></style-item>\n" +
        "        <style-item ui-field=\"modelSelected\" class=\"mdc-list-item--selected\"></style-item>\n" +
        "    </template>\n" +
        "\n" +
        "    <template ui-field=\"treeItemSimpleCheckbox\">\n" +
        "        <li class=\"mdc-list-item\" ui-field=\"root\">\n" +
        "                <span style=\"margin-left:  48px;\">\n" +
        "                    <dn-checkbox ui-field=\"checkBox\"></dn-checkbox>\n" +
        "                  <span ui-field=\"valuePanel\"></span>\n" +
        "                </span>\n" +
        "        </li>\n" +
        "    </template>\n" +
        "    <template ui-field=\"treeItemSimpleParentCheckbox\">\n" +
        "        <li ui-field=\"root\" class=\"mdc-list-item\">\n" +
        "            <i ui-field=\"openCloseElement\" class=\"material-icons\" style=\"margin-right:  30px;\"></i>\n" +
        "            <dn-checkbox ui-field=\"checkBox\"></dn-checkbox>\n" +
        "            <span ui-field=\"valuePanel\"></span>\n" +
        "        </li>\n" +
        "        <!--        <style-item ui-field=\"openStyle\" class=\"arrow_right\"></style-item>-->\n" +
        "        <!--        <style-item ui-field=\"closeStyle\" class=\"arrow_drop_down\"></style-item>-->\n" +
        "        <style-item ui-field=\"openStyle\" class=\"chevron_right \"></style-item>\n" +
        "        <style-item ui-field=\"closeStyle\" class=\"expand_more\"></style-item>\n" +
        "        <style-item ui-field=\"modelSelected\" class=\"mdc-list-item--selected\"></style-item>\n" +
        "    </template>\n" +
        "</template>\n" +
        "<!--   TABLE  -->\n" +
        "<template ui-field=\"tableUi\">\n" +
        "    <template ui-field=\"filterPanel\">\n" +
        "        <template ui-template=\"accc\">\n" +
        "            <div ui-field='root' class='mdc-select'>\n" +
        "                <div ui-field='button' class=\"mdc-select__anchor demo-width-class\" style=\"width: 110px;\">\n" +
        "                    <i class=\"mdc-select__dropdown-icon\"></i>\n" +
        "                    <div class=\"mdc-select__selected-text\"></div>\n" +
        "                    <span ui-field='buttonText' class=\"mdc-floating-label\">Choose ...</span>\n" +
        "                    <div class=\"mdc-line-ripple\"></div>\n" +
        "                </div>\n" +
        "                <div ui-field='listPanel' class='mdc-select__menu mdc-menu mdc-menu-surface demo-width-class'\n" +
        "                     style=\"transform-origin: center top;left: 0px;top: 56px;max-height: 519px;\">\n" +
        "                    <dn-text-box ui-field='textBox' style=\"width: 100%;\"></dn-text-box>\n" +
        "                    <dn-list ui-field=\"list\"></dn-list>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </template>\n" +
        "\n" +
        "        <div ui-field=\"root\" style=\"display: flex;\n" +
        "        /*transform: scale(0.8);transform-origin: left;*/\n" +
        "        margin-left: 10px;\">\n" +
        "            <div ui-field=\"mainPanel\" style=\"display: flex\">\n" +
        "                <dn-autocomplete ui-field=\"ac\" style=\"margin-right: 2px;\"\n" +
        "                                 template-id=\"accc\"></dn-autocomplete>\n" +
        "                <div ui-field=\"valueHolder\"></div>\n" +
        "            </div>\n" +
        "            <i ui-field=\"clear\" class=\"material-icons\" style=\"font-size: 16px;margin-left: 10px;cursor: pointer;\">\n" +
        "                close\n" +
        "            </i>\n" +
        "        </div>\n" +
        "        <style-item ui-field=\"booleanMainPanelStyle\"\n" +
        "                    class=\"d-flex justify-content-between align-items-center\"></style-item>\n" +
        "    </template>\n" +
        "    <template ui-field=\"tableCheckBoxColumn\">\n" +
        "        <td ui-field=\"root\" class=\"mdc-data-table__cell mdc-data-table__cell--checkbox\">\n" +
        "            <dn-checkbox ui-field=\"checkBox\"\n" +
        "                         style=\"margin-left: 12px\"></dn-checkbox>\n" +
        "        </td>\n" +
        "    </template>\n" +
        "\n" +
        "    <template ui-field=\"tableRowExpanderItem\">\n" +
        "        <th ui-field=\"root\" class=\"mdc-data-table__header-cell\">\n" +
        "            <i ui-field=\"openClosedElement\" class=\"material-icons pull-right\">chevron_right</i>\n" +
        "        </th>\n" +
        "    </template>\n" +
        "\n" +
        "    <template ui-field=\"tableHeaderCheckbox\">\n" +
        "        <th ui-field=\"root\" class=\"mdc-data-table__header-cell\">\n" +
        "            <dn-checkbox ui-field=\"checkBox\" style=\"margin-left: 12px;\"></dn-checkbox>\n" +
        "            <span ui-field=\"textPanel\"></span>\n" +
        "        </th>\n" +
        "    </template>\n" +
        "\n" +
        "    <template ui-field=\"footerCell\">\n" +
        "        <td ui-field=\"root\">\n" +
        "        </td>\n" +
        "    </template>\n" +
        "\n" +
        "    <template ui-field=\"tableBarUi\">\n" +
        "\n" +
        "        <template ui-field=\"tableBar\">\n" +
        "            <div ui-field=\"root\">\n" +
        "\n" +
        "            </div>\n" +
        "        </template>\n" +
        "        <template ui-field=\"columnChooseBar\">\n" +
        "            <div ui-field=\"root\">\n" +
        "\n" +
        "            </div>\n" +
        "        </template>\n" +
        "        <template ui-field=\"tableBarGroupByUi\">\n" +
        "            <template ui-field=\"tableBarItem\">\n" +
        "                <div ui-field=\"root\" class=\"bar-item\">\n" +
        "                    <i ui-field=\"close\" class=\"material-icons\" style=\"font-size: 16px;margin-left: 10px\">\n" +
        "                        close\n" +
        "                    </i>\n" +
        "\n" +
        "                    <span ui-field=\"actionLabel\"></span>\n" +
        "                    <span ui-field=\"columnName\"></span>\n" +
        "                    <div style=\"display:flex;\" ui-field=\"panel\">\n" +
        "\n" +
        "                    </div>\n" +
        "                    <div style=\"position: absolute;right: 4px\">\n" +
        "                        :::\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </template>\n" +
        "            <template ui-field=\"tableBarPanel\">\n" +
        "                <div ui-field=\"root\">\n" +
        "                    <div ui-field=\"contentPanel\" style=\"margin-bottom: 50px\"></div>\n" +
        "                    <div ui-field=\"dropDownHolder\"></div>\n" +
        "                </div>\n" +
        "            </template>\n" +
        "        </template>\n" +
        "    </template>\n" +
        "\n" +
        "    <template ui-field=\"tableTreeItemSimpleParent\">\n" +
        "        <tr ui-field=\"root\">\n" +
        "            <td ui-field=\"openCloseCell\">\n" +
        "                <div class=\"horizontal-div\">\n" +
        "                    <i ui-field=\"openCloseElement\" class=\"material-icons\"></i>\n" +
        "                    <div style=\"width: 10px;\"></div>\n" +
        "                    <div ui-field=\"valuePanel\"></div>\n" +
        "                </div>\n" +
        "            </td>\n" +
        "        </tr>\n" +
        "        <style-item ui-field=\"openStyle\" class=\"chevron_right\"></style-item>\n" +
        "        <style-item ui-field=\"closeStyle\" class=\"expand_more\"></style-item>\n" +
        "    </template>\n" +
        "\n" +
        "    <template ui-field=\"tableMain\">\n" +
        "        <style-item ui-field=\"rowHeight\" class=\"49\"></style-item>\n" +
        "        <div ui-field=\"root\" class=\"table-main mdc-data-table\">\n" +
        "            <div style=\"display: none\" ui-field=\"headerBarRow\" class=\"header-bar\">\n" +
        "                <!--header bar content here-->\n" +
        "            </div>\n" +
        "            <div ui-field=\"tableHeaderPanel\" style=\"border-bottom: 2px solid rgba(0, 0, 0, 0.12);\">\n" +
        "                <table ui-field=\"tableHeader\" class=\"mdc-data-table__table\"\n" +
        "                       style=\"margin-bottom: 0px;border-bottom-width: 0px;\">\n" +
        "                    <colgroup ui-field=\"headerColgroupPanel\"></colgroup>\n" +
        "                    <thead ui-field=\"headerBodyPanel\">\n" +
        "                    <tr ui-field=\"headerRow\" class=\"mdc-data-table__header-row\">\n" +
        "                        <!--header cells here-->\n" +
        "                    </tr>\n" +
        "                    </thead>\n" +
        "                </table>\n" +
        "            </div>\n" +
        "            <div ui-field=\"tableContentPanel\" class=\"table-content-panel scroll-style\">\n" +
        "                <table ui-field=\"tableContent\" class=\"mdc-w mdc-table\" style=\"width: 100%\">\n" +
        "                    <colgroup ui-field=\"contentColgroupPanel\"></colgroup>\n" +
        "                    <tbody ui-field=\"rowsPanel\" class=\"mdc-data-table__content\">\n" +
        "                    <!--main content here-->\n" +
        "                    </tbody>\n" +
        "                </table>\n" +
        "            </div>\n" +
        "            <div ui-field=\"footerPanel\">\n" +
        "                <table ui-field=\"tableFooter\" class=\"mdc-w mdc-table\"\n" +
        "                       style=\"width: 100%;border-top: 1px solid lightgray;\">\n" +
        "                    <colgroup ui-field=\"tableFooterColGroup\"></colgroup>\n" +
        "                    <tbody class=\"mdc-data-table__content\" ui-field=\"footerBodyPanel\">\n" +
        "                    <tr class=\"mdc-data-table__header-row\" ui-field=\"tableFooterRow\">\n" +
        "                        <!--footer content here-->\n" +
        "                    </tr>\n" +
        "                    </tbody>\n" +
        "                </table>\n" +
        "            </div>\n" +
        "            <div ui-field=\"footerPagerPanel\">\n" +
        "                <!--pager goes here-->\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </template>\n" +
        "    <template ui-field=\"tableRow\">\n" +
        "        <tr ui-field=\"root\" class=\"mdc-data-table__row\"></tr>\n" +
        "        <style-item ui-field=\"modelSelected\" class=\"mdc-data-table__row--selected\"></style-item>\n" +
        "    </template>\n" +
        "    <template ui-field=\"tableColumn\">\n" +
        "        <td ui-field=\"root\" class=\"mdc-data-table__cell\"></td>\n" +
        "    </template>\n" +
        "    <template ui-field=\"tableHeaderColumn\">\n" +
        "        <th ui-field=\"root\" class=\"mdc-data-table__header-cell\"></th>\n" +
        "    </template>\n" +
        "\n" +
        "    <template ui-field=\"tableColumnSortHeader\">\n" +
        "        <th ui-field=\"root\" class=\"mdc-data-table__cell\">\n" +
        "            <div ui-field=\"textPanel\" style=\"float: left;\"></div>\n" +
        "            <div style=\"position: relative;\" class=\"pull-right\">\n" +
        "                <div style=\"right: 5px;position:absolute;\">\n" +
        "                    <i ui-field=\"sortIcon\" class=\"material-icons pull-right\">sort</i>\n" +
        "                    <i ui-field=\"sortIconOrder\" class=\"pull-right\"></i>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </th>\n" +
        "        <style-item ui-field=\"active\" class=\"active\"></style-item>\n" +
        "    </template>\n" +
        "    <template ui-field=\"tableColumnMenuHeader\">\n" +
        "        <th ui-field=\"root\">\n" +
        "            <div ui-field=\"textPanel\"></div>\n" +
        "\n" +
        "            <div style=\"position: relative;\" class=\"pull-right\">\n" +
        "                <div style=\"left: -100px;top: -19px;position:absolute;\">\n" +
        "                    <div ui-field=\"filterIconPanel\" class=\"fa fa-filter pull-right header-s2\"></div>\n" +
        "                    <div ui-field=\"groupByIconPanel\" class=\"fa fa-group pull-right header-s2\"></div>\n" +
        "                    <div ui-field=\"sortIconPanel\" class=\"pull-right header-s2\"></div>\n" +
        "                </div>\n" +
        "                <!--fa fa-sort-->\n" +
        "                <div style=\"right: 1px;top: -30px;position:absolute;\">\n" +
        "                    <div ui-field=\"menuHolder\"></div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </th>\n" +
        "        <style-item ui-field=\"sortStyle\" class=\"baseline-alarm icon-image-preview pull-right\"></style-item>\n" +
        "        <style-item ui-field=\"sortUpStyle\" class=\"fa fa-sort-down pull-right\"></style-item>\n" +
        "        <style-item ui-field=\"sortDownStyle\" class=\"fa fa-sort-up pull-right\"></style-item>\n" +
        "    </template>\n" +
        "\n" +
        "    <template ui-field=\"tableColumnFilterHeader\">\n" +
        "        <th ui-field=\"root\">\n" +
        "            <div ui-field=\"textPanel\" style=\"text-align: left;margin-left: 10px;\"></div>\n" +
        "            <div ui-field=\"sortIconPanel\" class=\"pull-right header-s2\"></div>\n" +
        "            <div ui-field=\"filterIconPanel\" class=\"fa fa-filter pull-right header-s2\"></div>\n" +
        "            <div ui-field=\"filterPanelElement\"></div>\n" +
        "        </th>\n" +
        "    </template>\n" +
        "\n" +
        "</template>\n" +
        "<!--  end TABLE  -->\n" +
        "<!--  DROPDOWN MULTILEVEL   -->\n" +
        "<template ui-field=\"dropDownMultiLevelUi\">\n" +
        "    <template ui-field=\"dropdown\">\n" +
        "        <div class=\"mdc-select\" ui-field=\"root\">\n" +
        "            <div ui-field='button' class=\"mdc-select__anchor custom-enhanced-select-width mdc-ripple-upgraded\">\n" +
        "                <i class=\"mdc-select__dropdown-icon\"></i>\n" +
        "                <div class=\"mdc-select__selected-text\"></div>\n" +
        "                <span ui-field='buttonText' class=\"mdc-floating-label mdc-floating-label--float-above\">Choose ...</span>\n" +
        "                <div class=\"mdc-line-ripple\"></div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <style-item ui-field=\"dropDownMenuShowStyle\" class=\"mdc-menu-surface--open\"></style-item>\n" +
        "    </template>\n" +
        "    <template ui-field=\"dropdownItem\">\n" +
        "        <li ui-field=\"root\" class=\"mdc-list-item\" href=\"javascript:void(0)\"></li>\n" +
        "    </template>\n" +
        "    <template ui-field=\"dropdownItemHasChildren\">\n" +
        "        <li ui-field=\"root\" class=\"mdc-list-item\">\n" +
        "            <span ui-field=\"textPanel\"></span>\n" +
        "            <i class=\"mdc-select__dropdown-icon\"></i>\n" +
        "        </li>\n" +
        "    </template>\n" +
        "    <template ui-field=\"dropdownPanelHasChildren\">\n" +
        "        <div ui-field='root' style=\"left: 1px;min-width: 200px;\"\n" +
        "             class='mdc-select__menu mdc-menu mdc-menu-surface demo-enhanced-select custom-enhanced-select-width'>\n" +
        "            <ul ui-field=\"listRoot\" class=\"mdc-list\"\n" +
        "                style=\"transform-origin: center top;left: 0px;top: 56px;max-height: 519px;\">\n" +
        "            </ul>\n" +
        "        </div>\n" +
        "        <style-item ui-field=\"showStyle\" class=\"show\"></style-item>\n" +
        "    </template>\n" +
        "</template>\n" +
        "<!--  AUTOCOMPLETE  -->\n" +
        "<template ui-field=\"autocomplete\">\n" +
        "    <div ui-field='root' class='mdc-select'>\n" +
        "        <div ui-field='button' class=\"mdc-select__anchor demo-width-class\">\n" +
        "            <i class=\"mdc-select__dropdown-icon\"></i>\n" +
        "            <div class=\"mdc-select__selected-text\"></div>\n" +
        "            <span ui-field='buttonText' class=\"mdc-floating-label\">Choose ...</span>\n" +
        "            <div class=\"mdc-line-ripple\"></div>\n" +
        "        </div>\n" +
        "        <div ui-field='listPanel' class='mdc-select__menu mdc-menu mdc-menu-surface demo-width-class'\n" +
        "             style=\"transform-origin: center top;left: 0px;top: 56px;max-height: 519px;\"\n" +
        "        >\n" +
        "            <dn-text-box ui-field='textBox'></dn-text-box>\n" +
        "            <dn-list ui-field=\"list\"></dn-list>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "</template>\n" +
        "<!--  AUTOCOMPLETE  TREE-->\n" +
        "<template ui-field=\"autocompleteTree\">\n" +
        "    <div ui-field='root' class='mdc-select'>\n" +
        "        <div ui-field='button' class=\"mdc-select__anchor demo-width-class\">\n" +
        "            <i class=\"mdc-select__dropdown-icon\"></i>\n" +
        "            <div class=\"mdc-select__selected-text\"></div>\n" +
        "            <span ui-field='buttonText' class=\"mdc-floating-label\">Choose ...</span>\n" +
        "            <div class=\"mdc-line-ripple\"></div>\n" +
        "        </div>\n" +
        "        <div ui-field='listPanel' class='mdc-select__menu mdc-menu mdc-menu-surface demo-width-class'\n" +
        "             style=\"transform-origin: center top;left: 0px;top: 56px;max-height: 519px;\"\n" +
        "        >\n" +
        "            <dn-text-box ui-field='textBox'></dn-text-box>\n" +
        "            <dn-tree ui-field=\"tree\"></dn-tree>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "</template>\n" +
        "<!--AUTOCOMPLETE MULTISELECT-->\n" +
        "<template ui-field=\"autocompleteMultiSelect\">\n" +
        "    <template ui-field=\"rootView\">\n" +
        "        <div ui-field='root' class='autocomplete-multiselect'>\n" +
        "            <div ui-field=\"selectionPanel\" class=\"mdc-chip-set\">\n" +
        "\n" +
        "            </div>\n" +
        "            <div ui-field='listPanel' style=\"width: 100%\"\n" +
        "                 class='mdc-select__menu mdc-menu mdc-menu-surface demo-width-class'>\n" +
        "                <dn-text-box ui-field='textBox' style=\"width: 100%;left: 0\"></dn-text-box>\n" +
        "                <div ui-field=\"listOrTreePanel\">\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </template>\n" +
        "    <template ui-field=\"itemView\">\n" +
        "        <div class=\"mdc-chip\" role=\"row\" ui-field=\"root\">\n" +
        "            <div class=\"mdc-chip__ripple\"></div>\n" +
        "            <span role=\"gridcell\">\n" +
        "               <span ui-field=\"mainPanel\" role=\"button\" tabindex=\"0\" class=\"mdc-chip__text\">Chip One</span>\n" +
        "            </span>\n" +
        "            <i ui-field=\"removeBtn\" class=\"material-icons\" style=\"font-size: 16px;margin-left: 10px;cursor: pointer;\">\n" +
        "                close\n" +
        "            </i>\n" +
        "        </div>\n" +
        "    </template>\n" +
        "</template>\n" +
        "<!--PAGER-->\n" +
        "<template ui-field=\"pagerUi\">\n" +
        "    <template ui-field=\"pager\">\n" +
        "        <div ui-field=\"root\" class=\"pagination\">\n" +
        "            <span ui-field=\"textPanel\" style=\"margin-right: 20px;\"></span>\n" +
        "            <div ui-field=\"first\">\n" +
        "                <i class=\"material-icons\">\n" +
        "                    first_page\n" +
        "                </i>\n" +
        "            </div>\n" +
        "            <div ui-field=\"previous\">\n" +
        "                <i class=\"material-icons\">\n" +
        "                    chevron_left\n" +
        "                </i>\n" +
        "            </div>\n" +
        "            <div>\n" +
        "                <dn-integer-box ui-field=\"numberField\"\n" +
        "                                style=\"width: 80px;margin-right: 10px;margin-left: 10px;\"></dn-integer-box>\n" +
        "            </div>\n" +
        "            <div ui-field=\"next\">\n" +
        "                <i class=\"material-icons\">\n" +
        "                    chevron_right\n" +
        "                </i>\n" +
        "            </div>\n" +
        "            <div ui-field=\"last\">\n" +
        "                <i class=\"material-icons\">\n" +
        "                    last_page\n" +
        "                </i>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <style-item ui-field=\"disabledStyle\" class=\"disabled\"/>\n" +
        "    </template>\n" +
        "    <template ui-field=\"pagerItem\">\n" +
        "        <div ui-field=\"root\" class=\"page-item\">\n" +
        "            <span ui-field=\"textPanel\" class=\"page-link\">1</span>\n" +
        "        </div>\n" +
        "    </template>\n" +
        "</template>\n" +
        "<!--PAGER List-->\n" +
        "<template ui-field=\"pagerListUi\">\n" +
        "    <template ui-field=\"pager\">\n" +
        "        <div ui-field=\"root\" class=\"pagination\" style=\"margin: 5px;\">\n" +
        "            <!---->\n" +
        "        </div>\n" +
        "    </template>\n" +
        "    <template ui-field=\"pagerItem\">\n" +
        "        <div ui-field=\"root\" class=\"page-item\">\n" +
        "            <span ui-field=\"textPanel\" class=\"page-link\">1</span>\n" +
        "        </div>\n" +
        "    </template>\n" +
        "</template>\n" +
        "\n" +
        "<!--SIDEMENU-->\n" +
        "<template ui-field=\"sidemenu\">\n" +
        "    <aside ui-field=\"root\" class=\"mdc-drawer mdc-drawer--dismissible mdc-top-app-bar--fixed-adjust\">\n" +
        "        <div class=\"mdc-drawer__content\">\n" +
        "            <div style=\"margin: 10px;margin-bottom: 0;block-size: auto;width: 236px;\"\n" +
        "                 class=\"mdc-text-field text-field mdc-text-field--outlined mdc-text-field--with-trailing-icon\">\n" +
        "                <input ui-field=\"searchField\" type=\"text\" id=\"text-field-outlined-trailing\"\n" +
        "                       class=\"mdc-text-field__input\"\n" +
        "                       aria-describedby=\"text-field-outlined-trailing-helper-text\">\n" +
        "                <i class=\"material-icons mdc-text-field__icon\">search</i>\n" +
        "                <div class=\"mdc-notched-outline mdc-notched-outline--upgraded\">\n" +
        "                    <div class=\"mdc-notched-outline__leading\"></div>\n" +
        "                    <div class=\"mdc-notched-outline__notch\">\n" +
        "                        <label class=\"mdc-floating-label\"\n" +
        "                               for=\"text-field-outlined-trailing\"></label></div>\n" +
        "                    <div class=\"mdc-notched-outline__trailing\"></div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "\n" +
        "            <div ui-field=\"treeHolder\" class=\"pb-4\"></div>\n" +
        "        </div>\n" +
        "    </aside>\n" +
        "    <template ui-field=\"treeSideTemplate\">\n" +
        "        <template ui-field=\"treeMain\">\n" +
        "            <ul ui-field=\"root\" class=\"mdc-list\"></ul>\n" +
        "            <style-item ui-field=\"rowHeight\" class=\"49\"></style-item>\n" +
        "        </template>\n" +
        "        <template ui-field=\"treeItemSimple\">\n" +
        "            <li ui-field=\"root\" class=\"mdc-list-item\">\n" +
        "                    <span ui-field=\"iconParent\" style=\"display: none\" class=\"mr-3\">\n" +
        "                        <span ui-field=\"iconPanel\" class=\"mdc-list-item__graphic material-icons\"\n" +
        "                              style=\"vertical-align: middle;\" aria-hidden=\"true\">star</span>\n" +
        "                    </span>\n" +
        "\n" +
        "                <span ui-field=\"valuePanel\">\n" +
        "\n" +
        "            </span>\n" +
        "            </li>\n" +
        "            <style-item ui-field=\"modelSelected\" class=\"mdc-list-item--activated\"></style-item>\n" +
        "        </template>\n" +
        "        <template ui-field=\"treeItemSimpleParent\">\n" +
        "            <li ui-field=\"root\" class=\"mdc-list-item\">\n" +
        "                   <span ui-field=\"iconParent\" style=\"display: none\">\n" +
        "                      <span ui-field=\"iconPanel\" class=\"mdc-list-item__graphic material-icons\"\n" +
        "                            style=\"vertical-align: middle;\" aria-hidden=\"true\">star</span>\n" +
        "                    </span>\n" +
        "                <span ui-field=\"valuePanelParent\"></span>\n" +
        "                <span style=\"font-weight: bold\" ui-field=\"valuePanel\"></span>\n" +
        "                <i ui-field=\"openCloseElement\"\n" +
        "                   class=\"material-icons mdc-layout-grid--align-right\">keyboard_arrow_down</i>\n" +
        "            </li>\n" +
        "            <style-item ui-field=\"openStyle\" class=\"keyboard_arrow_right\"></style-item>\n" +
        "            <style-item ui-field=\"closeStyle\" class=\"keyboard_arrow_down\"></style-item>\n" +
        "        </template>\n" +
        "    </template>\n" +
        "\n" +
        "    <style-item ui-field=\"collapsedStyle\" class=\"collapsed\"></style-item>\n" +
        "    <style-item ui-field=\"hideNavBarPanelStyle\" class=\"side-closed\"></style-item>\n" +
        "    <style-item ui-field=\"showNavBarPanelStyle\" class=\"side-open\"></style-item>\n" +
        "</template>";
}