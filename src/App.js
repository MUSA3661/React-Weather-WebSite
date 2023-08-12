import Form from "./components/form/Form";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import Info from "./components/info/Info";
import { useState } from "react";
import { GlobalProvider } from "./context/GlobalSatate";

function App() {
  
  const [sehir,setSehir]=useState("");


  return (
    <GlobalProvider>
       <div className="App">
      <div className="header-text">
        <h1 className="baslik">GÜNCEL HAVA DURUMU SİTEMİZE HOŞGELDİNİZ</h1>
      </div>
      <Container fluid>
        <Row className="appRow">
          <Col  xs="12" lg="4">
            <Form sehir={sehir} setSehir={setSehir} />
          </Col>
          <Col className="appRowCol" xs="12" lg="8">
            <Info/>
          </Col>
        </Row>
      </Container>
    </div>
    </GlobalProvider>
   
  );
}

export default App;
