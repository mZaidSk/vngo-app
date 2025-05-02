import { FormField } from "@/components/common/FormField";

export const Availability = () => (
    <div className="space-y-4">
        <FormField
            name="availability"
            label="Availability"
            type="textarea"
            placeholder="E.g., Mon-Wed Evenings"
        />
    </div>
);
