import { useEffect, useState } from 'react';

export type Item = {
  id: number;
  name: string;
};

type Props = {
  getData: () => Promise<Item[]>;
};

export const Items: React.FC<Props> = ({ getData }) => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const loadData = async (): Promise<void> => {
      const data = await getData();
      setItems(() => data);
    };

    loadData();
  }, []);

  // React Hook useEffect has a missing dependency: 'loadData'.
  // Either include it or remove the dependency array.

  return (
    <div>
      <h1>Items</h1>
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
