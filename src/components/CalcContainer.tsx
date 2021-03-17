import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { DisplayContext } from "./DisplayContext";
import DisplayWindow from "./DisplayWindow";
import { CalcFunction, Clear, Equals } from "./enumFunction";
import KeyProcessor from "./KeyProcessor";
import NumberCell from "./NumberCell";
import FunctionCell from "./FunctionCell";
import { FunctionResult } from "./FunctionResult";
import EqualsCell from "./EqualsCell";
import ClearCell from "./ClearCell";

export default class CalcContainer extends Component<{}, FunctionResult> {
  private keyProcessor: KeyProcessor = new KeyProcessor();

  componentWillMount() {
    this.setState({
      number1: null,
      number2: null,
      funcAction: null,
      result: null,
    });
  }

  cellNumberClickHandler = (cellValue: number | CalcFunction | typeof Equals | typeof Clear) => {
    let result = this.keyProcessor.ProcessKey(cellValue);
    this.setState(result);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col className="bg-white">
            <DisplayContext.Provider value={this.state}>
              <DisplayWindow />
            </DisplayContext.Provider>
          </Col>
        </Row>
        <Row>
          <Col>
            <NumberCell cellValue={7} onClick={this.cellNumberClickHandler} />
          </Col>
          <Col>
            <NumberCell cellValue={8} onClick={this.cellNumberClickHandler} />
          </Col>
          <Col>
            <NumberCell cellValue={9} onClick={this.cellNumberClickHandler} />
          </Col>
          <Col>
            <FunctionCell
              cellFunction={CalcFunction.Add}
              callbackFunc={this.cellNumberClickHandler}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NumberCell cellValue={4} onClick={this.cellNumberClickHandler} />
          </Col>
          <Col>
            <NumberCell cellValue={5} onClick={this.cellNumberClickHandler} />
          </Col>
          <Col>
            <NumberCell cellValue={6} onClick={this.cellNumberClickHandler} />
          </Col>
          <Col>
            <FunctionCell
              cellFunction={CalcFunction.Subtract}
              callbackFunc={this.cellNumberClickHandler}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NumberCell cellValue={1} onClick={this.cellNumberClickHandler} />
          </Col>
          <Col>
            <NumberCell cellValue={2} onClick={this.cellNumberClickHandler} />
          </Col>
          <Col>
            <NumberCell cellValue={3} onClick={this.cellNumberClickHandler} />
          </Col>
          <Col>
            <FunctionCell
              cellFunction={CalcFunction.Multiply}
              callbackFunc={this.cellNumberClickHandler}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NumberCell cellValue={0} onClick={this.cellNumberClickHandler} />
          </Col>
          <Col><ClearCell callbackFunc={this.cellNumberClickHandler} /></Col>
          <Col><EqualsCell callbackFunc={this.cellNumberClickHandler} /></Col>
          <Col>
            <FunctionCell
              cellFunction={CalcFunction.Divide}
              callbackFunc={this.cellNumberClickHandler}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
