import { FormikErrors, FormikTouched } from "formik";

export interface FormStepProps {
    values: VolunteerFormValues;
    handleChange: {
        (e: React.ChangeEvent<any>): void;
        <T = string | React.ChangeEvent<any>>(
            field: T
        ): T extends React.ChangeEvent<any>
            ? void
            : (e: string | React.ChangeEvent<any>) => void;
    };
    errors: FormikErrors<VolunteerFormValues>;
    touched: FormikTouched<VolunteerFormValues>;
}
export type VolunteerFormValues = {
    fullName: string;
    dob: string;
    gender: string;
    email: string;
    phone: string;
    address: string;
    skills: string;
    twitter: string;
    linkedin: string;
    github: string;
};

export const defaultInitialValues: VolunteerFormValues = {
    fullName: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    skills: "",
    twitter: "",
    linkedin: "",
    github: "",
};

export const steps = [
    "Basic Details",
    "Contact Details",
    "Skills",
    "Social Links",
];
