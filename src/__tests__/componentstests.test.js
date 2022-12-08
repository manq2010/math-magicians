import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
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
});

describe('HomePage component is rendererd', () => {
  test('Component is rendererd', () => {
    render(<Homepage />);
    const container = screen.getByText(/Welcome to our page!/);
    expect(container).toBeInTheDocument();
  });
});

describe('Qoute component is rendererd', () => {
  test('Component is rendererd', () => {
    render(<Quote />);
    const container = screen.getByTestId(/qoutes/);
    expect(container).toBeInTheDocument();
  });
});
