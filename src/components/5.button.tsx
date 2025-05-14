type ButtonVariant = 'primary' | 'secondary';
type Size = 'small' | 'medium' | 'large';

type ButtonProps = {
  variant: ButtonVariant;
  size: Size;
  onClick: () => void;
  children: React.ReactNode;
  // children: string;
};

export const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  children,
  onClick,
}) => {
  const className = `btn ${variant} ${size}`;
  return (
    <button onClick={onClick} type="button" className={className}>
      {children}
    </button>
  );
};

// Usage
// <Button variant="primary" size="medium" onClick={() =>{}}>Click <b>Me</b></Button>
