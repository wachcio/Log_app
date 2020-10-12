import React from 'react';
import { render } from '@testing-library/react';
import Root from './views/Root/Root';

test('renders learn react link', () => {
    const { getByText } = render(<Root />);
    const linkElement = getByText(/super apka/i);
    expect(linkElement).toBeInTheDocument();
});
