export interface User {
    email: string;
    password: string;
    gender: string;
    birthDate: string;
    department: string;
}

export enum Department {
    IT = 'IT',
    BF = 'BF',
    BP = 'BP',
    BA = 'BA'
}

export enum Gender {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
}