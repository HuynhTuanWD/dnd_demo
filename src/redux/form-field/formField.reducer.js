import FormFieldTypes from "./formField.types";
import ControlTypes from "../../control.types";


const INITIAL_STATE = {
    formFields: [
        { name: "Textbox", type: ControlTypes.TEXT_BOX, value:'', styles: { position: "absolute", left: 0, top: 0 } },
        { name: "Combobox", type: ControlTypes.COMBO_BOX, value:'' },
        // { name: "Datepicker", type: ControlTypes.DATE_PICKER },
        // { name: "Checkbox", type: ControlTypes.CHECK_BOX },
        // { name: "Textarea", type: ControlTypes.TEXT_AREA },
        // { name: "Image", type: ControlTypes.IMAGE }
    ],
};

const formFieldReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FormFieldTypes.GET_ALL:
            return {
                ...state,
            };
        case FormFieldTypes.ADD_ITEM:
            return {
                ...state,
                formFields: [...state.formFields, action.payload]
            }
        default:
            return state;
    }
};

export default formFieldReducer;
