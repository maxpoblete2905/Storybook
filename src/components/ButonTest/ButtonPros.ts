import { IconOpcion } from "@types-data/icon";
import {
    BorderRadiusOption,
    BoxShadowOption,
    ColorOption,
    FontWeightOption,
    FontSizeOption,
    MarginOption,
    PaddingOption,
} from "@types-data/index";
import { ScaleValue } from "@types-data/scale";

export interface ButtonProps {
    icon?: IconOpcion;
    label: string;
    color?: ColorOption;
    fontSize?: FontSizeOption;
    fontWeight?: FontWeightOption;
    margin?: MarginOption;
    padding?: PaddingOption;
    borderRadius?: BorderRadiusOption;
    boxShadow?: BoxShadowOption;
    backgroundColor?: ColorOption;
    hoverBackground?: ColorOption;
    hoverColor?: ColorOption;
    hoverScale?:ScaleValue;
}
