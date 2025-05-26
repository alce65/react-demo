import { Header } from '../header/header';
import { render } from '@testing-library/react';
import { App } from './App';
import { Footer } from '../footer/footer';

vi.mock('../header/header');
vi.mock('../footer/footer');

describe('App Component', () => {
  //Arrange
  const title = import.meta.env.VITE_APP_TITLE || 'React TS - Routes';

  beforeEach(() => {
    vi.clearAllMocks();
    // Act
    render(<App />);
  });
  test('renders calling Header', () => {
    // Assert
    expect(Header).toHaveBeenCalledWith(
      expect.objectContaining({
        title: title,
        children: 'Aquí ira el menu',
      }),
      undefined,
    );
  });
  test('renders calling Footer', () => {
    // Assert
    expect(Footer).toHaveBeenCalled();
  });
});
