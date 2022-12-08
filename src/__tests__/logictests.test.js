import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator/Calculator';

describe('Calculator component is rendererd', () => {
  test('Component functions', () => {
    // Arrange
    render(<Calculator />);

    // Act
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    const result = screen.getByTestId('total');

    // Assert
    expect(result).toHaveTextContent('15');
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
