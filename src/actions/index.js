import { CLICK_UPDATE_VALUE, CLICK_ADD_VALUE, CLICK_DELETE_VALUE } from "./actionTypes";

export const clickButton = value => ({
  type: CLICK_UPDATE_VALUE,
  newValue: value
});

export const addLabel = label => ({
  type: CLICK_ADD_VALUE,
  label
});

export const deleteLabel = index => ({
  type: CLICK_DELETE_VALUE,
  index
});