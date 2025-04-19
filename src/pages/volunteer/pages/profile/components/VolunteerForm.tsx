import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";

import { BasicDetails } from "./form-component/BasicDetails";
import { ContactDetails } from "./form-component/ContactDetails";
import { SkillsCertificates } from "./form-component/SkillsCertificates";
import { SocialLinks } from "./form-component/SocialLinks";
import { Sidebar } from "./form-component/Sidebar";
import {
    FormStepProps,
    steps,
    VolunteerFormValues,
} from "./form-component/types";

import {
    getVolunteerProfileByIdApi,
    createVolunteerProfileApi,
    updateVolunteerProfileApi,
} from "@/services/VolunteerProfileService";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getVolunteerProfileById } from "@/store/slice/VolunteerProfileSlice";

const stepComponents: React.ComponentType<FormStepProps>[] = [
    BasicDetails,
    ContactDetails,
    SkillsCertificates,
    SocialLinks,
];

const validationSchemas = [
    Yup.object({
        fullName: Yup.string().required("Full name is required"),
        dob: Yup.string().required("Date of birth is required"),
        gender: Yup.string().required("Gender is required"),
    }),
    Yup.object({
        email: Yup.string().email("Invalid email").required("Required"),
        phone: Yup.string().required("Required"),
        address: Yup.string().required("Address is required"),
    }),
    Yup.object({
        skills: Yup.string().required("Enter at least one skill"),
    }),
    Yup.object({
        twitter: Yup.string().url("Invalid URL").nullable(),
        linkedin: Yup.string().url("Invalid URL").nullable(),
        github: Yup.string().url("Invalid URL").nullable(),
    }),
];

const VolunteerForm = () => {
    const { id } = useParams<{ id?: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const authUser = useSelector((state: RootState) => state.auth.user);

    const defaultInitialValues: VolunteerFormValues = {
        fullName: authUser?.data?.name,
        dob: authUser?.data?.dob,
        gender: "",
        email: authUser?.data?.email,
        phone: "",
        address: "",
        skills: "",
        twitter: "",
        linkedin: "",
        github: "",
    };

    const [step, setStep] = useState(0);
    const [initialValues, setInitialValues] =
        useState<VolunteerFormValues>(defaultInitialValues);
    const [loading, setLoading] = useState<boolean>(!!id); // if `id` is present, start with loading

    const totalSteps = steps.length;
    const CurrentStep = stepComponents[step];
    const isLastStep = step === totalSteps - 1;
    const isFirstStep = step === 0;

    useEffect(() => {
        if (id) {
            dispatch(getVolunteerProfileById(id))
                .then((res: any) => {
                    const profile = res?.payload?.data;
                    console.log(profile);

                    setInitialValues({
                        fullName: profile.fullName || "",
                        dob: profile.dob || "",
                        gender: profile.gender || "",
                        email: profile.email || "",
                        phone: profile.phone || "",
                        address: profile.address || "",
                        skills: profile.skills || "",
                        twitter: profile.twitter || "",
                        linkedin: profile.linkedin || "",
                        github: profile.github || "",
                    });

                    setLoading(false);
                })
                .catch((err: any) => {
                    toast.error("Failed to load profile");
                    setLoading(false);
                });
        }
    }, [id]);

    const nextStep = () => setStep((s) => Math.min(s + 1, totalSteps - 1));
    const prevStep = () => setStep((s) => Math.max(s - 1, 0));

    const handleSubmit = async (values: VolunteerFormValues) => {
        try {
            if (isLastStep) {
                if (id) {
                    await updateVolunteerProfileApi(id, values);
                    toast.success("Volunteer profile updated successfully!");
                } else {
                    await createVolunteerProfileApi({
                        ...values,
                        userId: authUser?.userId,
                    });
                    toast.success("Volunteer profile created successfully!");
                }
            } else {
                nextStep();
            }
        } catch (error) {
            toast.error("Submission failed. Please try again.");
        }
    };

    if (loading) {
        return <div className="text-center py-10">Loading...</div>;
    }

    return (
        <div className="bg-gray-100 py-10 px-4 min-h-screen">
            <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10">
                <div className="flex flex-col md:flex-row gap-6 h-full min-h-[70vh]">
                    <Sidebar currentStep={step} setStep={setStep} />

                    <div className="flex-1 flex flex-col">
                        <Formik
                            enableReinitialize
                            initialValues={initialValues}
                            validationSchema={validationSchemas[step]}
                            onSubmit={handleSubmit}
                        >
                            {({ values, handleChange, errors, touched }) => (
                                <Form className="flex flex-col h-full">
                                    <div className="flex-1 overflow-y-auto pr-2">
                                        <Card className="rounded-2xl shadow-sm h-full flex flex-col pb-0 w-full">
                                            <CardContent className="space-y-6 p-6 md:p-8 flex-1">
                                                <CurrentStep
                                                    values={values}
                                                    handleChange={handleChange}
                                                    errors={errors}
                                                    touched={touched}
                                                />
                                            </CardContent>

                                            <CardFooter className="sticky bottom-0 left-0 bg-white/90 backdrop-blur-md border-t py-4 px-4 flex justify-between items-center shadow-sm rounded-b-2xl z-10">
                                                <Button
                                                    variant="outline"
                                                    onClick={prevStep}
                                                    disabled={isFirstStep}
                                                    type="button"
                                                >
                                                    Back
                                                </Button>
                                                <Button type="submit">
                                                    {isLastStep
                                                        ? id
                                                            ? "Update"
                                                            : "Submit"
                                                        : "Next Step"}
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerForm;
