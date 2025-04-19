"use client";

import { useEffect, useState } from "react";
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

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { useNavigate, useParams } from "react-router-dom";
import {
    createActivity,
    getActivityById,
    updateActivity,
} from "@/store/slice/ActivitySlice";
import { toast } from "sonner";

const steps = [
    "Basic Info",
    "About The Activity",
    "Schedule",
    "Location",
    "Requirements",
    "Gallery & Media",
    "Rules & Guidelines",
];

const validationSchema = Yup.object({});

const defaultInitialValues = {
    detailedDescription:
        "Join us for a community clean-up event where volunteers will help beautify the local park.",
    goalsHighlights:
        "Promote environmental awareness, foster community bonding, and maintain a clean, safe environment.",
    pastEvents:
        "Last year, over 100 volunteers participated and collected 500 lbs of trash.",
    title: "Community Park Clean-Up Day",
    description:
        "A volunteer-driven effort to clean and restore our neighborhood park.",
    status: "Upcoming",
    organizationName: "Green Future Foundation",
    contactEmail: "contact@greenfuture.org",
    phoneNumber: "+1 (555) 123-4567",
    website: "https://www.greenfuture.org",
    startDate: "2025-05-20",
    endDate: "2025-05-20",
    startTime: "09:00",
    endTime: "14:00",
    timezone: "America/New_York",
    duration: "5 hours",
    venueName: "Central City Park",
    fullAddress: "123 Park Avenue, Springfield, NY 10001, USA",
    googleMapsUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1885.6273414435211!2d72.89801449839479!3d19.052536799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c61d35d338a1%3A0xc67ebba537fef6c1!2sDiamond%20Garden!5e0!3m2!1sen!2sin!4v1744710094598!5m2!1sen!2sin",
    image1: "https://images.pexels.com/photos/713297/pexels-photo-713297.jpeg?auto=compress&cs=tinysrgb&w=600",
    image2: "https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=600",
    image3: "https://images.pexels.com/photos/1528361/pexels-photo-1528361.jpeg?auto=compress&cs=tinysrgb&w=600",
    bannerImage:
        "https://images.pexels.com/photos/236940/pexels-photo-236940.jpeg?auto=compress&cs=tinysrgb&w=600",
    totalSpots: "150",
    spotsLeft: "87",
    minAge: "16",
    skills: ["Teamwork", "Environmental Awareness", "Litter Collection"],
    whatToBring: "Reusable water bottle, gloves, sunblock, and a hat.",
    safetyMeasures:
        "First-aid kits on site, safety briefing before event starts.",
    weatherAdvisory:
        "Event may be postponed in case of heavy rain. Please check updates on our website.",
};

// const defaultInitialValues = {
//     detailedDescription: "",
//     goalsHighlights: "",
//     pastEvents: "",
//     title: "",
//     description: "",
//     status: "Upcoming",
//     organizationName: "",
//     contactEmail: "",
//     phoneNumber: "",
//     website: "",
//     startDate: "",
//     endDate: "",
//     startTime: "",
//     endTime: "",
//     timezone: "",
//     duration: "",
//     venueName: "",
//     fullAddress: "",
//     googleMapsUrl: "",
//     image1: null,
//     image2: null,
//     image3: null,
//     totalSpots: "",
//     spotsLeft: "",
//     minAge: "",
//     skills: [],
//     whatToBring: "",
//     safetyMeasures: "",
//     weatherAdvisory: "",
//     bannerImage: null,
// };
const ActivityForm = () => {
    const { id } = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const activitySelector = useSelector(
        (state: RootState) => state.activity.activity
    );

    const [step, setStep] = useState(0);
    const [initialValues, setInitialValues] = useState(defaultInitialValues);

    const isLastStep = step === steps.length - 1;
    const nextStep = () => setStep((s) => Math.min(s + 1, steps.length - 1));
    const prevStep = () => setStep((s) => Math.max(s - 1, 0));

    const getActivity = async () => {
        if (id) {
            await dispatch(getActivityById(id));
        }
    };

    useEffect(() => {
        if (id) getActivity();
    }, [id]);

    useEffect(() => {
        if (activitySelector && id) {
            setInitialValues({
                title: activitySelector?.data?.title || "",
                description: activitySelector?.data?.description || "",
                status: activitySelector?.data?.status || "Upcoming",
                detailedDescription:
                    activitySelector?.data?.detailedDescription || "",
                goalsHighlights: activitySelector?.data?.goalsHighlights || "",
                pastEvents: activitySelector?.data?.pastEvents || "",
                startDate: activitySelector?.data?.startDate || "",
                endDate: activitySelector?.data?.endDate || "",
                startTime: activitySelector?.data?.startTime || "",
                endTime: activitySelector?.data?.endTime || "",
                timezone: activitySelector?.data?.timezone || "",
                duration: activitySelector?.data?.duration || "",
                venueName: activitySelector?.data?.venueName || "",
                fullAddress: activitySelector?.data?.fullAddress || "",
                googleMapsUrl: activitySelector?.data?.googleMapsUrl || "",
                image1: activitySelector?.data?.image1 || null,
                image2: activitySelector?.data?.image2 || null,
                image3: activitySelector?.data?.image3 || null,
                bannerImage: activitySelector?.data?.bannerImage || null,
                totalSpots: activitySelector?.data?.totalSpots || "",
                spotsLeft: activitySelector?.data?.spotsLeft || "",
                minAge: activitySelector?.data?.minAge || "",
                skills: activitySelector?.data?.skills || [],
                whatToBring: activitySelector?.data?.whatToBring || "",
                safetyMeasures: activitySelector?.data?.safetyMeasures || "",
                weatherAdvisory: activitySelector?.data?.weatherAdvisory || "",
                organizationName:
                    activitySelector?.data?.ngoProfile?.organization_name || "",
                contactEmail: activitySelector?.data?.ngoProfile?.email || "",
                phoneNumber: activitySelector?.data?.ngoProfile?.phone || "",
                website: activitySelector?.data?.ngoProfile?.website || "",
            });
        }
    }, [activitySelector]);

    const handleSubmit = (values: typeof defaultInitialValues) => {
        if (isLastStep) {
            console.log("Submitting:", values);

            if (id) {
                dispatch(updateActivity({ id, payload: values })).then(
                    (res: any) => {
                        toast("Activity Updated Successfully");
                        navigate(`/ngo/activities/${id}`);
                    }
                );
            } else {
                dispatch(createActivity(values)).then((res: any) => {
                    toast("Activity Created Successfully");
                    navigate(`/ngo/activities/${res?.payload?.data?.id}`);
                });
            }
            // TODO: handle final submission
        } else {
            nextStep();
        }
    };

    const renderStepComponent = (step: number) => {
        switch (step) {
            case 0:
                return <BasicActivityInfo />;
            case 1:
                return <AboutActivity />;
            case 2:
                return <ScheduleStep />;
            case 3:
                return <VenueStep />;
            case 4:
                return <VolunteerRequirementsStep />;
            case 5:
                return <GalleryStep />;
            case 6:
                return <RulesGuidelinesStep />;
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

            {/* Form */}
            <main className="flex-1">
                <Formik
                    enableReinitialize
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {() => (
                        <Form>
                            <Card className="h-[640px] flex flex-col">
                                <CardContent className="space-y-4 pt-6 overflow-y-auto flex-1">
                                    {renderStepComponent(step)}
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
