import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormikContext } from "formik";

const SocialMediaLinks = () => {
    const { values, handleChange } = useFormikContext<any>();

    return (
        <>
            <div className="space-y-2">
                <Label>Twitter</Label>
                <Input
                    name="twitter"
                    value={values.twitter}
                    onChange={handleChange}
                />
            </div>
            <div className="space-y-2">
                <Label>Instagram</Label>
                <Input
                    name="instagram"
                    value={values.instagram}
                    onChange={handleChange}
                />
            </div>
            <div className="space-y-2">
                <Label>LinkedIn</Label>
                <Input
                    name="linkedin"
                    value={values.linkedin}
                    onChange={handleChange}
                />
            </div>
            <div className="space-y-2">
                <Label>YouTube</Label>
                <Input
                    name="youtube"
                    value={values.youtube}
                    onChange={handleChange}
                />
            </div>
        </>
    );
};

export default SocialMediaLinks;
