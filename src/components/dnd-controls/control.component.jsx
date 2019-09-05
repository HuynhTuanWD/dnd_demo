import React from "react";
import { FormGroup, Label, Input,Select } from "reactstrap";
import ControlTypes from "../../control.types";
import WrapDrag from "./wrap-drag.component";
const Textbox = props => {
  return (
    <WrapDrag controltype={ControlTypes.TEXT_BOX}>
      <div>
        <FormGroup>
          <Label for="textbox">Textbox</Label>
          <Input defaultValue={props.name} />
        </FormGroup>
      </div>
    </WrapDrag>
  );
};
const Combobox = props => {
  return (
    <WrapDrag controltype={ControlTypes.COMBO_BOX}>
      <div>
        <FormGroup>
          <Label for="combobox">Combobox</Label>
          <Input type="select" name="select">
            <option>1</option>
          </Input>
        </FormGroup>
      </div>
    </WrapDrag>
  );
};
export default {
  [ControlTypes.TEXT_BOX]: Textbox,
  [ControlTypes.COMBO_BOX]: Combobox
};
