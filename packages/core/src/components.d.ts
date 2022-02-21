/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { RadioGroupChangeEventDetail, SelectChangeEventDetail } from "./interfaces";
export namespace Components {
    interface AnyBadge {
        /**
          * Inline style of the component.
         */
        "anyStyle": any;
        /**
          * Severity type of the badge.
         */
        "severity": string;
        /**
          * Size of the badge, valid options are "large" and "xlarge".
         */
        "size": string;
        /**
          * Style class of the component.
         */
        "styleClass": string;
        /**
          * Value to display inside the badge.
         */
        "value": string;
    }
    interface AnyBadgeOverlay {
        /**
          * Style class of the component.
         */
        "styleClass": string;
    }
    interface AnyButton {
        /**
          * Inline style of the element.
         */
        "anyStyle"?: any;
        /**
          * Value of the badge.
         */
        "badge": string;
        /**
          * Style class of the badge.
         */
        "badgeClass": string;
        /**
          * When present, it specifies that the component should be disabled.
         */
        "disabled": boolean;
        /**
          * Name of the icon.
         */
        "icon": string;
        /**
          * Height of the icon
         */
        "iconHeight": number;
        /**
          * Position of the icon, valid values are "left" and "right".
         */
        "iconPos": "left" | "right" | "top" | "bottom";
        /**
          * Width of the icon
         */
        "iconWidth": number;
        /**
          * Text of the button.
         */
        "label": string;
        /**
          * Whether the button is in loading state.
         */
        "loading": boolean;
        /**
          * Icon to display in loading state.
         */
        "loadingIcon": string;
        /**
          * Style class of the icon element
         */
        "loadingIconStyleClass": string;
        /**
          * Style class of the element.
         */
        "styleClass": string;
        /**
          * Type of the button.
         */
        "type": "button" | "submit" | "reset";
    }
    interface AnyCheckbox {
        /**
          * Inline style of the component.
         */
        "anyStyle": any;
        /**
          * Index of the element in tabbing order
         */
        "anyTabIndex"?: number;
        /**
          * Allows to select a boolean value instead of multiple values.
         */
        "binary": boolean;
        /**
          * Icon class of the checkbox icon.
         */
        "checkboxIcon": string;
        /**
          * If `true`, the checkbox is selected.
         */
        "checked": boolean;
        /**
          * When present, it specifies that the element should be disabled.
         */
        "disabled": boolean;
        "inputFocus": () => Promise<void>;
        /**
          * Identifier of the focus input to match a label defined for the component.
         */
        "inputId": string;
        /**
          * Label of the checkbox.
         */
        "label": string;
        /**
          * Style class of the label.
         */
        "labelStyleClass": string;
        /**
          * Name of the checkbox group.
         */
        "name": string;
        /**
          * When present, it specifies that the component cannot be edited.
         */
        "readonly": boolean;
        /**
          * Style class of the component.
         */
        "styleClass": any;
        /**
          * The value of the checkbox does not mean if it's checked or not, use the `checked` property for that.  The value of a checkbox is analogous to the value of an `<input type="checkbox">`, it's only used when the checkbox participates in a native `<form>`.
         */
        "value": any;
    }
    interface AnyDropdown {
        /**
          * Inline style of the element
         */
        "anyStyle"?: any;
        /**
          * Index of the element in tabbing order
         */
        "anyTabIndex"?: number;
        /**
          * Whether to automatically manage layering
         */
        "autoZIndex"?: boolean;
        /**
          * Base zIndex value to use in layering
         */
        "baseZIndex"?: string;
        /**
          * Icon class of the dropdown clear icon
         */
        "clearIcon"?: string;
        /**
          * When present, it specifies that the element should be disabled
         */
        "disabled": boolean;
        /**
          * Icon class of the dropdown icon
         */
        "dropdownIcon"?: string;
        /**
          * Transition options of the hide animation
         */
        "hideAnimation"?: string;
        /**
          * Identifier of the focus input to match a label defined for the component.
         */
        "inputId": string;
        /**
          * Name of the dropdown input.
         */
        "name": string;
        /**
          * Name of the label field of an option
         */
        "optionLabel": string;
        /**
          * Name of the value field of an option
         */
        "optionValue": string;
        /**
          * An array of objects to display as the available options.
         */
        "options": any[];
        /**
          * Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value
         */
        "panelScrollHeight"?: string;
        /**
          * Default text to display when no option is selected
         */
        "placeholder"?: string;
        /**
          * When present, it specifies that the element value cannot be changed
         */
        "readonly": boolean;
        /**
          * Keyframe name the show animation
         */
        "showAnimation"?: string;
        /**
          * When enabled, a clear icon is displayed to clear the value
         */
        "showClear"?: boolean;
        /**
          * Value of the dropdown list
         */
        "value"?: any;
        /**
          * When present, list virtual scroller is enabled
         */
        "virtualScroll": boolean;
    }
    interface AnyInputSwitch {
        /**
          * Inline style of the component.
         */
        "anyStyle": any;
        /**
          * Index of the element in tabbing order
         */
        "anyTabIndex"?: number;
        /**
          * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
         */
        "ariaLabeledBy"?: string;
        /**
          * If `true`, the input-switch is selected.
         */
        "checked": boolean;
        /**
          * When present, it specifies that the element should be disabled.
         */
        "disabled": boolean;
        /**
          * Value in unchecked state.
         */
        "falseValue": any;
        /**
          * Identifier of the focus input to match a label defined for the component.
         */
        "inputId": string;
        /**
          * Name of the checkbox group.
         */
        "name": string;
        /**
          * When present, it specifies that the component cannot be edited.
         */
        "readonly": boolean;
        /**
          * Style class of the component.
         */
        "styleClass": any;
        /**
          * Value in checked state.
         */
        "trueValue": any;
    }
    interface AnyInputText {
        /**
          * When present, it specifies that the element should be disabled
         */
        "disabled": boolean;
        /**
          * When enabled, the label will have floating effect on input text focus
         */
        "floatLabel": boolean;
        "getInputRef": () => Promise<HTMLInputElement>;
        /**
          * Identifier of the focus input to match a label defined for the component.
         */
        "inputId": string;
        /**
          * The class of input wrapper element
         */
        "inputWrapperClass": string;
        /**
          * Label of the input text
         */
        "label": string;
        /**
          * The class of left icon wrapper element
         */
        "leftIconClass": string;
        /**
          * Name of the input text.
         */
        "name": string;
        /**
          * Default text to display when no value in input text
         */
        "placeholder": string;
        /**
          * When present, it specifies that the element value cannot be changed
         */
        "readonly": boolean;
        /**
          * The class of right icon wrapper element
         */
        "rightIconClass": string;
        /**
          * Value of the input text
         */
        "value": string;
    }
    interface AnyListbox {
        /**
          * Inline style of the element
         */
        "anyStyle": any;
        /**
          * When present, it specifies that the element should be disabled
         */
        "disabled": boolean;
        /**
          * Identifier of the focus input to match a label defined for the component.
         */
        "inputId": string;
        /**
          * Inline style of the list element
         */
        "listStyle": any;
        /**
          * Name of the dropdown input.
         */
        "name": string;
        /**
          * Name of the label field of an option
         */
        "optionLabel": string;
        /**
          * Name of the value field of an option
         */
        "optionValue": string;
        /**
          * An array of objects to display as the available options.
         */
        "options": any[];
        /**
          * When present, it specifies that the element value cannot be changed
         */
        "readonly": boolean;
        /**
          * Max height of the content area in inline mode
         */
        "scrollerHeight": string;
        /**
          * Value of the listbox
         */
        "value"?: any;
        /**
          * When present, list virtual scroller is enabled
         */
        "virtualScroll": boolean;
    }
    interface AnyRadioButton {
        /**
          * Inline style of the component.
         */
        "anyStyle": any;
        /**
          * Index of the element in tabbing order
         */
        "anyTabIndex"?: number;
        /**
          * When present, it specifies that the element should be disabled.
         */
        "disabled": boolean;
        /**
          * Identifier of the focus input to match a label defined for the component.
         */
        "inputId": string;
        /**
          * Label of the radiobutton.
         */
        "label": string;
        /**
          * Style class of the label.
         */
        "labelStyleClass": string;
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name": string;
        /**
          * Applies focus.
         */
        "setFocus": (ev: any) => Promise<void>;
        /**
          * Style class of the component.
         */
        "styleClass": any;
        /**
          * the value of the radio.
         */
        "value"?: any | null;
    }
    interface AnyRadioGroup {
        /**
          * If `true`, the radios can be deselected.
         */
        "allowEmptySelection": boolean;
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name": string;
        /**
          * the value of the radio group.
         */
        "value"?: any | null;
    }
    interface AnyRippleEffect {
        /**
          * Sets the type of ripple-effect:
         */
        "type": "bounded" | "unbounded";
    }
    interface AnyTabPanel {
        /**
          * When true, tab cannot be activated.
         */
        "disabled": boolean;
        /**
          * Title of the tabPanel.
         */
        "header": string;
        /**
          * Defines if tab is active.
         */
        "selected": boolean;
    }
    interface AnyTabView {
        /**
          * Index of the active tab to change selected tab programmatically.
         */
        "activeIndex": number;
        /**
          * Inline style of the component.
         */
        "anyStyle": any;
        /**
          * Style class of the component.
         */
        "styleClass": string;
    }
    interface AnyVirtualScroller {
        /**
          * Inline style of the component
         */
        "anyStyle": any;
        /**
          * Class name of the content element where items will be rendered
         */
        "contentElemClass": string;
        /**
          * Tag name of content element whwre items will be rendered
         */
        "contentElemTag": string;
        /**
          * Threshold in milliseconds to delay lazy loading during scrolling
         */
        "delay": number;
        /**
          * Class name of the item element
         */
        "itemElemClass": string;
        /**
          * Height of an item in the list
         */
        "itemSize": number;
        /**
          * Tag name for supporting elements: spacing extra rows, empty-data row. It will be determined by itself once data provided, so it's optional. But if your data is not provided during initialization - it is better to specify this option because otherwise plugin will be unable to correctly render empty-data row.
         */
        "itemTag": string;
        /**
          * An array of objects to display
         */
        "items": any[];
        /**
          * Defines if data is loaded and interacted with in lazy manner
         */
        "lazy": boolean;
        /**
          * Text for placeholder element if there is no data provided
         */
        "noDataText": string;
        /**
          * Number of rows to display per page
         */
        "rowsPerPage": number;
        /**
          * Class name of the scroll element
         */
        "scrollElemClass": string;
        /**
          * Max height of the content area in inline mode
         */
        "scrollerHeight": any;
        /**
          * Inline style of the component
         */
        "styleClass": string;
    }
}
declare global {
    interface HTMLAnyBadgeElement extends Components.AnyBadge, HTMLStencilElement {
    }
    var HTMLAnyBadgeElement: {
        prototype: HTMLAnyBadgeElement;
        new (): HTMLAnyBadgeElement;
    };
    interface HTMLAnyBadgeOverlayElement extends Components.AnyBadgeOverlay, HTMLStencilElement {
    }
    var HTMLAnyBadgeOverlayElement: {
        prototype: HTMLAnyBadgeOverlayElement;
        new (): HTMLAnyBadgeOverlayElement;
    };
    interface HTMLAnyButtonElement extends Components.AnyButton, HTMLStencilElement {
    }
    var HTMLAnyButtonElement: {
        prototype: HTMLAnyButtonElement;
        new (): HTMLAnyButtonElement;
    };
    interface HTMLAnyCheckboxElement extends Components.AnyCheckbox, HTMLStencilElement {
    }
    var HTMLAnyCheckboxElement: {
        prototype: HTMLAnyCheckboxElement;
        new (): HTMLAnyCheckboxElement;
    };
    interface HTMLAnyDropdownElement extends Components.AnyDropdown, HTMLStencilElement {
    }
    var HTMLAnyDropdownElement: {
        prototype: HTMLAnyDropdownElement;
        new (): HTMLAnyDropdownElement;
    };
    interface HTMLAnyInputSwitchElement extends Components.AnyInputSwitch, HTMLStencilElement {
    }
    var HTMLAnyInputSwitchElement: {
        prototype: HTMLAnyInputSwitchElement;
        new (): HTMLAnyInputSwitchElement;
    };
    interface HTMLAnyInputTextElement extends Components.AnyInputText, HTMLStencilElement {
    }
    var HTMLAnyInputTextElement: {
        prototype: HTMLAnyInputTextElement;
        new (): HTMLAnyInputTextElement;
    };
    interface HTMLAnyListboxElement extends Components.AnyListbox, HTMLStencilElement {
    }
    var HTMLAnyListboxElement: {
        prototype: HTMLAnyListboxElement;
        new (): HTMLAnyListboxElement;
    };
    interface HTMLAnyRadioButtonElement extends Components.AnyRadioButton, HTMLStencilElement {
    }
    var HTMLAnyRadioButtonElement: {
        prototype: HTMLAnyRadioButtonElement;
        new (): HTMLAnyRadioButtonElement;
    };
    interface HTMLAnyRadioGroupElement extends Components.AnyRadioGroup, HTMLStencilElement {
    }
    var HTMLAnyRadioGroupElement: {
        prototype: HTMLAnyRadioGroupElement;
        new (): HTMLAnyRadioGroupElement;
    };
    interface HTMLAnyRippleEffectElement extends Components.AnyRippleEffect, HTMLStencilElement {
    }
    var HTMLAnyRippleEffectElement: {
        prototype: HTMLAnyRippleEffectElement;
        new (): HTMLAnyRippleEffectElement;
    };
    interface HTMLAnyTabPanelElement extends Components.AnyTabPanel, HTMLStencilElement {
    }
    var HTMLAnyTabPanelElement: {
        prototype: HTMLAnyTabPanelElement;
        new (): HTMLAnyTabPanelElement;
    };
    interface HTMLAnyTabViewElement extends Components.AnyTabView, HTMLStencilElement {
    }
    var HTMLAnyTabViewElement: {
        prototype: HTMLAnyTabViewElement;
        new (): HTMLAnyTabViewElement;
    };
    interface HTMLAnyVirtualScrollerElement extends Components.AnyVirtualScroller, HTMLStencilElement {
    }
    var HTMLAnyVirtualScrollerElement: {
        prototype: HTMLAnyVirtualScrollerElement;
        new (): HTMLAnyVirtualScrollerElement;
    };
    interface HTMLElementTagNameMap {
        "any-badge": HTMLAnyBadgeElement;
        "any-badge-overlay": HTMLAnyBadgeOverlayElement;
        "any-button": HTMLAnyButtonElement;
        "any-checkbox": HTMLAnyCheckboxElement;
        "any-dropdown": HTMLAnyDropdownElement;
        "any-input-switch": HTMLAnyInputSwitchElement;
        "any-input-text": HTMLAnyInputTextElement;
        "any-listbox": HTMLAnyListboxElement;
        "any-radio-button": HTMLAnyRadioButtonElement;
        "any-radio-group": HTMLAnyRadioGroupElement;
        "any-ripple-effect": HTMLAnyRippleEffectElement;
        "any-tab-panel": HTMLAnyTabPanelElement;
        "any-tab-view": HTMLAnyTabViewElement;
        "any-virtual-scroller": HTMLAnyVirtualScrollerElement;
    }
}
declare namespace LocalJSX {
    interface AnyBadge {
        /**
          * Inline style of the component.
         */
        "anyStyle"?: any;
        /**
          * Severity type of the badge.
         */
        "severity"?: string;
        /**
          * Size of the badge, valid options are "large" and "xlarge".
         */
        "size"?: string;
        /**
          * Style class of the component.
         */
        "styleClass"?: string;
        /**
          * Value to display inside the badge.
         */
        "value"?: string;
    }
    interface AnyBadgeOverlay {
        /**
          * Style class of the component.
         */
        "styleClass"?: string;
    }
    interface AnyButton {
        /**
          * Inline style of the element.
         */
        "anyStyle"?: any;
        /**
          * Value of the badge.
         */
        "badge"?: string;
        /**
          * Style class of the badge.
         */
        "badgeClass"?: string;
        /**
          * When present, it specifies that the component should be disabled.
         */
        "disabled"?: boolean;
        /**
          * Name of the icon.
         */
        "icon"?: string;
        /**
          * Height of the icon
         */
        "iconHeight"?: number;
        /**
          * Position of the icon, valid values are "left" and "right".
         */
        "iconPos"?: "left" | "right" | "top" | "bottom";
        /**
          * Width of the icon
         */
        "iconWidth"?: number;
        /**
          * Text of the button.
         */
        "label"?: string;
        /**
          * Whether the button is in loading state.
         */
        "loading"?: boolean;
        /**
          * Icon to display in loading state.
         */
        "loadingIcon"?: string;
        /**
          * Style class of the icon element
         */
        "loadingIconStyleClass"?: string;
        /**
          * Callback to execute when button loses focus.
         */
        "onAOnBlur"?: (event: CustomEvent<any>) => void;
        /**
          * Callback to execute when button is clicked.
         */
        "onAOnClick"?: (event: CustomEvent<any>) => void;
        /**
          * Callback to execute when button is focused.
         */
        "onAOnFocus"?: (event: CustomEvent<any>) => void;
        /**
          * Style class of the element.
         */
        "styleClass"?: string;
        /**
          * Type of the button.
         */
        "type"?: "button" | "submit" | "reset";
    }
    interface AnyCheckbox {
        /**
          * Inline style of the component.
         */
        "anyStyle"?: any;
        /**
          * Index of the element in tabbing order
         */
        "anyTabIndex"?: number;
        /**
          * Allows to select a boolean value instead of multiple values.
         */
        "binary"?: boolean;
        /**
          * Icon class of the checkbox icon.
         */
        "checkboxIcon"?: string;
        /**
          * If `true`, the checkbox is selected.
         */
        "checked"?: boolean;
        /**
          * When present, it specifies that the element should be disabled.
         */
        "disabled"?: boolean;
        /**
          * Identifier of the focus input to match a label defined for the component.
         */
        "inputId"?: string;
        /**
          * Label of the checkbox.
         */
        "label"?: string;
        /**
          * Style class of the label.
         */
        "labelStyleClass"?: string;
        /**
          * Name of the checkbox group.
         */
        "name"?: string;
        /**
          * Emitted when the toggle loses focus.
         */
        "onAOnBlur"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the toggle has focus.
         */
        "onAOnFocus"?: (event: CustomEvent<any>) => void;
        /**
          * Callback to invoke when value of dropdown changes.
         */
        "onValueChange"?: (event: CustomEvent<any>) => void;
        /**
          * When present, it specifies that the component cannot be edited.
         */
        "readonly"?: boolean;
        /**
          * Style class of the component.
         */
        "styleClass"?: any;
        /**
          * The value of the checkbox does not mean if it's checked or not, use the `checked` property for that.  The value of a checkbox is analogous to the value of an `<input type="checkbox">`, it's only used when the checkbox participates in a native `<form>`.
         */
        "value"?: any;
    }
    interface AnyDropdown {
        /**
          * Inline style of the element
         */
        "anyStyle"?: any;
        /**
          * Index of the element in tabbing order
         */
        "anyTabIndex"?: number;
        /**
          * Whether to automatically manage layering
         */
        "autoZIndex"?: boolean;
        /**
          * Base zIndex value to use in layering
         */
        "baseZIndex"?: string;
        /**
          * Icon class of the dropdown clear icon
         */
        "clearIcon"?: string;
        /**
          * When present, it specifies that the element should be disabled
         */
        "disabled"?: boolean;
        /**
          * Icon class of the dropdown icon
         */
        "dropdownIcon"?: string;
        /**
          * Transition options of the hide animation
         */
        "hideAnimation"?: string;
        /**
          * Identifier of the focus input to match a label defined for the component.
         */
        "inputId"?: string;
        /**
          * Name of the dropdown input.
         */
        "name"?: string;
        /**
          * Callback to invoke when dropdown loses focus
         */
        "onAOnBlur"?: (event: CustomEvent<any>) => void;
        /**
          * Callback to invoke when component is clicked
         */
        "onAOnClick"?: (event: CustomEvent<any>) => void;
        /**
          * Callback to invoke when dropdown gets focus
         */
        "onAOnFocus"?: (event: CustomEvent<any>) => void;
        /**
          * Callback to invoke when dropdown overlay gets hidden
         */
        "onAOnHide"?: (event: CustomEvent<any>) => void;
        /**
          * Callback to invoke when dropdown overlay before gets hidden
         */
        "onAOnHideStart"?: (event: CustomEvent<any>) => void;
        /**
          * Callback to invoke when dropdown overlay gets visible
         */
        "onAOnShow"?: (event: CustomEvent<any>) => void;
        /**
          * Callback to invoke when dropdown overlay before gets visible
         */
        "onAOnShowStart"?: (event: CustomEvent<any>) => void;
        /**
          * Callback to invoke when value of dropdown changes
         */
        "onValueChange"?: (event: CustomEvent<any>) => void;
        /**
          * Name of the label field of an option
         */
        "optionLabel"?: string;
        /**
          * Name of the value field of an option
         */
        "optionValue"?: string;
        /**
          * An array of objects to display as the available options.
         */
        "options"?: any[];
        /**
          * Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value
         */
        "panelScrollHeight"?: string;
        /**
          * Default text to display when no option is selected
         */
        "placeholder"?: string;
        /**
          * When present, it specifies that the element value cannot be changed
         */
        "readonly"?: boolean;
        /**
          * Keyframe name the show animation
         */
        "showAnimation"?: string;
        /**
          * When enabled, a clear icon is displayed to clear the value
         */
        "showClear"?: boolean;
        /**
          * Value of the dropdown list
         */
        "value"?: any;
        /**
          * When present, list virtual scroller is enabled
         */
        "virtualScroll"?: boolean;
    }
    interface AnyInputSwitch {
        /**
          * Inline style of the component.
         */
        "anyStyle"?: any;
        /**
          * Index of the element in tabbing order
         */
        "anyTabIndex"?: number;
        /**
          * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
         */
        "ariaLabeledBy"?: string;
        /**
          * If `true`, the input-switch is selected.
         */
        "checked"?: boolean;
        /**
          * When present, it specifies that the element should be disabled.
         */
        "disabled"?: boolean;
        /**
          * Value in unchecked state.
         */
        "falseValue"?: any;
        /**
          * Identifier of the focus input to match a label defined for the component.
         */
        "inputId"?: string;
        /**
          * Name of the checkbox group.
         */
        "name"?: string;
        /**
          * Emitted when the toggle loses focus.
         */
        "onAOnBlur"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the toggle has focus.
         */
        "onAOnFocus"?: (event: CustomEvent<any>) => void;
        /**
          * Callback to invoke when value of dropdown changes.
         */
        "onValueChange"?: (event: CustomEvent<any>) => void;
        /**
          * When present, it specifies that the component cannot be edited.
         */
        "readonly"?: boolean;
        /**
          * Style class of the component.
         */
        "styleClass"?: any;
        /**
          * Value in checked state.
         */
        "trueValue"?: any;
    }
    interface AnyInputText {
        /**
          * When present, it specifies that the element should be disabled
         */
        "disabled"?: boolean;
        /**
          * When enabled, the label will have floating effect on input text focus
         */
        "floatLabel"?: boolean;
        /**
          * Identifier of the focus input to match a label defined for the component.
         */
        "inputId"?: string;
        /**
          * The class of input wrapper element
         */
        "inputWrapperClass"?: string;
        /**
          * Label of the input text
         */
        "label"?: string;
        /**
          * The class of left icon wrapper element
         */
        "leftIconClass"?: string;
        /**
          * Name of the input text.
         */
        "name"?: string;
        /**
          * Callback to invoke when value of input text changes
         */
        "onValueChange"?: (event: CustomEvent<any>) => void;
        /**
          * Default text to display when no value in input text
         */
        "placeholder"?: string;
        /**
          * When present, it specifies that the element value cannot be changed
         */
        "readonly"?: boolean;
        /**
          * The class of right icon wrapper element
         */
        "rightIconClass"?: string;
        /**
          * Value of the input text
         */
        "value"?: string;
    }
    interface AnyListbox {
        /**
          * Inline style of the element
         */
        "anyStyle"?: any;
        /**
          * When present, it specifies that the element should be disabled
         */
        "disabled"?: boolean;
        /**
          * Identifier of the focus input to match a label defined for the component.
         */
        "inputId"?: string;
        /**
          * Inline style of the list element
         */
        "listStyle"?: any;
        /**
          * Name of the dropdown input.
         */
        "name"?: string;
        /**
          * Callback to invoke when value of listbox changes
         */
        "onValueChange"?: (event: CustomEvent<SelectChangeEventDetail>) => void;
        /**
          * Name of the label field of an option
         */
        "optionLabel"?: string;
        /**
          * Name of the value field of an option
         */
        "optionValue"?: string;
        /**
          * An array of objects to display as the available options.
         */
        "options"?: any[];
        /**
          * When present, it specifies that the element value cannot be changed
         */
        "readonly"?: boolean;
        /**
          * Max height of the content area in inline mode
         */
        "scrollerHeight"?: string;
        /**
          * Value of the listbox
         */
        "value"?: any;
        /**
          * When present, list virtual scroller is enabled
         */
        "virtualScroll"?: boolean;
    }
    interface AnyRadioButton {
        /**
          * Inline style of the component.
         */
        "anyStyle"?: any;
        /**
          * Index of the element in tabbing order
         */
        "anyTabIndex"?: number;
        /**
          * When present, it specifies that the element should be disabled.
         */
        "disabled"?: boolean;
        /**
          * Identifier of the focus input to match a label defined for the component.
         */
        "inputId"?: string;
        /**
          * Label of the radiobutton.
         */
        "label"?: string;
        /**
          * Style class of the label.
         */
        "labelStyleClass"?: string;
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name"?: string;
        /**
          * Callback to invoke when the radio button loses focus.
         */
        "onAOnBlur"?: (event: CustomEvent<any>) => void;
        /**
          * Callback to invoke when the radio button receives focus.
         */
        "onAOnFocus"?: (event: CustomEvent<any>) => void;
        /**
          * Callback to invoke on radio button select.
         */
        "onAOnSelect"?: (event: CustomEvent<any>) => void;
        /**
          * Style class of the component.
         */
        "styleClass"?: any;
        /**
          * the value of the radio.
         */
        "value"?: any | null;
    }
    interface AnyRadioGroup {
        /**
          * If `true`, the radios can be deselected.
         */
        "allowEmptySelection"?: boolean;
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name"?: string;
        /**
          * Emitted when the value has changed.
         */
        "onValueChange"?: (event: CustomEvent<RadioGroupChangeEventDetail>) => void;
        /**
          * the value of the radio group.
         */
        "value"?: any | null;
    }
    interface AnyRippleEffect {
        /**
          * Sets the type of ripple-effect:
         */
        "type"?: "bounded" | "unbounded";
    }
    interface AnyTabPanel {
        /**
          * When true, tab cannot be activated.
         */
        "disabled"?: boolean;
        /**
          * Title of the tabPanel.
         */
        "header"?: string;
        /**
          * Defines if tab is active.
         */
        "selected"?: boolean;
    }
    interface AnyTabView {
        /**
          * Index of the active tab to change selected tab programmatically.
         */
        "activeIndex"?: number;
        /**
          * Inline style of the component.
         */
        "anyStyle"?: any;
        /**
          * Style class of the component.
         */
        "styleClass"?: string;
    }
    interface AnyVirtualScroller {
        /**
          * Inline style of the component
         */
        "anyStyle"?: any;
        /**
          * Class name of the content element where items will be rendered
         */
        "contentElemClass"?: string;
        /**
          * Tag name of content element whwre items will be rendered
         */
        "contentElemTag"?: string;
        /**
          * Threshold in milliseconds to delay lazy loading during scrolling
         */
        "delay"?: number;
        /**
          * Class name of the item element
         */
        "itemElemClass"?: string;
        /**
          * Height of an item in the list
         */
        "itemSize"?: number;
        /**
          * Tag name for supporting elements: spacing extra rows, empty-data row. It will be determined by itself once data provided, so it's optional. But if your data is not provided during initialization - it is better to specify this option because otherwise plugin will be unable to correctly render empty-data row.
         */
        "itemTag"?: string;
        /**
          * An array of objects to display
         */
        "items"?: any[];
        /**
          * Defines if data is loaded and interacted with in lazy manner
         */
        "lazy"?: boolean;
        /**
          * Text for placeholder element if there is no data provided
         */
        "noDataText"?: string;
        /**
          * Callback when item is clicked
         */
        "onAOnItemClick"?: (event: CustomEvent<any>) => void;
        /**
          * Callback to invoke in lazy mode to load new data
         */
        "onAOnLazyLoad"?: (event: CustomEvent<any>) => void;
        /**
          * Will be called right after replacing previous cluster with new one
         */
        "onClusterChanged"?: (event: CustomEvent<any>) => void;
        /**
          * Will be called right before replacing previous cluster with new one
         */
        "onClusterWillChange"?: (event: CustomEvent<any>) => void;
        /**
          * Will be called on scrolling. Returns progress position
         */
        "onScrollingProgress"?: (event: CustomEvent<any>) => void;
        /**
          * Number of rows to display per page
         */
        "rowsPerPage"?: number;
        /**
          * Class name of the scroll element
         */
        "scrollElemClass"?: string;
        /**
          * Max height of the content area in inline mode
         */
        "scrollerHeight"?: any;
        /**
          * Inline style of the component
         */
        "styleClass"?: string;
    }
    interface IntrinsicElements {
        "any-badge": AnyBadge;
        "any-badge-overlay": AnyBadgeOverlay;
        "any-button": AnyButton;
        "any-checkbox": AnyCheckbox;
        "any-dropdown": AnyDropdown;
        "any-input-switch": AnyInputSwitch;
        "any-input-text": AnyInputText;
        "any-listbox": AnyListbox;
        "any-radio-button": AnyRadioButton;
        "any-radio-group": AnyRadioGroup;
        "any-ripple-effect": AnyRippleEffect;
        "any-tab-panel": AnyTabPanel;
        "any-tab-view": AnyTabView;
        "any-virtual-scroller": AnyVirtualScroller;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "any-badge": LocalJSX.AnyBadge & JSXBase.HTMLAttributes<HTMLAnyBadgeElement>;
            "any-badge-overlay": LocalJSX.AnyBadgeOverlay & JSXBase.HTMLAttributes<HTMLAnyBadgeOverlayElement>;
            "any-button": LocalJSX.AnyButton & JSXBase.HTMLAttributes<HTMLAnyButtonElement>;
            "any-checkbox": LocalJSX.AnyCheckbox & JSXBase.HTMLAttributes<HTMLAnyCheckboxElement>;
            "any-dropdown": LocalJSX.AnyDropdown & JSXBase.HTMLAttributes<HTMLAnyDropdownElement>;
            "any-input-switch": LocalJSX.AnyInputSwitch & JSXBase.HTMLAttributes<HTMLAnyInputSwitchElement>;
            "any-input-text": LocalJSX.AnyInputText & JSXBase.HTMLAttributes<HTMLAnyInputTextElement>;
            "any-listbox": LocalJSX.AnyListbox & JSXBase.HTMLAttributes<HTMLAnyListboxElement>;
            "any-radio-button": LocalJSX.AnyRadioButton & JSXBase.HTMLAttributes<HTMLAnyRadioButtonElement>;
            "any-radio-group": LocalJSX.AnyRadioGroup & JSXBase.HTMLAttributes<HTMLAnyRadioGroupElement>;
            "any-ripple-effect": LocalJSX.AnyRippleEffect & JSXBase.HTMLAttributes<HTMLAnyRippleEffectElement>;
            "any-tab-panel": LocalJSX.AnyTabPanel & JSXBase.HTMLAttributes<HTMLAnyTabPanelElement>;
            "any-tab-view": LocalJSX.AnyTabView & JSXBase.HTMLAttributes<HTMLAnyTabViewElement>;
            "any-virtual-scroller": LocalJSX.AnyVirtualScroller & JSXBase.HTMLAttributes<HTMLAnyVirtualScrollerElement>;
        }
    }
}
