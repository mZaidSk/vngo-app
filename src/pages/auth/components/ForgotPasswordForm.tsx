// components/ForgotPasswordForm.tsx
import { useFormik } from "formik";
import * as Yup from "yup";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { forgotPassword } from "@/store/slice/AuthSlice"; // Make sure this action exists
import { toast } from "sonner";

const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
});

const ForgotPasswordForm = () => {
    const dispatch = useDispatch<AppDispatch>();

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: ForgotPasswordSchema,
        onSubmit: (values, { setSubmitting, resetForm }) => {
            console.log("Reset password request for:", values);
            dispatch(forgotPassword(values)).then((res: any) => {
                toast.success(
                    res.payload?.data?.message || "Link is Sent to your Email"
                );
                resetForm();
            });
            setSubmitting(false);
        },
    });

    return (
        <Card className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 shadow-lg overflow-hidden">
            {/* Left side - Welcome Section */}
            <div className="bg-[#0A1128] text-white flex flex-col items-center justify-center p-8">
                <div className="text-center">
                    <div className="text-5xl mb-4">🔐</div>
                    <h2 className="text-2xl font-semibold mb-2">
                        Forgot Your Password?
                    </h2>
                    <p className="text-sm text-gray-300">
                        Enter your email to reset it
                    </p>
                </div>
            </div>

            {/* Right side - Form Section */}
            <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-center mb-2">
                    Reset Password
                </h2>
                <p className="text-sm text-muted-foreground text-center mb-6">
                    We’ll send a reset link to your email
                </p>

                <form className="space-y-4" onSubmit={formik.handleSubmit}>
                    <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p className="text-xs text-red-500">
                                {formik.errors.email}
                            </p>
                        )}
                    </div>

                    <Button
                        className="w-full"
                        type="submit"
                        disabled={formik.isSubmitting}
                    >
                        {formik.isSubmitting ? "Sending..." : "Send Reset Link"}
                    </Button>
                </form>

                <Separator className="my-6" />

                <p className="text-sm text-center">
                    Remember your password?{" "}
                    <Link to="/login" className="text-blue-600 hover:underline">
                        Sign In
                    </Link>
                </p>
            </CardContent>
        </Card>
    );
};

export default ForgotPasswordForm;
