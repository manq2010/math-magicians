import React from 'react';
import styled from 'styled-components';
import { colors } from '../theme';
import calculator from '../logic/calculator';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: 0,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler = (e) => {
    const value = e.target.getAttribute('value');
    this.setState((state) => calculator(state, value));
  }

  render() {
    const { total } = this.state;
    const { next } = this.state;
    const display = next || total || '0';

    return (
      <CalculatorContainer>
        <Display>{ display }</Display>
        <Clear onClick={this.onClickHandler} value="AC">AC</Clear>
        <PlusMinus onClick={this.onClickHandler} value="+/-">+/-</PlusMinus>
        <Percentage onClick={this.onClickHandler} value="%">%</Percentage>
        <Divide onClick={this.onClickHandler} value="÷">÷</Divide>
        <Multiple onClick={this.onClickHandler} value="x">*</Multiple>
        <Minus onClick={this.onClickHandler} value="-">-</Minus>
        <Add onClick={this.onClickHandler} value="+">+</Add>
        <Equal onClick={this.onClickHandler} value="=">=</Equal>
        <Zero onClick={this.onClickHandler} value="0">0</Zero>
        <Number onClick={this.onClickHandler} value="7">7</Number>
        <Number onClick={this.onClickHandler} value="8">8</Number>
        <Number onClick={this.onClickHandler} value="9">9</Number>
        <Number onClick={this.onClickHandler} value="4">4</Number>
        <Number onClick={this.onClickHandler} value="5">5</Number>
        <Number onClick={this.onClickHandler} value="6">6</Number>
        <Number onClick={this.onClickHandler} value="1">1</Number>
        <Number onClick={this.onClickHandler} value="2">2</Number>
        <Number onClick={this.onClickHandler} value="3">3</Number>
        <Dot onClick={this.onClickHandler} value=".">.</Dot>
      </CalculatorContainer>
    );
  }
}

const CalculatorContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 60px);
  grid-template-rows: repeat(6, 50px);
  border: 1px solid ${colors.gray};
  width: fit-content;
  height: fit-content;
  margin: 100px auto;
`;

const Display = styled.div`
  display: flex;
  justify-content: end;
  padding: 0 10px;
  align-items: center;
  border: 1px solid ${colors.gray};
  color: ${colors.white};
  grid-column: 1 / span 4;
  background: ${colors.chrome};
`;

const Clear = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.gray};
  color: ${colors.black};
  grid-column: 1 / 1;
`;

const PlusMinus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.gray};
  color:  ${colors.black} ;
  grid-column: 2 / 2;
`;

const Percentage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.gray};
  color:  ${colors.black} ;
  grid-column: 3 / 3;
`;

const Divide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.gray};
  color:  ${colors.black} ;
  grid-column: 4 / 4;
  background: ${colors.yellow};
`;

const Multiple = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.gray};
  color:  ${colors.black} ;
  grid-row: 3 / 3;
  grid-column: 4 / 4;
  background: ${colors.yellow};
`;

const Minus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.gray};
  color:  ${colors.black} ;
  grid-row: 4 / 4;
  grid-column: 4 / 4;
  background: ${colors.yellow};
`;

const Add = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.gray};
  color:  ${colors.black} ;
  grid-row: 5 / 5;
  grid-column: 4 / 4;
  background: ${colors.yellow};
`;

const Equal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.gray};
  color:  ${colors.black} ;
  grid-row: 6 / span 1;
  grid-column: 4 / 4;
  background: ${colors.yellow};
`;

const Zero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.gray};
  color:  ${colors.black} ;
  grid-row: 6 / span 1;
  grid-column: 1 / span 2;
`;

const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.gray};
  color:  ${colors.black} ;
`;

const Dot = styled.div`
display: flex;
justify-content: center;
border: 1px solid ${colors.gray};
align-items: center;
color:  ${colors.black} ;
`;
