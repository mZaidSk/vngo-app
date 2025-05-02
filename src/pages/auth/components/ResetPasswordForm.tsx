import { useSearchParams, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { resetPassword } from "@/store/slice/AuthSlice";
import { toast } from "sonner";

const ResetPasswordSchema = Yup.object().shape({
    newPassword: Yup.string().min(6, "Too short").required("Required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword"), ""], "Passwords must match")
        .required("Required"),
});

const ResetPasswordForm = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const token = searchParams.get("token");

    const formik = useFormik({
        initialValues: {
            newPassword: "",
            confirmPassword: "",
        },
        validationSchema: ResetPasswordSchema,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            dispatch(
                resetPassword({
                    token,
                    newPassword: values.newPassword,
                })
            ).then((res: any) => {
                console.log(res);
                toast.success(
                    res.payload?.data?.message ||
                        "Password Updated Successfully"
                );
                navigate("/auth");
                resetForm();
            });
            setSubmitting(false);
        },
    });

    return (
        <div className="flex items-center justify-center w-96 px-4">
            <Card className="w-full max-w-md shadow-xl rounded-2xl">
                <CardContent className="p-8 space-y-6">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-[#0A1128]">
                            Reset Password
                        </h1>
                        <p className="text-sm text-muted-foreground mt-2">
                            Enter your new password below.
                        </p>
                    </div>

                    <form className="space-y-5" onSubmit={formik.handleSubmit}>
                        <div className="space-y-2">
                            <Label
                                htmlFor="newPassword"
                                className="text-sm font-medium text-gray-700"
                            >
                                New Password
                            </Label>
                            <Input
                                id="newPassword"
                                name="newPassword"
                                type="password"
                                placeholder="Enter new password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.newPassword}
                            />
                            {formik.touched.newPassword &&
                                formik.errors.newPassword && (
                                    <p className="text-sm text-red-500">
                                        {formik.errors.newPassword}
                                    </p>
                                )}
                        </div>

                        <div className="space-y-2">
                            <Label
                                htmlFor="confirmPassword"
                                className="text-sm font-medium text-gray-700"
                            >
                                Confirm Password
                            </Label>
                            <Input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                placeholder="Confirm new password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.confirmPassword}
                            />
                            {formik.touched.confirmPassword &&
                                formik.errors.confirmPassword && (
                                    <p className="text-sm text-red-500">
                                        {formik.errors.confirmPassword}
                                    </p>
                                )}
                        </div>

                        <Button
                            type="submit"
                            className="w-full text-white bg-[#0A1128] hover:bg-[#1C2541] transition duration-200"
                            disabled={formik.isSubmitting}
                        >
                            {formik.isSubmitting
                                ? "Resetting..."
                                : "Reset Password"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default ResetPasswordForm;
