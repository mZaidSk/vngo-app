import { UploadCloudIcon } from "lucide-react";
import { useFormik } from "formik";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

import ActivityPreview from "./ActivityPreview";
import { useState } from "react";
import { useParams } from "react-router-dom";

const skillOptions = [
    "Communication",
    "Leadership",
    "Technical",
    "Physical Labor",
    "Teaching",
];

const dummyVolunteers = [
    { id: "1", name: "Alice Johnson", email: "alice@example.com" },
    { id: "2", name: "Bob Smith", email: "bob@example.com" },
    { id: "3", name: "Charlie Brown", email: "charlie@example.com" },
    { id: "3", name: "Charlie Brown", email: "charlie@example.com" },
    { id: "3", name: "Charlie Brown", email: "charlie@example.com" },
    { id: "3", name: "Charlie Brown", email: "charlie@example.com" },
    { id: "3", name: "Charlie Brown", email: "charlie@example.com" },
    { id: "3", name: "Charlie Brown", email: "charlie@example.com" },
];

const AddEditActivity = () => {
    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            type: "",
            location: "",
            startDateTime: "",
            endDateTime: "",
            maxParticipants: "",
            registrationDeadline: "",
            skills: [] as string[],
            coverImage: null as File | null,
            isRecurring: false,
            visibility: "Public",
        },
        onSubmit: (values) => {
            console.log("Submitted values:", values);
        },
    });

    const [registeredVolunteers, setRegisteredVolunteers] =
        useState(dummyVolunteers);

    const { id } = useParams<{ id: string }>();

    const handleSkillToggle = (skill: string) => {
        const currentSkills = formik.values.skills;
        const newSkills = currentSkills.includes(skill)
            ? currentSkills.filter((s) => s !== skill)
            : [...currentSkills, skill];
        formik.setFieldValue("skills", newSkills);
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            formik.setFieldValue("coverImage", e.target.files[0]);
        }
    };

    return (
        <form
            onSubmit={formik.handleSubmit}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6"
        >
            {/* Left Section */}
            <div className="md:col-span-2 space-y-4 shadow-xl rounded-2xl p-6 border ">
                {/* Title */}
                <div className="space-y-2">
                    <Label htmlFor="title">Activity Title *</Label>
                    <Input
                        id="title"
                        name="title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        placeholder="Enter activity title"
                    />
                </div>

                {/* Description */}
                <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                        id="description"
                        name="description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        placeholder="Describe your activity"
                    />
                </div>

                {/* Type and Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label>Activity Type *</Label>
                        <Select
                            value={formik.values.type}
                            onValueChange={(val) =>
                                formik.setFieldValue("type", val)
                            }
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                                {[
                                    "Volunteer Work",
                                    "Workshop",
                                    "Training",
                                    "Event",
                                    "Other",
                                ].map((option) => (
                                    <SelectItem key={option} value={option}>
                                        {option}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                            id="location"
                            name="location"
                            value={formik.values.location}
                            onChange={formik.handleChange}
                            placeholder="Enter location"
                        />
                    </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="startDateTime">
                            Start Date & Time *
                        </Label>
                        <Input
                            id="startDateTime"
                            name="startDateTime"
                            type="datetime-local"
                            value={formik.values.startDateTime}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="endDateTime">End Date & Time *</Label>
                        <Input
                            id="endDateTime"
                            name="endDateTime"
                            type="datetime-local"
                            value={formik.values.endDateTime}
                            onChange={formik.handleChange}
                        />
                    </div>
                </div>

                {/* Max Participants & Deadline */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="maxParticipants">
                            Max Participants
                        </Label>
                        <Input
                            id="maxParticipants"
                            name="maxParticipants"
                            type="number"
                            value={formik.values.maxParticipants}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="registrationDeadline">
                            Registration Deadline
                        </Label>
                        <Input
                            id="registrationDeadline"
                            name="registrationDeadline"
                            type="date"
                            value={formik.values.registrationDeadline}
                            onChange={formik.handleChange}
                        />
                    </div>
                </div>

                {/* Skills Required */}
                <div className="space-y-2">
                    <Label>Skills Required</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {skillOptions.map((skill) => (
                            <div
                                key={skill}
                                className="flex items-center space-x-2"
                            >
                                <Checkbox
                                    id={skill}
                                    checked={formik.values.skills.includes(
                                        skill
                                    )}
                                    onCheckedChange={() =>
                                        handleSkillToggle(skill)
                                    }
                                />
                                <Label htmlFor={skill}>{skill}</Label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cover Image */}
                <div className="space-y-2">
                    <Label>Cover Image</Label>
                    <div className="border-2 border-dashed rounded-lg p-4 flex justify-center items-center cursor-pointer">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <UploadCloudIcon className="w-6 h-6" />
                            <span>
                                {formik.values.coverImage
                                    ? formik.values.coverImage.name
                                    : "Click to upload"}
                            </span>
                            <input
                                type="file"
                                onChange={handleImageUpload}
                                className="hidden"
                            />
                        </label>
                    </div>
                </div>

                {/* Recurring & Visibility */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Switch
                            checked={formik.values.isRecurring}
                            onCheckedChange={(val: boolean) =>
                                formik.setFieldValue("isRecurring", val)
                            }
                        />
                        <Label>Recurring Activity?</Label>
                    </div>
                    <div className="space-y-2">
                        <Label>Visibility</Label>
                        <Select
                            value={formik.values.visibility}
                            onValueChange={(val) =>
                                formik.setFieldValue("visibility", val)
                            }
                        >
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {["Public", "Private", "Invite Only"].map(
                                    (option) => (
                                        <SelectItem key={option} value={option}>
                                            {option}
                                        </SelectItem>
                                    )
                                )}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Submit Buttons */}
                <div className="flex gap-4">
                    <Button type="submit">Create Activity</Button>
                    <Button variant="outline" type="button">
                        Cancel
                    </Button>
                </div>
            </div>

            {/* Right Section (Preview) */}
            <div className="md:col-span-1 space-y-6">
                <ActivityPreview values={formik.values} />

                {/* Registered Volunteers List */}
                {id && (
                    <div className="border rounded-lg p-4 shadow-sm">
                        <h3 className="text-lg font-semibold mb-2">
                            Registered Volunteers
                        </h3>
                        {registeredVolunteers.length > 0 ? (
                            <ul className="space-y-2">
                                {registeredVolunteers.map((volunteer) => (
                                    <li
                                        key={volunteer.id}
                                        className="p-2 border rounded-md bg-muted"
                                    >
                                        <div className="font-medium">
                                            {volunteer.name}
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            {volunteer.email}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-sm text-muted-foreground">
                                No volunteers registered.
                            </p>
                        )}
                    </div>
                )}
            </div>
        </form>
    );
};

export default AddEditActivity;
