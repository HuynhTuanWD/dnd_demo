import React, { useState, useEffect, useRef } from "react";
import { useDrop, useDrag } from "react-dnd";
import DndTypes from "../dnd-controls/dnd.types";
import uniqid from 'uniqid';
import { createStructuredSelector } from "reselect";
import { connect } from 'react-redux'
import {selectFormFieldItems} from "../../redux/form-field/formField.selectors"
import ControlTypes from "../../control.types";
import CONTROL from "../../components/dnd-controls/control-middle.component";
const PanelMiddleStyles = {
    width: 420,
    height: 594,
    border: "1px solid black",
    position: "relative"
}
const PanelMiddle = ({formFields}) => {
    const ctnRef = useRef(null);
    // const [boxPos, setBoxPos] = useState([0, 0]);
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: DndTypes.BOARD,
        drop: (item, monitor) => {
            console.log("item", item);
            // const newPos = [boxPos[0] + monitor.getDifferenceFromInitialOffset().x, boxPos[1] + monitor.getDifferenceFromInitialOffset().y];
            // setBoxPos(newPos);
            console.log("drag", monitor.getSourceClientOffset());
        },
        collect: monitor => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    });
    const [id, setId] = useState(uniqid());
    const test = () => {
        console.log(ctnRef.current.getBoundingClientRect())
    }
    return (
        <div className="pdf">
            <div ref={drop} style={{ ...PanelMiddleStyles }}>
                <div style={{ width: "100%", height: "100%" }} ref={ctnRef}>
                    {formFields.map((item,key)=>(
                        CONTROL[item.type]({...item})
                    ))}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    formFields:selectFormFieldItems
})

export default connect(mapStateToProps)(PanelMiddle);