import { FormField } from "@/components/common/FormField";

export const BasicDetails = () => (
    <div className="space-y-4">
        <FormField
            name="fullName"
            label="Full Name"
            placeholder="John Doe"
            disabled={true}
        />
        <FormField
            name="dob"
            label="Date of Birth"
            type="date"
            disabled={true}
        />
        <FormField
            name="gender"
            label="Gender"
            type="select"
            placeholder="Select gender"
            options={[
                { label: "Male", value: "Male" },
                { label: "Female", value: "Female" },
                { label: "Other", value: "Other" },
            ]}
        />
    </div>
);
