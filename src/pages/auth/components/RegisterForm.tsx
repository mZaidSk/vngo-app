import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CalendarIcon, Shield } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { registerUser } from "@/store/slice/AuthSlice";

const RegisterForm = () => {
    const [dob, setDob] = useState<Date>();
    const dispatch = useDispatch<AppDispatch>();

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            dob: "",
            role: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().min(2).max(100).required("Name is required"),
            email: Yup.string()
                .email("Invalid email")
                .required("Email is required"),
            password: Yup.string().min(6).required("Password is required"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref("password")], "Passwords must match")
                .required("Confirm your password"),
            dob: Yup.string().required("Date of birth is required"),
            role: Yup.string().required("Role is required"),
        }),
        onSubmit: (values) => {
            console.log("Form values:", values);
            dispatch(registerUser(values)).then((res: any) => {
                console.log(res);
            });
            // Perform API call here
        },
    });

    return (
        <Card className="w-full max-w-3xl">
            <CardHeader className="relative">
                <CardTitle className="flex items-center gap-2 text-2xl font-semibold">
                    <Shield className="h-6 w-6 text-primary" />
                    Create Account
                </CardTitle>
            </CardHeader>

            <CardContent>
                <form
                    onSubmit={formik.handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                    <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="Enter your full name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.name && formik.errors.name && (
                            <p className="text-sm text-red-600">
                                {formik.errors.name}
                            </p>
                        )}
                    </div>

                    <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your@email.com"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p className="text-sm text-red-600">
                                {formik.errors.email}
                            </p>
                        )}
                        <p className="text-xs text-muted-foreground">
                            Please enter a valid email address
                        </p>
                    </div>

                    <div>
                        <Label htmlFor="password">Password *</Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Min. 6 characters"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.password && formik.errors.password && (
                            <p className="text-sm text-red-600">
                                {formik.errors.password}
                            </p>
                        )}
                        <p className="text-xs text-muted-foreground">
                            Must contain letters and numbers
                        </p>
                    </div>

                    <div>
                        <Label htmlFor="confirmPassword">
                            Confirm Password *
                        </Label>
                        <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            placeholder="Re-enter password"
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.confirmPassword &&
                            formik.errors.confirmPassword && (
                                <p className="text-sm text-red-600">
                                    {formik.errors.confirmPassword}
                                </p>
                            )}
                        <p className="text-xs text-muted-foreground">
                            Passwords must match
                        </p>
                    </div>

                    <div>
                        <Label>Date of Birth *</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="w-full justify-start text-left font-normal"
                                >
                                    {dob
                                        ? format(dob, "dd-MM-yyyy")
                                        : "dd-mm-yyyy"}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent
                                className="w-auto p-0"
                                align="start"
                            >
                                <Calendar
                                    mode="single"
                                    selected={dob}
                                    onSelect={(date) => {
                                        setDob(date);
                                        formik.setFieldValue(
                                            "dob",
                                            date
                                                ? date
                                                      .toISOString()
                                                      .split("T")[0]
                                                : ""
                                        );
                                    }}
                                    captionLayout="dropdown"
                                    fromYear={1950}
                                    toYear={new Date().getFullYear()}
                                    className="rounded-md border"
                                />
                            </PopoverContent>
                        </Popover>
                        {formik.touched.dob && formik.errors.dob && (
                            <p className="text-sm text-red-600">
                                {formik.errors.dob}
                            </p>
                        )}
                        <p className="text-xs text-muted-foreground">
                            You must be at least 18 years old
                        </p>
                    </div>

                    <div>
                        <Label>Role *</Label>
                        <Select
                            value={formik.values.role}
                            onValueChange={(value) =>
                                formik.setFieldValue("role", value)
                            }
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select your role" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="VOLUNTEER">
                                    Volunteer
                                </SelectItem>
                                <SelectItem value="NGO">NGO</SelectItem>
                                <SelectItem value="ADMIN">Admin</SelectItem>
                            </SelectContent>
                        </Select>
                        {formik.touched.role && formik.errors.role && (
                            <p className="text-sm text-red-600">
                                {formik.errors.role}
                            </p>
                        )}
                    </div>

                    <div className="col-span-full mt-4">
                        <Button type="submit" className="w-full">
                            Create Account
                        </Button>
                        <p className="text-center text-sm mt-2">
                            Already have an account?{" "}
                            <Link
                                to="/auth"
                                className="text-blue-600 hover:underline"
                            >
                                Sign in
                            </Link>
                        </p>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
};

export default RegisterForm;
