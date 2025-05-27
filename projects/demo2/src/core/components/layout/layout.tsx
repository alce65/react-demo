import { Footer } from '../footer/footer';
import { Header } from '../header/header';

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header>Aquí ira el menu</Header>
      <main>{children}</main>
      <Footer />
    </>
  );
};
