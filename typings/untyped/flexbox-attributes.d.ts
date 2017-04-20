declare namespace AngularMaterial {
  export namespace Flexbox {
    type To100 = "5" | "10" | "15" | "20" | "25" | "30" | "35" | "40" | "45" | "50" | "55" | "60" | "65" | "70" | "75" | "80" | "85" | "90" | "95" | "100";
    type FlexValue = boolean | To100 | "auto" | "none" | "noshrink" | "nogrow";
    type FlexOffsetValue = To100;
    type FlexOrderValue = "-20" | "-19" | "-18" | "-17" | "-16" | "-15" | "-14" | "-13" | "-12" | "-11" | "-10" | "-9" | "-8" | "-7" | "-6" | "-5" | "-4" | "-3" | "-2" | "-1" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20";
    type LayoutValue = "column" | "row";
    type LayoutAlignValue =
      "none none" |
      "none start" |
      "none center" |
      "none end" |
      "none stretch" |
      "start none" |
      "start start" |
      "start center" |
      "start end" |
      "start stretch" |
      "center none" |
      "center start" |
      "center center" |
      "center end" |
      "center stretch" |
      "end none" |
      "end start" |
      "end center" |
      "end end" |
      "end stretch" |
      "space-around none" |
      "space-around start" |
      "space-around center" |
      "space-around end" |
      "space-around stretch" |
      "space-between none" |
      "space-between start" |
      "space-between center" |
      "space-between end" |
      "space-between stretch";
    export interface Attributes {
      'layout'?: LayoutValue;
      'layout-xs'?: LayoutValue;
      'layout-gt-xs'?: LayoutValue;
      'layout-sm'?: LayoutValue;
      'layout-gt-sm'?: LayoutValue;
      'layout-lt-sm'?: LayoutValue;
      'layout-md'?: LayoutValue;
      'layout-gt-md'?: LayoutValue;
      'layout-lt-md'?: LayoutValue;
      'layout-lg'?: LayoutValue;
      'layout-gt-lg'?: LayoutValue;
      'layout-lt-lg'?: LayoutValue;
      'layout-xl'?: LayoutValue;
      'layout-lt-xl'?: LayoutValue;
      'flex'?: FlexValue;
      'flex-xs'?: FlexValue;
      'flex-gt-xs'?: FlexValue;
      'flex-sm'?: FlexValue;
      'flex-gt-sm'?: FlexValue;
      'flex-lt-sm'?: FlexValue;
      'flex-md'?: FlexValue;
      'flex-gt-md'?: FlexValue;
      'flex-lt-md'?: FlexValue;
      'flex-lg'?: FlexValue;
      'flex-gt-lg'?: FlexValue;
      'flex-lt-lg'?: FlexValue;
      'flex-xl'?: FlexValue;
      'flex-lt-xl'?: FlexValue;
      'flex-order'?: FlexOrderValue;
      'flex-order-xs'?: FlexOrderValue;
      'flex-order-gt-xs'?: FlexOrderValue;
      'flex-order-sm'?: FlexOrderValue;
      'flex-order-gt-sm'?: FlexOrderValue;
      'flex-order-lt-sm'?: FlexOrderValue;
      'flex-order-md'?: FlexOrderValue;
      'flex-order-gt-md'?: FlexOrderValue;
      'flex-order-lt-md'?: FlexOrderValue;
      'flex-order-lg'?: FlexOrderValue;
      'flex-order-gt-lg'?: FlexOrderValue;
      'flex-order-lt-lg'?: FlexOrderValue;
      'flex-order-xl'?: FlexOrderValue;
      'flex-order-lt-xl'?: FlexOrderValue;
      'flex-offset'?: FlexOffsetValue;
      'flex-offset-xs'?: FlexOffsetValue;
      'flex-offset-gt-xs'?: FlexOffsetValue;
      'flex-offset-sm'?: FlexOffsetValue;
      'flex-offset-gt-sm'?: FlexOffsetValue;
      'flex-offset-lt-sm'?: FlexOffsetValue;
      'flex-offset-md'?: FlexOffsetValue;
      'flex-offset-gt-md'?: FlexOffsetValue;
      'flex-offset-lt-md'?: FlexOffsetValue;
      'flex-offset-lg'?: FlexOffsetValue;
      'flex-offset-gt-lg'?: FlexOffsetValue;
      'flex-offset-lt-lg'?: FlexOffsetValue;
      'flex-offset-xl'?: FlexOffsetValue;
      'flex-offset-lt-xl'?: FlexOffsetValue;
      'layout-align'?: LayoutAlignValue;
      'layout-align-xs'?: LayoutAlignValue;
      'layout-align-gt-xs'?: LayoutAlignValue;
      'layout-align-sm'?: LayoutAlignValue;
      'layout-align-gt-sm'?: LayoutAlignValue;
      'layout-align-lt-sm'?: LayoutAlignValue;
      'layout-align-md'?: LayoutAlignValue;
      'layout-align-gt-md'?: LayoutAlignValue;
      'layout-align-lt-md'?: LayoutAlignValue;
      'layout-align-lg'?: LayoutAlignValue;
      'layout-align-gt-lg'?: LayoutAlignValue;
      'layout-align-lt-lg'?: LayoutAlignValue;
      'layout-align-xl'?: LayoutAlignValue;
      'layout-align-lt-xl'?: LayoutAlignValue;
      'layout-fill'?: boolean;
      'layout-fill-xs'?: boolean;
      'layout-fill-gt-xs'?: boolean;
      'layout-fill-sm'?: boolean;
      'layout-fill-gt-sm'?: boolean;
      'layout-fill-lt-sm'?: boolean;
      'layout-fill-md'?: boolean;
      'layout-fill-gt-md'?: boolean;
      'layout-fill-lt-md'?: boolean;
      'layout-fill-lg'?: boolean;
      'layout-fill-gt-lg'?: boolean;
      'layout-fill-lt-lg'?: boolean;
      'layout-fill-xl'?: boolean;
      'layout-fill-lt-xl'?: boolean;
      'layout-wrap'?: boolean;
      'layout-wrap-xs'?: boolean;
      'layout-wrap-gt-xs'?: boolean;
      'layout-wrap-sm'?: boolean;
      'layout-wrap-gt-sm'?: boolean;
      'layout-wrap-lt-sm'?: boolean;
      'layout-wrap-md'?: boolean;
      'layout-wrap-gt-md'?: boolean;
      'layout-wrap-lt-md'?: boolean;
      'layout-wrap-lg'?: boolean;
      'layout-wrap-gt-lg'?: boolean;
      'layout-wrap-lt-lg'?: boolean;
      'layout-wrap-xl'?: boolean;
      'layout-wrap-lt-xl'?: boolean;
      'layout-nowrap'?: boolean;
      'layout-nowrap-xs'?: boolean;
      'layout-nowrap-gt-xs'?: boolean;
      'layout-nowrap-sm'?: boolean;
      'layout-nowrap-gt-sm'?: boolean;
      'layout-nowrap-lt-sm'?: boolean;
      'layout-nowrap-md'?: boolean;
      'layout-nowrap-gt-md'?: boolean;
      'layout-nowrap-lt-md'?: boolean;
      'layout-nowrap-lg'?: boolean;
      'layout-nowrap-gt-lg'?: boolean;
      'layout-nowrap-lt-lg'?: boolean;
      'layout-nowrap-xl'?: boolean;
      'layout-nowrap-lt-xl'?: boolean;
      'layout-margin'?: boolean;
      'layout-margin-xs'?: boolean;
      'layout-margin-gt-xs'?: boolean;
      'layout-margin-sm'?: boolean;
      'layout-margin-gt-sm'?: boolean;
      'layout-margin-lt-sm'?: boolean;
      'layout-margin-md'?: boolean;
      'layout-margin-gt-md'?: boolean;
      'layout-margin-lt-md'?: boolean;
      'layout-margin-lg'?: boolean;
      'layout-margin-gt-lg'?: boolean;
      'layout-margin-lt-lg'?: boolean;
      'layout-margin-xl'?: boolean;
      'layout-margin-lt-xl'?: boolean;
      'layout-padding'?: boolean;
      'layout-padding-xs'?: boolean;
      'layout-padding-gt-xs'?: boolean;
      'layout-padding-sm'?: boolean;
      'layout-padding-gt-sm'?: boolean;
      'layout-padding-lt-sm'?: boolean;
      'layout-padding-md'?: boolean;
      'layout-padding-gt-md'?: boolean;
      'layout-padding-lt-md'?: boolean;
      'layout-padding-lg'?: boolean;
      'layout-padding-gt-lg'?: boolean;
      'layout-padding-lt-lg'?: boolean;
      'layout-padding-xl'?: boolean;
      'layout-padding-lt-xl'?: boolean;
      'show'?: boolean;
      'show-xs'?: boolean;
      'show-gt-xs'?: boolean;
      'show-sm'?: boolean;
      'show-gt-sm'?: boolean;
      'show-lt-sm'?: boolean;
      'show-md'?: boolean;
      'show-gt-md'?: boolean;
      'show-lt-md'?: boolean;
      'show-lg'?: boolean;
      'show-gt-lg'?: boolean;
      'show-lt-lg'?: boolean;
      'show-xl'?: boolean;
      'show-lt-xl'?: boolean;
      'hide'?: boolean;
      'hide-xs'?: boolean;
      'hide-gt-xs'?: boolean;
      'hide-sm'?: boolean;
      'hide-gt-sm'?: boolean;
      'hide-lt-sm'?: boolean;
      'hide-md'?: boolean;
      'hide-gt-md'?: boolean;
      'hide-lt-md'?: boolean;
      'hide-lg'?: boolean;
      'hide-gt-lg'?: boolean;
      'hide-lt-lg'?: boolean;
      'hide-xl'?: boolean;
      'hide-lt-xl'?: boolean;
    }
  }
}
