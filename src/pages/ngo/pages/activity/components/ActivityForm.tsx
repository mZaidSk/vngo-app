"use client";

import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Step Components
import { BasicActivityInfo } from "./form-components/BasicActivityInfo";
import AboutActivity from "./form-components/AboutActivity";
import { ScheduleStep } from "./form-components/ScheduleStep";
import { VenueStep } from "./form-components/VenueStep";
import { GalleryStep } from "./form-components/GalleryStep";
import { VolunteerRequirementsStep } from "./form-components/VolunteerRequirementsStep";
import { RulesGuidelinesStep } from "./form-components/RulesGuidelinesStep";

const steps = [
    "Basic Info",
    "About The Activity",
    "Schedule",
    "Location",
    "Requirements",
    "Gallery & Media",
    "Rules & Guidelines",
];

const initialValues = {
    detailedDescription: "",
    goalsHighlights: "",
    pastEvents: "",
    title: "",
    description: "",
    status: "Upcoming",
    organizationName: "",
    contactEmail: "",
    phoneNumber: "",
    website: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    timezone: "",
    duration: "",
    venueName: "",
    fullAddress: "",
    googleMapsUrl: "",
    image1: null,
    image2: null,
    image3: null,
    totalSpots: "",
    spotsLeft: "",
    minAge: "",
    skills: [],
    whatToBring: "",
    safetyMeasures: "",
    weatherAdvisory: "",
    bannerImage: null,
};

const validationSchema = Yup.object({});

const ActivityForm = () => {
    const [step, setStep] = useState(0);
    const isLastStep = step === steps.length - 1;

    const nextStep = () => setStep((s) => Math.min(s + 1, steps.length - 1));
    const prevStep = () => setStep((s) => Math.max(s - 1, 0));

    const handleSubmit = (values: typeof initialValues) => {
        if (isLastStep) {
            console.log("Submitting:", values);
            // TODO: Send values to backend or trigger action
        } else {
            nextStep();
        }
    };

    const renderStepComponent = (step: number, formikProps: any) => {
        switch (step) {
            case 0:
                return <BasicActivityInfo {...formikProps} />;
            case 1:
                return <AboutActivity {...formikProps} />;
            case 2:
                return <ScheduleStep {...formikProps} />;
            case 3:
                return <VenueStep {...formikProps} />;
            case 4:
                return <VolunteerRequirementsStep {...formikProps} />;
            case 5:
                return <GalleryStep {...formikProps} />;
            case 6:
                return <RulesGuidelinesStep {...formikProps} />;
            default:
                return null;
        }
    };

    return (
        <div className="p-6 mx-14 flex gap-6">
            {/* Stepper */}
            <aside className="w-1/5 space-y-6">
                {steps.map((label, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => setStep(index)}
                        className="w-full text-left flex items-center gap-2 focus:outline-none cursor-pointer"
                    >
                        <div
                            className={cn(
                                "rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium border",
                                step === index
                                    ? "bg-black text-white"
                                    : "bg-muted text-black"
                            )}
                        >
                            {index + 1}
                        </div>
                        <span
                            className={cn(
                                "text-sm",
                                step === index
                                    ? "font-semibold"
                                    : "text-muted-foreground"
                            )}
                        >
                            {label}
                        </span>
                    </button>
                ))}
            </aside>

            {/* Form Section */}
            <main className="flex-1">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {(formikProps) => (
                        <Form>
                            <Card className="h-[640px] flex flex-col">
                                {" "}
                                {/* Set your desired height */}
                                <CardContent className="space-y-4 pt-6 overflow-y-auto flex-1">
                                    {renderStepComponent(step, formikProps)}
                                </CardContent>
                                <div className="flex justify-between p-4 border-t mt-auto">
                                    <Button
                                        type="button"
                                        onClick={prevStep}
                                        disabled={step === 0}
                                        variant="outline"
                                    >
                                        Back
                                    </Button>
                                    <Button type="submit">
                                        {isLastStep ? "Submit" : "Next Step"}
                                    </Button>
                                </div>
                            </Card>
                        </Form>
                    )}
                </Formik>
            </main>
        </div>
    );
};

export default ActivityForm;
