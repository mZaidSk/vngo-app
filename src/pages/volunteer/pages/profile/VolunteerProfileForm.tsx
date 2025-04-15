import React, { useState } from "react";
import { Formik, Form } from "formik";
import { FormValues } from "./data/FormValues";
import Step1 from "./ProfileFormComponent/Step1";
import Step2Education from "./ProfileFormComponent/Step2";
import Step3 from "./ProfileFormComponent/Step3";
import Step4 from "./ProfileFormComponent/Step4";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const steps = ["Personal Info", "Education", "Skills", "Address"];
const stepComponents = [Step1, Step2Education, Step3, Step4];

const defaultInitialValues: FormValues = {
  profileImage: undefined,
  firstName: "",
  lastName: "",
  dob: "",
  gender: "",
  phone: "",
  email: "",
  education: [
    {
      qualification: "",
      fieldOfStudy: "",
      institution: "",
      graduationYear: "",
      gpa: "",
    },
  ],
  skills: [],
  customSkill: "",
  interests: [],
  experience: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  country: "",
  addressType: "",
};
const calculateAge = (dob: string) => {
  const birthDate = new Date(dob);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth();
  if (
    month < birthDate.getMonth() ||
    (month === birthDate.getMonth() && today.getDate() < birthDate.getDate())
  ) {
    return age - 1; // If birthday hasn't occurred yet this year, subtract one year
  }
  return age;
};
const validationSchemas = [
  Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    dob: Yup.string()
      .required("Date of birth is required")
      .test("age", "You must be at least 18 years old", (value) => {
        if (value) {
          const age = calculateAge(value);
          return age >= 18; // Ensure the age is 18 or older
        }
        return false;
      }),
    gender: Yup.string().required("Gender is required"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  }),
  Yup.object({
    education: Yup.array()
      .of(
        Yup.object().shape({
          qualification: Yup.string().required("Qualification is required"),
          fieldOfStudy: Yup.string().required("Field of study is required"),
          institution: Yup.string().required("Institution name is required"),
          graduationYear: Yup.string().required("Graduation year is required"),
          gpa: Yup.string().required("GPA is required"),
          // gpa: Yup.number()
          //   .min(0, "GPA must be greater than or equal to 0")
          //   .max(10, "GPA must be less than or equal to 10"),
        })
      )
      .required("Education is required"),
  }),
  Yup.object({
    skills: Yup.array().min(1, "At least one skill is required"),
    interests: Yup.array().min(1, "At least one interest is required"),
    // experience: Yup.string().required("Experience is required"),
  }),
  Yup.object({
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zip: Yup.string().required("ZIP is required"),
    country: Yup.string().required("Country is required"),
    addressType: Yup.string().required("Address type is required"),
  }),
];

const VProfileFormPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const [open, setOpen] = useState(false);

  const totalSteps = steps.length;
  const CurrentStep = stepComponents[step];

  const handleNext = () =>
    setStep((prev) => Math.min(prev + 1, totalSteps - 1));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 0));

  const handleSubmit = (values: FormValues) => {
    if (step === totalSteps - 1) {
      console.log("Final submit:", values);
      setOpen(true); // Show success dialog
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handleDialogClose = () => {
    setOpen(false);
    navigate("/volunteer/profile");
  };
  return (
    <div className="max-w-full px-4 md:px-10 py-10 bg-red-300">
      <div className="flex flex-col lg:flex-row gap-10 bg-red-500 rounded-xl p-6 lg:p-10 shadow-lg">
        {/* Stepper */}
        <div className="lg:w-1/4 w-full space-y-6">
          {steps.map((label, index) => (
            <div
              key={index}
              onClick={() => setStep(index)}
              className={`flex items-center gap-3 cursor-pointer transition ${
                step === index
                  ? "font-semibold text-black"
                  : "text-muted-foreground hover:text-black"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 ${
                  step === index
                    ? "bg-black text-white border-black"
                    : "bg-white border-gray-300 text-gray-500"
                }`}
              >
                {index + 1}
              </div>
              <span className="text-sm">{label}</span>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-[600px]">
            <Formik
              initialValues={defaultInitialValues}
              validationSchema={validationSchemas[step]}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <Form>
                  <Card className="rounded-2xl border border-gray-200 shadow-sm">
                    <CardContent className="space-y-6 p-6 md:p-8">
                      <CurrentStep
                        formik={formik}
                        onNext={handleNext}
                        onBack={handleBack}
                      />
                    </CardContent>
                  </Card>

                  {/* Navigation */}
                  <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
                    <Button
                      variant="outline"
                      onClick={handleBack}
                      disabled={step === 0}
                      type="button"
                      className="rounded-full w-full sm:w-auto"
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      className="rounded-full w-full sm:w-auto"
                    >
                      {step === totalSteps - 1 ? "Submit" : "Next Step"}
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
            <Dialog open={open} onOpenChange={handleDialogClose}>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Profile Created</DialogTitle>
                  <DialogDescription>
                    Your volunteer profile was successfully created. Redirecting
                    to your profile...
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VProfileFormPage;
