import React, { useState, useEffect, useRef } from "react";
import { useDrop, useDrag } from "react-dnd";
import DndTypes from "../dnd-controls/dnd.types";
import uniqid from 'uniqid';
import { Container, Col, Row, FormGroup, Label, Input } from 'reactstrap';
const WrapDrag = ({ children,controltype }) => {
    const [{ isDragging }, drag] = useDrag({
        item: { type: DndTypes.BOARD, controlType: controltype },
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
    return React.cloneElement(children,{ref:drag,style:{ opacity }})
}
export default WrapDrag;
