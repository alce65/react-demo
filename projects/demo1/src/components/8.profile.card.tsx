// Tipos para las distintas formas del perfil
type Profile = {
  name: string;
}

export type AdminProfile = {
  role: 'admin';
  permissions: string[];
} & Profile;

type UserProfile = {
  role: 'user';
  email: string;
} & ProfileI;


interface ProfileI {
  name: string;
}


interface AdminProfileI extends Profile {
  role: 'admin';
  permissions: string[];
} ;


export interface UserProfileI extends ProfileI {
  role: 'user';
  email: string;
}

type Props = {
  profile: AdminProfileI | UserProfile;
};

export const ProfileCard: React.FC<Props> = ({ profile }) => {
  return (
    <>
      <h2>{profile.name}</h2>
      <p>
        {profile.role === 'admin'
          ? profile.permissions.join(', ')
          : profile.email}
      </p>
    </>
  );
};
