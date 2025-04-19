import { useField } from "formik";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface FormFieldProps {
    name: string;
    label: string;
    type?: "text" | "email" | "date" | "textarea" | "select";
    placeholder?: string;
    options?: { label: string; value: string }[];
    disabled?: boolean; // new prop
}

export const FormField: React.FC<FormFieldProps> = ({
    name,
    label,
    type = "text",
    placeholder,
    options = [],
    disabled = false, // default to false
}) => {
    const [field, meta, helpers] = useField(name);
    const showError = meta.touched && meta.error;

    const baseStyles = "w-full";

    return (
        <div className="space-y-1">
            <label htmlFor={name} className="text-sm font-medium text-gray-700">
                {label}
            </label>

            {type === "textarea" ? (
                <Textarea
                    id={name}
                    {...field}
                    placeholder={placeholder}
                    className={baseStyles}
                    disabled={disabled}
                />
            ) : type === "select" ? (
                <Select
                    value={field.value}
                    onValueChange={(val) => helpers.setValue(val)}
                    disabled={disabled}
                >
                    <SelectTrigger className={baseStyles}>
                        <SelectValue placeholder={placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                        {options.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                                {opt.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            ) : (
                <Input
                    id={name}
                    {...field}
                    type={type}
                    placeholder={placeholder}
                    className={baseStyles}
                    disabled={disabled}
                />
            )}

            {showError && <p className="text-sm text-red-600">{meta.error}</p>}
        </div>
    );
};
