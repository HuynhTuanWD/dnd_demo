import { createSelector } from 'reselect';

const selectFormFields = state => state.formField;

export const selectFormFieldItems = createSelector(
  [selectFormFields],
  formField => formField.formFields
);