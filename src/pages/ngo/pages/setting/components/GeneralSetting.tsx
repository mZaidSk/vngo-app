import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const GeneralSetting = () => {
    const authSelector = useSelector((state: RootState) => state.auth.user);
    const formik = useFormik({
        initialValues: {
            name: authSelector?.data?.name || "",
            email: authSelector?.data?.email || "",
            dob: authSelector?.data?.dob || "",
        },
        onSubmit: (values) => {
            console.log("Form submitted:", values);
            // You can integrate an API call here
        },
    });

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl w-full">
            <h2 className="text-lg font-semibold mb-6">General Settings</h2>

            <form onSubmit={formik.handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="example@email.com"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input
                        id="dob"
                        name="dob"
                        type="date"
                        value={formik.values.dob}
                        onChange={formik.handleChange}
                    />
                </div>

                <div className="pt-4">
                    <Button type="submit" className="ml-auto block">
                        Save Changes
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default GeneralSetting;
