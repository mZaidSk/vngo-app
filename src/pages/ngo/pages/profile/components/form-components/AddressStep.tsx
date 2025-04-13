import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormikContext } from "formik";

const AddressStep = () => {
    const { values, handleChange } = useFormikContext<any>();

    return (
        <>
            <div className="space-y-2">
                <Label>Address Line 1</Label>
                <Input
                    name="addressLine1"
                    value={values.addressLine1}
                    onChange={handleChange}
                />
            </div>
            <div className="space-y-2">
                <Label>Address Line 2</Label>
                <Input
                    name="addressLine2"
                    value={values.addressLine2}
                    onChange={handleChange}
                />
            </div>
            <div className="space-y-2">
                <Label>City</Label>
                <Input
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                />
            </div>
            <div className="space-y-2">
                <Label>State</Label>
                <Input
                    name="state"
                    value={values.state}
                    onChange={handleChange}
                />
            </div>
            <div className="space-y-2">
                <Label>Postal Code</Label>
                <Input
                    name="postalCode"
                    value={values.postalCode}
                    onChange={handleChange}
                />
            </div>
            {/* <div className="space-y-2">
                <Label>Country</Label>
                <Input
                    name="country"
                    value={values.country}
                    onChange={handleChange}
                />
            </div> */}
        </>
    );
};

export default AddressStep;
