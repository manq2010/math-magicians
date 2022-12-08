import { render, screen } from '@testing-library/react';
import Calculator from '../components/Calculator/Calculator';

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<Calculator />);

  const text = screen.findAllByText('Equal');
  console.log(text);
  // ACT
  //   await userEvent.click(screen.getByText('Load Greeting'));
  //   await screen.findByRole('heading');

  // ASSERT
//   expect(screen.getByRole('heading')).toHaveTextContent('hello there');
//   expect(screen.getByRole('button')).toBeDisabled();
});
