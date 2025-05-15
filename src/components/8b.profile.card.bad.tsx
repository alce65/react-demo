// Tipos para las distintas formas del perfil
type Profile = {
  type: 'admin' | 'user';
  name: string;
  permissions?: string[];
  email?: string;
};

type Props = {
  profile: Profile
};

export const ProfileCard: React.FC<Props> = ({ profile }) => {
  return (
    <>
      <h2>{profile.name}</h2>
      <p>
        {profile.type === 'admin'
          ? profile.permissions!.join(', ')
          : profile.email}
      </p>
    </>
  );
};
