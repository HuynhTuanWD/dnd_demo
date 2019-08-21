import React, { useState, useEffect } from "react";
import { useDrop, useDrag } from "react-dnd";
import ItemTypes from "./ItemTypes";
import uniqid from 'uniqid';
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
  const [listEl,setListEl] = useState([]);
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.BOARD,
    drop: (item, monitor) => {
      console.log("item", item);
      const newPos = [boxPos[0] + monitor.getDifferenceFromInitialOffset().x, boxPos[1] + monitor.getDifferenceFromInitialOffset().y];
      setBoxPos(newPos);  
      console.log("drop", monitor.getDifferenceFromInitialOffset());
      console.log("drop result",monitor.getDropResult());
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });
  const [id, setId] = useState(uniqid());
  return (
    <div className="container">
      <InitInputText />
      <div ref={drop} style={{ ...style }}>
        <Box id={id} boxPos={boxPos} />
      </div>
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
const Box = ({ boxPos: [x, y], id }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { id: id, type: ItemTypes.BOARD },
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
  return <div ref={drag} style={{ ...BoxStyle, left: x, top: y, opacity }} />;
};

const InputTextStyle = {
  position: "absolute",
  cursor: "move"
};
const InputText = ({ pos: [x, y], id }) =>{
  const [{ isDragging }, drag] = useDrag({
    item: { id:id,type: ItemTypes.BOARD, },
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
  return <input type="text" ref={drag} style={{ ...InputTextStyle,left:x,top:y, opacity }} />;
}
const InitInputTextStyle = {
  cursor: "move"
};
const InitInputText = () => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.BOARD,cpn:'INPUT_TEXT'},
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
export default Board;
