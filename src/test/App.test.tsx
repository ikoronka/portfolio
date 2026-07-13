import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';
import '../i18n/config';

describe('App', () => {
  it('renders all sections and default English navigation labels', () => {
    const { container } = render(<App />);

    expect(container.querySelector('#about')).toBeInTheDocument();
    expect(container.querySelector('#projects')).toBeInTheDocument();
    expect(container.querySelector('#contact')).toBeInTheDocument();

    expect(screen.getAllByText('Home')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Projects')[0]).toBeInTheDocument();
  });
});
