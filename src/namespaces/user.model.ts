/* eslint-disable @typescript-eslint/no-namespace */
export namespace UserModel {
  export interface User {
    id: number;
    name: string;
  }

  export const getDisplayName = (user: User): string => `👤 ${user.name}`;
}
