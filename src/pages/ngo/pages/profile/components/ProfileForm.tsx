import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const steps = ["NGO Info", "Area of Operation", "Address"];

const ProfileForm = () => {
    const [step, setStep] = useState(0);
    const totalSteps = steps.length;

    const nextStep = () =>
        setStep((prev) => Math.min(prev + 1, totalSteps - 1));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

    return (
        <div className="max-w-6xl mx-auto py-10 px-4 md:px-5">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Stepper */}
                <div className="w-full md:w-1/5">
                    <div className="space-y-6">
                        {steps.map((label, index) => (
                            <div
                                key={index}
                                onClick={() => setStep(index)}
                                className={`flex items-start gap-3 cursor-pointer ${
                                    step === index
                                        ? "font-semibold text-black"
                                        : "text-gray-500"
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
                                <div className="pt-1">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Form Card */}
                <div className="flex-1">
                    <Card className="shadow-md border-gray-200">
                        <CardContent className="space-y-4 p-6">
                            {step === 0 && (
                                <>
                                    <div>
                                        <Label className="pb-2">NGO Name</Label>
                                        <Input placeholder="Enter NGO name" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <Label className="pb-2">
                                                Registration Number
                                            </Label>
                                            <Input placeholder="Enter registration number" />
                                        </div>
                                        <div>
                                            <Label className="pb-2">
                                                Established Year
                                            </Label>
                                            <Input
                                                type="number"
                                                placeholder="YYYY"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <Label className="pb-2">
                                            Type of NGO
                                        </Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select NGO type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="charity">
                                                    Charity
                                                </SelectItem>
                                                <SelectItem value="nonprofit">
                                                    Non-Profit
                                                </SelectItem>
                                                <SelectItem value="trust">
                                                    Trust
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <Label className="pb-2">Website</Label>
                                        <Input
                                            type="url"
                                            placeholder="https://"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <Label className="pb-2">
                                                Contact Person Name
                                            </Label>
                                            <Input placeholder="Enter contact person name" />
                                        </div>
                                        <div>
                                            <Label className="pb-2">
                                                Contact Person Phone
                                            </Label>
                                            <Input placeholder="Enter phone number" />
                                        </div>
                                    </div>
                                    <div>
                                        <Label className="pb-2">
                                            NGO Mission Statement
                                        </Label>
                                        <Textarea placeholder="Enter your organization’s mission statement" />
                                    </div>
                                </>
                            )}

                            {step === 1 && (
                                <>
                                    <Label className="pb-2">
                                        Areas of Operation / Causes Supported
                                    </Label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {[
                                            "Education",
                                            "Healthcare",
                                            "Environment",
                                            "Poverty Alleviation",
                                            "Women Empowerment",
                                            "Child Welfare",
                                        ].map((cause) => (
                                            <div
                                                key={cause}
                                                className="flex items-center space-x-2"
                                            >
                                                <Checkbox id={cause} />
                                                <Label
                                                    htmlFor={cause}
                                                    className="pb-2"
                                                >
                                                    {cause}
                                                </Label>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}

                            {step === 2 && (
                                <>
                                    <div>
                                        <Label className="pb-2">
                                            Address Line 1
                                        </Label>
                                        <Input placeholder="Street, Building, etc." />
                                    </div>
                                    <div>
                                        <Label className="pb-2">
                                            Address Line 2
                                        </Label>
                                        <Input placeholder="Area, Landmark, etc." />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <Label className="pb-2">City</Label>
                                            <Input placeholder="Enter city" />
                                        </div>
                                        <div>
                                            <Label className="pb-2">
                                                State
                                            </Label>
                                            <Input placeholder="Enter state" />
                                        </div>
                                    </div>
                                    <div>
                                        <Label className="pb-2">
                                            Postal Code
                                        </Label>
                                        <Input placeholder="Enter postal code" />
                                    </div>
                                </>
                            )}
                        </CardContent>
                    </Card>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-6">
                        <Button
                            variant="outline"
                            onClick={prevStep}
                            disabled={step === 0}
                        >
                            Back
                        </Button>
                        {step === totalSteps - 1 ? (
                            <Button type="submit">Submit</Button>
                        ) : (
                            <Button onClick={nextStep}>Next Step</Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileForm;
