import { FormField } from "@/components/common/FormField";

export const ContactDetails = () => (
    <div className="space-y-4">
        <FormField
            name="email"
            label="Email"
            type="email"
            placeholder="Email"
            disabled={true}
        />
        <FormField name="phone" label="Phone" placeholder="Phone" />
        <FormField
            name="address"
            label="Address"
            placeholder="Enter address"
            type="textarea"
        />
    </div>
);
