export interface IUserDTO {
    id?: number;
    name: string;
    email: string;
    password: string;
    is_admin: boolean;
    created_at?: Date;
    updated_at?: Date; 
}