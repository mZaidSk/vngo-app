import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom"; // <-- for route detection
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BasicInformation from "./form-components/BasicInformation";
import ContactInformation from "./form-components/ContactInformation";
import AddressStep from "./form-components/AddressStep";
import SocialMediaLinks from "./form-components/SocialMediaLinks";
import BrandingMedia from "./form-components/BrandingMedia";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import {
    createNgoProfile,
    getNgoProfileById,
    updateNgoProfile,
} from "@/store/slice/NgoProfileSlice";
import { toast } from "sonner";

const steps = [
    "Basic Information",
    "Contact Information",
    "Address",
    "Social Media Links",
    "Branding & Media",
];

const stepComponents = [
    BasicInformation,
    ContactInformation,
    AddressStep,
    SocialMediaLinks,
    BrandingMedia,
];

const defaultInitialValues = {
    ngoName: "",
    mission: "",
    focusAreas: "",
    foundedYear: "",
    email: "",
    phone: "",
    website: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    twitter: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    logoUrl: "",
    bannerUrl: "",
    galleryUrls: [],
};

// const defaultInitialValues = {
//     ngoName: "Hope for All",
//     mission:
//         "Empowering underprivileged communities through education and healthcare.",
//     focusAreas: "Education, Healthcare, Environment",
//     foundedYear: "2012",
//     email: "contact@hopeforall.org",
//     phone: "+919876543210",
//     website: "https://hopeforall.org",
//     addressLine1: "123 NGO Street",
//     addressLine2: "Suite 5B",
//     city: "New Delhi",
//     state: "Delhi",
//     postalCode: "110001",
//     country: "India",
//     twitter: "https://twitter.com/hopeforall",
//     instagram: "https://instagram.com/hopeforall",
//     linkedin: "https://linkedin.com/company/hopeforall",
//     youtube: "https://youtube.com/@hopeforall",
//     logoUrl:
//         "https://images.pexels.com/photos/3541916/pexels-photo-3541916.jpeg?auto=compress&cs=tinysrgb&w=600",
//     bannerUrl:
//         "https://images.pexels.com/photos/10629415/pexels-photo-10629415.jpeg?auto=compress&cs=tinysrgb&w=600",
//     galleryUrls: [
//         "https://images.pexels.com/photos/6257043/pexels-photo-6257043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//         "https://images.pexels.com/photos/10031832/pexels-photo-10031832.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "https://images.pexels.com/photos/10629468/pexels-photo-10629468.jpeg?auto=compress&cs=tinysrgb&w=600",
//         "https://images.pexels.com/photos/10629415/pexels-photo-10629415.jpeg?auto=compress&cs=tinysrgb&w=600",
//     ],
// };

const ProfileForm = () => {
    const location = useLocation();
    const { isEditMode, profileId } = location.state || {};

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const ngoProfileSelector = useSelector(
        (state: RootState) => state.ngoProfile.profile
    );
    console.log(ngoProfileSelector);

    const [step, setStep] = useState(0);
    const [formValues, setFormValues] = useState(defaultInitialValues);
    const totalSteps = steps.length;
    const CurrentStep = stepComponents[step];

    const nextStep = () => setStep((s) => Math.min(s + 1, totalSteps - 1));
    const prevStep = () => setStep((s) => Math.max(s - 1, 0));

    const getUserProfile = () => {
        if (isEditMode) dispatch(getNgoProfileById(profileId));
    };

    useEffect(() => {
        if (profileId) {
            getUserProfile();
        }
    }, [isEditMode, profileId]);

    useEffect(() => {
        if (ngoProfileSelector?.data) {
            const mappedValues = {
                ngoName: ngoProfileSelector.data.organization_name || "",
                mission: ngoProfileSelector.data.mission || "",
                focusAreas: ngoProfileSelector.data.focus_areas || "",
                foundedYear:
                    ngoProfileSelector.data.founded_year?.toString() || "",
                email: ngoProfileSelector.data.email || "",
                phone: ngoProfileSelector.data.phone || "",
                website: ngoProfileSelector.data.website || "",
                addressLine1: ngoProfileSelector.data.address_line_1 || "",
                addressLine2: ngoProfileSelector.data.address_line_2 || "",
                city: ngoProfileSelector.data.city || "",
                state: ngoProfileSelector.data.state || "",
                postalCode: ngoProfileSelector.data.postal_code || "",
                country: ngoProfileSelector.data.country || "",
                twitter: ngoProfileSelector.data.twitter || "",
                instagram: ngoProfileSelector.data.instagram || "",
                linkedin: ngoProfileSelector.data.linkedin || "",
                youtube: ngoProfileSelector.data.youtube || "",
                logoUrl: ngoProfileSelector.data.logo_url || "",
                bannerUrl: ngoProfileSelector.data.banner_url || "",
                galleryUrls: ngoProfileSelector.data.gallery_urls || [],
            };

            setFormValues(mappedValues);
        }
    }, [ngoProfileSelector]);

    const handleSubmit = (values: typeof defaultInitialValues) => {
        const payload = {
            organization_name: values.ngoName,
            mission: values.mission,
            focus_areas: values.focusAreas,
            founded_year: values.foundedYear,
            email: values.email,
            phone: values.phone,
            website: values.website,
            address_line_1: values.addressLine1,
            address_line_2: values.addressLine2,
            city: values.city,
            state: values.state,
            postal_code: values.postalCode,
            country: values.country,
            twitter: values.twitter,
            instagram: values.instagram,
            linkedin: values.linkedin,
            youtube: values.youtube,
            logo_url: values.logoUrl,
            banner_url: values.bannerUrl,
            gallery_urls: values.galleryUrls,
        };

        if (isEditMode) {
            dispatch(updateNgoProfile({ id: profileId, payload })).then(
                (res: any) => {
                    toast(res?.payload?.message);
                    navigate("/ngo/profile");
                }
            );
        } else {
            dispatch(createNgoProfile(payload)).then((res: any) => {
                toast(res?.payload?.message);
                navigate("/ngo/profile");
            });
        }
    };

    return (
        <div className="max-w-6xl mx-auto">
            <div className="w-[70vw] py-10 px-4 md:px-6">
                <div className="flex flex-col md:flex-row gap-10">
                    {/* Stepper */}
                    <div className="md:w-1/4 w-full space-y-6">
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
                    <div className="flex-1">
                        <Formik
                            enableReinitialize
                            initialValues={formValues}
                            onSubmit={handleSubmit}
                        >
                            <Form>
                                <Card className="rounded-2xl border border-gray-200 shadow-sm">
                                    <CardContent className="space-y-6 p-8">
                                        <CurrentStep />
                                    </CardContent>
                                </Card>

                                {/* Navigation */}
                                <div className="flex justify-between mt-6">
                                    <Button
                                        variant="outline"
                                        onClick={prevStep}
                                        disabled={step === 0}
                                        type="button"
                                        className="rounded-full"
                                    >
                                        Back
                                    </Button>
                                    {step === totalSteps - 1 ? (
                                        <Button
                                            type="submit"
                                            className="rounded-full"
                                        >
                                            {isEditMode
                                                ? "Update Profile"
                                                : "Submit"}
                                        </Button>
                                    ) : (
                                        <Button
                                            type="button"
                                            onClick={nextStep}
                                            className="rounded-full"
                                        >
                                            Next Step
                                        </Button>
                                    )}
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileForm;
