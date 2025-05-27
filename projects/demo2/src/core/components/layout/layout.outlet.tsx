import { Outlet } from 'react-router';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Menu } from '../menu/menu';

export const Layout: React.FC = () => {
  return (
    <>
      <Header> <Menu /></Header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
