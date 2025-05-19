import { useCallback, useEffect, useState } from 'react';

export type Item = {
  id: number;
  name: string;
};

type Props = {
  getData: () => Promise<Item[]>;
};

export const Items: React.FC<Props> = ({ getData }) => {
  const [items, setItems] = useState<Item[]>([]);

  const loadData = useCallback(async (): Promise<void> => {
    const data = await getData();
    setItems(() => data);
  }, [getData]);

  // const loadData =  async (): Promise<void> => {
  //   const data = await getData();
  //   setItems(() => data);
  // };

  // const loadDataCD = (): void => {
  //   getData().then((data) => {
  //     setItems(() => data);
  //   });
  // };

  useEffect(() => {
    console.log('loadData');
    loadData();
  }, [loadData]);

  return (
    <div>
      <h1>Items: {items.length}</h1>
      {/* <button onClick={() => setItems([...Items, { id: Items.length + 1, name: `Item ${Items.length + 1}` }])}>
                Add Item
            </button> */}
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export const ItemsWrapper: React.FC = () => {
  // const getData = async (): Promise<Item[]> => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       console.log('getData');
  //       resolve([
  //         { id: 1, name: 'Pepe' },
  //         { id: 2, name: 'Luis' },
  //         { id: 3, name: 'Rosa' },
  //       ]);
  //     }, 100);
  //   });
  // };

  const getData = useCallback(async (): Promise<Item[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('getData');
        resolve([
          { id: 1, name: 'Pepe' },
          { id: 2, name: 'Luis' },
          { id: 3, name: 'Rosa' },
        ]);
      }, 100);
    });
  }, []);

  // return <Items getData={async () => []}></Items>;
  return <Items getData={getData}></Items>;
};
