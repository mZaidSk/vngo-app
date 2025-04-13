export enum Gender {
    Male = "Male",
    Female = "Female",
    Other = "Other",
}

export enum Status {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Banned = "BANNED",
}

export enum Role {
    Ngo = "NGO",
    Volunteer = "VOLUNTEER",
}

export type registerUserParams = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    dob: string;
    role: Role;
};
