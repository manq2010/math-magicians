import React from 'react';
import styled from 'styled-components';
import { colors } from '../theme';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <CalculatorContainer>
        <Display>0</Display>
        <Clear>AC</Clear>
        <PlusMinus>+/-</PlusMinus>
        <Percentage>%</Percentage>
        <Divide>/</Divide>
        <Multiple>*</Multiple>
        <Minus>-</Minus>
        <Add>+</Add>
        <Equal>=</Equal>
        <Zero>0</Zero>
        <Number>7</Number>
        <Number>8</Number>
        <Number>9</Number>
        <Number>4</Number>
        <Number>5</Number>
        <Number>6</Number>
        <Number>1</Number>
        <Number>2</Number>
        <Number>3</Number>
        <Dot>.</Dot>
      </CalculatorContainer>
    );
  }
}

const CalculatorContainer = styled.div`
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
