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

test('career columns contain only the requested entries and projects stay at six', () => {
  const { container } = render(<App />);
  const columns = container.querySelectorAll('.resume__column');
  expect(columns).toHaveLength(2);
  expect(columns[0].querySelectorAll('.resume__entry')).toHaveLength(3);
  expect(columns[1].querySelectorAll('.resume__entry')).toHaveLength(2);
  expect(columns[0]).toHaveTextContent('Avartha');
  expect(columns[0]).toHaveTextContent('Amazon');
  expect(columns[0]).toHaveTextContent('Maven Securities');
  expect(columns[1]).toHaveTextContent('Georgia Tech');
  expect(columns[1]).toHaveTextContent('IIT Delhi');
  expect(container.querySelectorAll('.portfolio__card')).toHaveLength(6);
  expect(container).not.toHaveTextContent('CUDA');
  const reveal = screen.getByRole('button', { name: 'Show details for Setu · Distributed Tensor Exchange' });
  fireEvent.click(reveal);
  expect(reveal).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(reveal);
  expect(reveal).toHaveAttribute('aria-expanded', 'false');
});

test('theme uses a whole-page transition when available and respects reduced motion', () => {
  document.startViewTransition = jest.fn(callback => { callback(); return { skipTransition: jest.fn() }; });
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'Switch to dark theme' }));
  expect(document.startViewTransition).toHaveBeenCalledTimes(1);
  expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
  window.matchMedia.mockReturnValue({ matches: true });
  fireEvent.click(screen.getByRole('button', { name: 'Switch to light theme' }));
  expect(document.startViewTransition).toHaveBeenCalledTimes(1);
  expect(document.documentElement).toHaveAttribute('data-theme', 'light');
  delete document.startViewTransition;
});
