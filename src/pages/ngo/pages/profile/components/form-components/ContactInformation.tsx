import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormikContext } from "formik";

const ContactInformation = () => {
    const { values, handleChange } = useFormikContext<any>();

    return (
        <>
            <div className="space-y-2">
                <Label>Email</Label>
                <Input
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                />
            </div>
            <div className="space-y-2">
                <Label>Phone</Label>
                <Input
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                />
            </div>
            <div className="space-y-2">
                <Label>Website</Label>
                <Input
                    name="website"
                    value={values.website}
                    onChange={handleChange}
                />
            </div>
        </>
    );
};

export default ContactInformation;
