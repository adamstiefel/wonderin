/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Heading, View } from "@aws-amplify/ui-react";
export default function Component2(props) {
  const { Question, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="448px"
      height="494px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <View
        width="448px"
        height="494px"
        position="absolute"
        left="0px"
        top="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196.00000351667404,196.00000351667404,196.00000351667404,1)"
        {...getOverrideProps(overrides, "View.View[0]")}
      ></View>
      <View
        width="352px"
        height="292px"
        position="absolute"
        left="44px"
        top="39px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196.00000351667404,196.00000351667404,196.00000351667404,1)"
        {...getOverrideProps(overrides, "View.View[1]")}
      ></View>
      <Heading
        position="absolute"
        display="flex"
        left="70px"
        top="365px"
        level="1"
        children={Question?.Title}
        {...getOverrideProps(overrides, "View.Heading[0]")}
      ></Heading>
    </View>
  );
}
