import { render, screen } from '@/tests/test-utils';

import { PrimaryButton } from '.';

describe('PrimaryButton', () => {
  it('should render the heading', () => {
    render(<PrimaryButton />);

    // Assert
    screen.getByRole('heading', { name: /PrimaryButton/i });
  });
});
