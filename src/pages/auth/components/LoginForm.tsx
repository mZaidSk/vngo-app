// components/Login.tsx
import { useFormik } from "formik";
import * as Yup from "yup";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Apple, Facebook, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { loginUser } from "@/store/slice/AuthSlice";

// Validation schema
const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Too short").required("Required"),
});

const LoginForm = () => {
    const dispatch = useDispatch<AppDispatch>();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            remember: false,
        },
        validationSchema: LoginSchema,
        onSubmit: (values, { setSubmitting }) => {
            console.log("Form values:", values);
            dispatch(loginUser(values)).then((res: any) => {
                console.log(res);
                window.location.reload();
            });
            setSubmitting(false);
        },
    });

    return (
        <Card className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 shadow-lg overflow-hidden">
            {/* Left side - Welcome Section */}
            <div className="bg-[#0A1128] text-white flex flex-col items-center justify-center p-8">
                <div className="text-center">
                    <div className="text-5xl mb-4">👤</div>
                    <h2 className="text-2xl font-semibold mb-2">
                        Welcome Back!
                    </h2>
                    <p className="text-sm text-gray-300">
                        Sign in to access your account
                    </p>
                </div>
            </div>

            {/* Right side - Form Section */}
            <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-center mb-2">
                    Sign In
                </h2>
                <p className="text-sm text-muted-foreground text-center mb-6">
                    Enter your credentials to continue
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

                    <div>
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password && (
                            <p className="text-xs text-red-500">
                                {formik.errors.password}
                            </p>
                        )}
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="remember"
                                name="remember"
                                checked={formik.values.remember}
                                onCheckedChange={(checked) =>
                                    formik.setFieldValue("remember", checked)
                                }
                            />
                            <Label htmlFor="remember">Remember me</Label>
                        </div>
                        <Link
                            to="/auth/forgot-password"
                            className="text-blue-600 hover:underline"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    <Button
                        className="w-full"
                        type="submit"
                        disabled={formik.isSubmitting}
                    >
                        {formik.isSubmitting ? "Signing In..." : "Sign In"}
                    </Button>
                </form>

                <Separator className="my-6" />

                <div className="text-center space-y-2">
                    <p className="text-sm">Or continue with</p>
                    <div className="flex justify-center gap-4">
                        <Button variant="outline" size="icon">
                            <Github className="h-5 w-5" />
                        </Button>
                        <Button variant="outline" size="icon">
                            <Apple className="h-5 w-5" />
                        </Button>
                        <Button variant="outline" size="icon">
                            <Facebook className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                <p className="text-sm text-center mt-6">
                    Don’t have an account?{" "}
                    <Link
                        to="register"
                        className="text-blue-600 hover:underline"
                    >
                        Create account
                    </Link>
                </p>
            </CardContent>
        </Card>
    );
};

export default LoginForm;
