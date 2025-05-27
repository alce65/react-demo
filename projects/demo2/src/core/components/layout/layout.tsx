import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Menu } from '../menu/menu';

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header>
        <Menu />
      </Header>
      <main>{children}</main>
      <Footer />
    </>
  );
};
