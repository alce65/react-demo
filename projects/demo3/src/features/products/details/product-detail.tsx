import type { Product } from '@products/types/product';
import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';

// type Params = { id: UUID };

export const ProductDetail: React.FC = () => {
  const loadedProduct =  useLoaderData<Product>()
  //const { id } = useParams<Params>();
  const navigate = useNavigate();
  const [product ] = useState<Product>(loadedProduct);
  
  //const { productsRepo: repo } = use(AppContext);

//   useEffect(() => {
//     repo
//       .getProductById(id as UUID)
//       .then((data) => {
//         setProduct(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching product:', error);
//       });
//   }, [id, repo]);

  const goTo = (): void => {
    navigate('/');
  };

  return (
    <div>
      <h1>Product Detail: {product.id?.split('-')[0] as string}</h1>
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      )}

      <button onClick={goTo}>Inicio</button>
    </div>
  );
};

export default ProductDetail;
