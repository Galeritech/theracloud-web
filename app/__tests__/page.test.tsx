import { render } from '@testing-library/react';
import Page from '../page';

describe('Home Page', () => {
  it('renders the home page', () => {
    const { container } = render(<Page />);
    // Add your test assertions here
    expect(container).toBeInTheDocument();
  });
});

