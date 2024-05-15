export interface UserBasicModel {
    domain?: string;
    ein?: string;
    email?: string;
    eyeColor?: string;
    firstName: string;
    gender: string;
    hair?: {
        color?: string;
        type?: string;
    };
    height?: number;
    id: number;
    image?: string;
    ip?: string;
    lastName?: string;
    macAddress?: string;
    maidenName?: string;
    password?: string;
    phone?: string;
    ssn?: string;
    university?: string;
    userAgent?: string;
    username?: string;
    weight?: number;
}