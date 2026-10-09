import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

beforeEach(() => {
  localStorage.clear();
  window.matchMedia = jest.fn().mockReturnValue({ matches: false });
});
afterEach(cleanup);

test('theme switches on the shared root, persists, and leaves navigation state alone', () => {
  const { container } = render(<App />);
  expect(document.documentElement).toHaveAttribute('data-theme', 'light');
  fireEvent.click(screen.getByRole('button', { name: 'Switch to dark theme' }));
  expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
  expect(JSON.parse(localStorage.getItem('theme'))).toBe('dark');
  expect(container.querySelector('aside').closest('[data-theme]')).toBe(document.documentElement);
  expect(container.querySelector('main').closest('[data-theme]')).toBe(document.documentElement);
  expect(screen.getByRole('button', { name: 'Toggle navigation' })).toHaveAttribute('aria-expanded', 'false');
  fireEvent.click(screen.getByRole('button', { name: 'Switch to light theme' }));
  expect(document.documentElement).toHaveAttribute('data-theme', 'light');
});

test('saved theme is restored and Setu is the first accessible project', () => {
  localStorage.setItem('theme', JSON.stringify('dark'));
  const { container } = render(<App />);
  expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
  expect(container.querySelector('.portfolio__card h3')).toHaveTextContent('Setu');
  expect(screen.getByRole('link', { name: 'View Setu · Distributed Tensor Exchange on GitHub' })).toHaveAttribute('href', 'https://github.com/Bhumika-Chopra/setu');
  fireEvent.click(screen.getByRole('button', { name: 'Toggle navigation' }));
  expect(screen.getByRole('button', { name: 'Toggle navigation' })).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(screen.getByRole('link', { name: 'Projects' }));
  expect(screen.getByRole('button', { name: 'Toggle navigation' })).toHaveAttribute('aria-expanded', 'false');
});
