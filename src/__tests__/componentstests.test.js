import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import NotFound from '../components/NotFound/NotFound';
import Homepage from '../pages/Homepage';
import Quote from '../components/Qoute/Quote';
import AppRoutes from '../routes';

// Routing test

describe('Navbar renders', () => {
  test('should redirect and update history', () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <AppRoutes />
      </Router>,
    );

    fireEvent.click(screen.getByTestId(/Calculator/));
    expect(history.location.pathname).toEqual('/calculator');
  });

  test('should redirect and update dom', () => {
    render(
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>,
    );

    fireEvent.click(screen.getByTestId(/Calculator/));
    expect(screen.getByText(/Let's do some math!/)).toBeInTheDocument();
  });
});

describe('Not-found page is rendered', () => {
  test('Component is rendered', () => {
    render(<NotFound />);
    const container = screen.getByText(/Oops Page Not Found!/);
    expect(container).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<NotFound />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('HomePage component is rendererd', () => {
  test('Component is rendererd', () => {
    render(<Homepage />);
    const container = screen.getByText(/Welcome to our page!/);
    expect(container).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<Homepage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Qoute component is rendererd', () => {
  test('Component is rendererd', () => {
    render(<Quote />);
    const container = screen.getByTestId(/qoutes/);
    expect(container).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
