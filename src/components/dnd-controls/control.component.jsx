import React from "react";
import { FormGroup, Label, Input, Select } from "reactstrap";
import ControlTypes from "../../control.types";
import WrapDrag from "./wrap-drag.component";

const Textbox = props => {
  const { value } = props;
  return (
    <WrapDrag {...props} controltype={ControlTypes.TEXT_BOX}>
      <div>
        <FormGroup>
          <Label for="textbox">Textbox</Label>
          <Input value={value} />
        </FormGroup>
      </div>
    </WrapDrag>
  );
};
const Combobox = props => {
  const { value } = props;
  return (
    <WrapDrag {...props} controltype={ControlTypes.COMBO_BOX}>
      <div>
        <FormGroup>
          <Label for="combobox">Combobox</Label>
          <Input value={value} type="select" name="select">
            {/* <option>1</option> */}
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
