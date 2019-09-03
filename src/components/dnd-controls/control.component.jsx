import React from "react";
import {FormGroup,Label,Input} from "reactstrap";
import FormFieldTypes from "../../ItemTypes";
const Textbox = props => {
  return (
    <FormGroup>
      <Label for="textbox">Textbox</Label>
      <Input />
    </FormGroup>
  );
};
export default {
  [FormFieldTypes.INPUT_TEXT]: Textbox
};
