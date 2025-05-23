import type { User, UserDTO } from "../types/user";
import type { UserRepo } from "./repo";

const API_URL = "/api/users";

export class ApiUserRepo implements UserRepo {
    getUsers = async (): Promise<User[]> => {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
    };

    getUserById = async (id: string): Promise<User> => {
        const res = await fetch(`${API_URL}/${id}`);
        if (!res.ok) throw new Error("User not found");
        return res.json();
    };

    addUser = async (user: UserDTO): Promise<User> => {
        const res = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        });
        if (!res.ok) throw new Error("Failed to add user");
        return res.json();
    };

    updateUser = async (id: User["id"], user: Partial<UserDTO>): Promise<User> => {
        const res = await fetch(`${API_URL}/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        });
        if (!res.ok) throw new Error("Failed to update user");
        return res.json();
    };

    deleteUser = async (id: User["id"]): Promise<void> => {
        const res = await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
        });
        if (!res.ok) throw new Error("Failed to delete user");
    };
}