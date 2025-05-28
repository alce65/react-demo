import { useNavigate, useParams } from 'react-router';

type Params = { id: string };

export const ProductDetail: React.FC = () => {
  const { id } = useParams<Params>();
  const navigate = useNavigate();
  
  const goTo = (): void => {
      
navigate('/');
  };

  return (
    <div>
      <h1>Product Detail: {id as string}</h1>
      <p>This is the product detail page.</p>
      <p>Here you can view details about a specific product.</p>
      <button onClick={goTo}>Inicio</button>
    </div>
  );
};

export default ProductDetail;
