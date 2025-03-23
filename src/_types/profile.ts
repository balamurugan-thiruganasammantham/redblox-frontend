export enum UserRoleEnum {
    CLIENT = 'client',
    ADMIN = 'admin'
}

export interface ProfileInfo {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    role: UserRoleEnum;
}