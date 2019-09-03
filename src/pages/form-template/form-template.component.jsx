import React from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import FormFieldTypes from "../../ItemTypes";
import CONTROL from "../../components/dnd-controls/control.component";
const Mycomponent = () => CONTROL["INPUT_TEXT"]();
function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>form-template</div>
      {CONTROL[FormFieldTypes.INPUT_TEXT]()}
    </DndProvider>
  );
}
export default App;
