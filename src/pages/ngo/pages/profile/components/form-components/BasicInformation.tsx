import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useFormikContext } from "formik";

const BasicInformation = () => {
    const { values, handleChange } = useFormikContext<any>();

    return (
        <>
            <div className="space-y-2">
                <Label>NGO Name</Label>
                <Input
                    name="ngoName"
                    value={values.ngoName}
                    onChange={handleChange}
                />
            </div>
            <div className="space-y-2">
                <Label>Mission Statement</Label>
                <Textarea
                    name="mission"
                    value={values.mission}
                    onChange={handleChange}
                />
            </div>
            <div className="space-y-2">
                <Label>Focus Areas / Causes</Label>
                <Input
                    name="focusAreas"
                    value={values.focusAreas}
                    onChange={handleChange}
                />
            </div>
            <div className="space-y-2">
                <Label>Founded Year</Label>
                <Input
                    name="foundedYear"
                    type="number"
                    value={values.foundedYear}
                    onChange={handleChange}
                />
            </div>
        </>
    );
};

export default BasicInformation;
