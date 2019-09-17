import FormFieldTypes from "./formField.types"

export const getFormFields = () => ({
  type: FormFieldTypes.GET_ALL
});
export const addItem = item => ({
  type: FormFieldTypes.ADD_ITEM,
  payload: item
});
