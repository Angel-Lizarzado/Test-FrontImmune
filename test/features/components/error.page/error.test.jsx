import { render, screen } from '@testing-library/react';
import ErrorPage from '../../../../src/features/components/error.page/ErrorPage';
import '@testing-library/jest-dom';

describe('ErrorPage Component', () => {
  test('renders the image with correct attributes', () => {
    render(<ErrorPage />);

    const image = screen.getByRole('img', {
      name: /vincent from pulp fiction/i,
    });

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/vincent.gif');
    expect(image).toHaveAttribute('alt', 'Vincent from Pulp Fiction');
    expect(image).toHaveAttribute('width', '300');
    expect(image).toHaveAttribute('height', '300');
  });

  test('renders the div with the correct class', () => {
    const { container } = render(<ErrorPage />);

    const divElement = container.querySelector('div');
    expect(divElement).toHaveClass('image');
  });
});
