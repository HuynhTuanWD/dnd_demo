import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import ControlTypes from "../../control.types";
import WrapDrag from "./wrap-drag.component";
const Textbox = props => {
  return (
    <WrapDrag>
        <FormGroup>
          <Label for="textbox">Textbox</Label>
          <Input />
        </FormGroup>
    </WrapDrag>
  );
};
const Combobox = props => {
  return (
    <FormGroup>
      <Label for="textbox">Textbox</Label>
      <Input />
    </FormGroup>
  );
};
export default {
  [ControlTypes.TEXT_BOX]: Textbox,
};
