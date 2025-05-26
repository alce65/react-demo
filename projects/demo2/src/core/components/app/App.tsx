import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import './App.css';

export const App: React.FC = () => {
  const title = 'React Routes';
  return (
    <>
      <Header title={title}>Aquí ira el menu</Header>
      <main> </main>
      <Footer />
    </>
  );
};
