/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Question } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { Collection } from "@aws-amplify/ui-react";
import { SortDirection } from "@aws-amplify/datastore";
export default function QuestionCollection(props) {
  const {
    question,
    items: itemsProp,
    overrides: overridesProp,
    ...rest
  } = props;
  const overrides = { ...overridesProp };
  const itemsPagination = { sort: (s) => s.createdAt(SortDirection.ASCENDING) };
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: Question,
          pagination: itemsPagination,
        }).items;
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "Collection")}
    >
      {(item, index) => (
        <Question
          question={item}
          key={item.id}
          {...getOverrideProps(overrides, "Collection.Question[0]")}
        ></Question>
      )}
    </Collection>
  );
}
