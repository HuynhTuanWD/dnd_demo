import React, { useState, useEffect, useRef } from "react";
import { useDrop, useDrag } from "react-dnd";
import ItemTypes from "./ItemTypes";
import uniqid from 'uniqid';
import { Container, Col, Row } from 'reactstrap';
import ControlTypes from "./DndControls/ControlTypes";
const WrapDrag = ({children}) => {
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.BOARD, controlType: ControlTypes.INPUT_TEXT },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                console.log("drop result", item);
            }
        },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });
    const opacity = isDragging ? 0.4 : 1;
    return <input type="text" ref={drag} style={{ ...InitInputTextStyle, opacity }} />;
}
export default WrapDrag;
