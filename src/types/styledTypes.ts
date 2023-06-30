import { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";


export interface StyledTextProps {
  title?: boolean;
  highlight?: boolean;
  white?:boolean;
  bold?: boolean;
  semibold?: boolean;
  outVertical?: boolean;
  inHorizontal?: boolean;
  textCenter?:boolean;
  textJustify?:boolean;
  style?: StyleProp<TextStyle>;
  children: ReactNode;
}

export interface StyledViewProps {
  full?: boolean;
  row?: boolean;
  itemsCenter?: boolean;
  justifyAround?: boolean;
  justifyBeetwen?: boolean;
  justifyCenter?: boolean;
  selfStart?: boolean;
  selfEnd?: boolean;
  selfCenter?: boolean;
  flexOne?:boolean,
  flexZero?:boolean,
  style?: StyleProp<TextStyle>;
  children: ReactNode;
}