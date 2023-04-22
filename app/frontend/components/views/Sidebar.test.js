import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  test('renders without crashing', () => {
    const { container } = render(<Sidebar />);
    expect(container).toBeInTheDocument();
  });

  test('renders navigation items', () => {
    const { getByText } = render(<Sidebar />);
    const navItem = getByText('Apply grid');
    expect(navItem).toBeInTheDocument();
  });
});
