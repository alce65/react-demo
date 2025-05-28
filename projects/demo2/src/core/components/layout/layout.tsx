import { Footer } from '@core/components/footer/footer';
import { Header } from '@core/components/header/header';
import { Menu } from '@core/components/menu/menu';

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
