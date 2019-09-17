import React, { useState, useEffect, useRef } from "react";
import { useDrop, useDrag } from "react-dnd";
import DndTypes from "../dnd-controls/dnd.types";
import uniqid from 'uniqid';
import { Container, Col, Row, FormGroup, Label, Input } from 'reactstrap';
const WrapDrag = props => {
    const { children, controltype } = props;
    const id = props.id == undefined ? '-1' : props.id;
    const styles = props.styles == undefined ? {} : props.styles;
    const [{ isDragging }, drag] = useDrag({
        item: { type: DndTypes.BOARD, controlType: controltype,id:id },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                console.log("drop resultttt", item);
            }
        },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });
    const opacity = isDragging ? 0.4 : 1;
    return React.cloneElement(children, { ref: drag, style: { opacity,...styles } })
}
export default WrapDrag;
