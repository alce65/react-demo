import { AppContext } from '@context/context';

type Props = {
  children: React.ReactNode;
  title: string;
};

export const AppContextProvider: React.FC<Props> = ({ children, title }) => {
  const context: AppContext = {
    title,
  };

  return <AppContext value={context}>{children}</AppContext>;
};
