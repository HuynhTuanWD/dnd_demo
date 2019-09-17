import React from "react"

import ControlTypes from "../../control.types";
import CONTROL from "../../components/dnd-controls/control.component";

const PanelLeft = () => {
    return (
        <>
            {CONTROL[ControlTypes.TEXT_BOX]({ value: "ab" })}
            {CONTROL[ControlTypes.COMBO_BOX]({ value: "abc" })}
        </>
    )
}
export default PanelLeft;