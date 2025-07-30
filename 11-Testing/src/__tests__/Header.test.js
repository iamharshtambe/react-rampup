import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../components/Header.js';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

test('should load header component', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const home = screen.getByText('Home');

  expect(home).toBeInTheDocument();
});

test('should change login button to logout on click', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const loginBtn = screen.getByRole('button', { name: 'Login 🟢' });

  fireEvent.click(loginBtn);

  const logoutBtn = screen.getByRole('button', { name: 'Logout 🔴' });

  expect(logoutBtn).toBeInTheDocument();
});
