import React, { useState, useEffect, useRef } from "react";
import { useDrop, useDrag } from "react-dnd";
import DndTypes from "../dnd-controls/dnd.types";
import uniqid from 'uniqid';
import { Container, Col, Row } from 'reactstrap';
import ControlTypes from "../../control.types"
const WrapDrag = ({ children }) => {
    const [{ isDragging }, drag] = useDrag({
        item: { type: DndTypes.BOARD, controlType: ControlTypes.TEXT_BOX },
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
    return children({ref:{drag},style:{opacity:opacity}})
}
export default WrapDrag;
