import FormFieldTypes from "./form-field.types";
import ControlTypes from "../../control.types";
const INITIAL_STATE = {
    formFields: [
        { name: "Textbox", type: ControlTypes.TEXT_BOX },
        { name: "Combobox", type: ControlTypes.COMBO_BOX },
        { name: "Datepicker", type: ControlTypes.DATE_PICKER },
        { name: "Checkbox", type: ControlTypes.CHECK_BOX },
        { name: "Textarea", type: ControlTypes.TEXT_AREA },
        { name: "Image", type: ControlTypes.IMAGE }
    ],
};

const formFieldReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FormFieldTypes.GET_ALL:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default formFieldReducer;
