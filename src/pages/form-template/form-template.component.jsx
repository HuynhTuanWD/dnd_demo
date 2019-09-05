import React from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import ControlTypes from "../../control.types";
import CONTROL from "../../components/dnd-controls/control.component";
import { Container, Row, Col } from 'reactstrap';
import PanelMiddle from "../../components/panel-middle/panel-middle.component"
function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>form-template</div>
      <Container>
        <Row>
          <Col sm={3}>
            {CONTROL[ControlTypes.TEXT_BOX]({ name: "ab" })}
            {CONTROL[ControlTypes.COMBO_BOX]()}
          </Col>
          <Col sm={6}>
            <PanelMiddle/>
          </Col>
          <Col sm={3}>
          </Col>
        </Row>
      </Container>
    </DndProvider>
  );
}
export default App;
