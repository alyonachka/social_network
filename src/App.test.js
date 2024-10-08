import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders MainPage component', () => {
  // Оборачиваем компонент в Provider и Router
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );

  const loginButton = screen.getByText(/Вход/i);
  const registrationButton = screen.getByText(/Регистрация/i);

  expect(loginButton).toBeInTheDocument();
  expect(registrationButton).toBeInTheDocument();
});
