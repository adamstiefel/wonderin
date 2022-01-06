/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Category } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import Component1 from "./Component1";
import { Collection } from "@aws-amplify/ui-react";
import { SortDirection } from "@aws-amplify/datastore";
export default function Component1Collection(props) {
  const {
    category,
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
          model: Category,
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
        <Component1
          category={item}
          key={item.id}
          {...getOverrideProps(overrides, "Collection.Component1[0]")}
        ></Component1>
      )}
    </Collection>
  );
}
