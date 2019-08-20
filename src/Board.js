import React, { useState, useEffect } from "react";
import { useDrop, useDrag } from "react-dnd";
import ItemTypes from "./ItemTypes";
const style = {
  width: 400,
  height: 400,
  left: 150,
  backgroundColor: "white",
  border: "1px solid black",
  position: "relative"
};
const Board = () => {
  const [boxPos, setBoxPos] = useState([0, 0]);
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop: (item, monitor) => {
      const newPos = [boxPos[0]+monitor.getDifferenceFromInitialOffset().x,boxPos[1]+monitor.getDifferenceFromInitialOffset().y];
      setBoxPos(newPos);
      console.log("drop", monitor.getDifferenceFromInitialOffset());
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });
  return (
    <div ref={drop} style={{ ...style }}>
      <Box boxPos={boxPos} />
    </div>
  );
};
const BoxStyle = {
  width: 30,
  height: 30,
  backgroundColor: "green",
  position: "absolute",
  cursor: "move"
};
const Box = ({ boxPos:[x,y] }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.BOX },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  const opacity = isDragging ? 0.4 : 1;
  return <div ref={drag} style={{ ...BoxStyle,left:x,top:y, opacity }} />;
};
export default Board;
