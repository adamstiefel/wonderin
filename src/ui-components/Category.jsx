/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Heading, Text, View } from "@aws-amplify/ui-react";
export default function Category(props) {
  const { category, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="446px"
      height="472px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <View
        width="446px"
        height="472px"
        position="absolute"
        left="0px"
        top="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196.00000351667404,196.00000351667404,196.00000351667404,1)"
        {...getOverrideProps(overrides, "View.View[0]")}
      ></View>
      <Heading
        position="absolute"
        display="flex"
        left="55px"
        top="13px"
        level="1"
        children={category?.Title}
        {...getOverrideProps(overrides, "View.Heading[0]")}
      ></Heading>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="40px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="368px"
        height="136px"
        position="absolute"
        left="34px"
        top="118px"
        padding="0px 0px 0px 0px"
        children={category?.Description}
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
      <Button
        position="absolute"
        display="flex"
        left="98px"
        top="366px"
        size="large"
        variation="primary"
        children="Primary Button"
        {...getOverrideProps(overrides, "View.Button[0]")}
      ></Button>
      <View
        width="100px"
        height="100px"
        position="absolute"
        left="223px"
        top="184px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196.00000351667404,196.00000351667404,196.00000351667404,1)"
        {...getOverrideProps(overrides, "View.View[1]")}
      ></View>
    </View>
  );
}
