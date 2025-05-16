// Tipos para las distintas formas del perfil
type Profile = {
  type: 'admin' | 'user';
  name: string;
  permissions?: string[];
  email?: string;
};

type Props = {
  profile: Profile;
};

// Implementación incorrecta
// Mos obliga a  usr el operador de aserción no nulo
// y a desactivar la correspondiente regla del linter

export const ProfileCard: React.FC<Props> = ({ profile }) => {
  return (
    <>
      <h2>{profile.name}</h2>
      <p>
        {profile.type === 'admin'
          ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            profile.permissions!.join(', ')
          : profile.email}
      </p>
    </>
  );
};
