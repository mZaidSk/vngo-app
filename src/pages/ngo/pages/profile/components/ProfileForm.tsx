import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Upload } from "lucide-react"; // optional for icons
import { cn } from "@/lib/utils"; // if you use classnames utility

const steps = [
    "Basic Information",
    "Contact Information",
    "Social Media Links",
    "Branding & Media",
];

const ProfileForm = () => {
    const [step, setStep] = useState(0);
    const totalSteps = steps.length;

    const nextStep = () =>
        setStep((prev) => Math.min(prev + 1, totalSteps - 1));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

    return (
        <div className="max-w-6xl mx-auto ">
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
                        <Card className="rounded-2xl border border-gray-200 shadow-sm">
                            <CardContent className="space-y-6 p-8">
                                {step === 0 && (
                                    <>
                                        <div>
                                            <Label>NGO Name</Label>
                                            <Input placeholder="Enter NGO name" />
                                        </div>
                                        <div>
                                            <Label>Mission Statement</Label>
                                            <Textarea placeholder="Enter your organization’s mission" />
                                        </div>
                                        <div>
                                            <Label>Focus Areas / Causes</Label>
                                            <Input placeholder="E.g. Education, Health, Environment" />
                                        </div>
                                        <div>
                                            <Label>Founded Year</Label>
                                            <Input
                                                type="number"
                                                placeholder="YYYY"
                                            />
                                        </div>
                                    </>
                                )}

                                {step === 1 && (
                                    <>
                                        <div>
                                            <Label>Email</Label>
                                            <Input
                                                type="email"
                                                placeholder="example@ngo.org"
                                            />
                                        </div>
                                        <div>
                                            <Label>Phone</Label>
                                            <Input placeholder="+91-9876543210" />
                                        </div>
                                        <div>
                                            <Label>Website</Label>
                                            <Input placeholder="https://ngo.org" />
                                        </div>
                                    </>
                                )}

                                {step === 2 && (
                                    <>
                                        <div>
                                            <Label>Twitter</Label>
                                            <Input placeholder="https://twitter.com/yourngo" />
                                        </div>
                                        <div>
                                            <Label>Instagram</Label>
                                            <Input placeholder="https://instagram.com/yourngo" />
                                        </div>
                                        <div>
                                            <Label>LinkedIn</Label>
                                            <Input placeholder="https://linkedin.com/company/yourngo" />
                                        </div>
                                        <div>
                                            <Label>YouTube (optional)</Label>
                                            <Input placeholder="https://youtube.com/@yourngo" />
                                        </div>
                                    </>
                                )}

                                {step === 3 && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <Label>Logo Upload</Label>
                                            <Input
                                                type="file"
                                                accept="image/*"
                                            />
                                        </div>
                                        <div>
                                            <Label>Cover Banner Upload</Label>
                                            <Input
                                                type="file"
                                                accept="image/*"
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <Label>
                                                Image Gallery (optional)
                                            </Label>
                                            <Input
                                                type="file"
                                                accept="image/*"
                                                multiple
                                            />
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-6">
                            <Button
                                variant="outline"
                                onClick={prevStep}
                                disabled={step === 0}
                                className="rounded-full"
                            >
                                Back
                            </Button>
                            {step === totalSteps - 1 ? (
                                <Button type="submit" className="rounded-full">
                                    Submit
                                </Button>
                            ) : (
                                <Button
                                    onClick={nextStep}
                                    className="rounded-full"
                                >
                                    Next Step
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileForm;
