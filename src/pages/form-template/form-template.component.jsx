import React from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import ControlTypes from "../../control.types";
import CONTROL from "../../components/dnd-controls/control.component";
function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>form-template</div>
      {CONTROL[ControlTypes.TEXT_BOX]()}
    </DndProvider>
  );
}
export default App;
