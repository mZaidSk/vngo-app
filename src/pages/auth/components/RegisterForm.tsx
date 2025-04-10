// components/RegisterForm.tsx
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
import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
    const [date, setDate] = useState<Date>();

    return (
        <Card className="w-full max-w-3xl">
            <CardHeader className="relative">
                <CardTitle className="flex items-center gap-2 text-2xl font-semibold">
                    <Shield className="h-6 w-6 text-primary" />
                    Create Account
                </CardTitle>
                {/* <div className="absolute top-6 right-6 text-sm">
                    <a
                        href="#"
                        className="text-blue-600 hover:underline text-xs"
                    >
                        Need help?
                    </a>
                </div> */}
            </CardHeader>

            <CardContent>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label className="pb-2" htmlFor="name">
                            Full Name *
                        </Label>
                        <Input id="name" placeholder="Enter your full name" />
                    </div>
                    <div>
                        <Label className="pb-2" htmlFor="email">
                            Email Address *
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                        />
                        <p className="text-xs text-muted-foreground">
                            Please enter a valid email address
                        </p>
                    </div>
                    <div>
                        <Label className="pb-2" htmlFor="password">
                            Password *
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Min. 8 characters"
                        />
                        <p className="text-xs text-muted-foreground">
                            Must contain letters and numbers
                        </p>
                    </div>
                    <div>
                        <Label className="pb-2" htmlFor="confirm">
                            Confirm Password *
                        </Label>
                        <Input
                            id="confirm"
                            type="password"
                            placeholder="Re-enter password"
                        />
                        <p className="text-xs text-muted-foreground">
                            Passwords must match
                        </p>
                    </div>
                    <div>
                        <Label className="pb-2">Date of Birth *</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="w-full justify-start text-left font-normal"
                                >
                                    {date
                                        ? format(date, "dd-MM-yyyy")
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
                                    selected={date}
                                    onSelect={setDate}
                                    captionLayout="dropdown" // ✅ clean dropdowns for month/year
                                    fromYear={1950}
                                    toYear={new Date().getFullYear()}
                                    className="rounded-md border"
                                />
                            </PopoverContent>
                        </Popover>

                        <p className="text-xs text-muted-foreground">
                            You must be at least 18 years old
                        </p>
                    </div>
                    <div>
                        <Label className="pb-2">Role *</Label>
                        <Select>
                            <SelectTrigger className="w-full">
                                {" "}
                                {/* ← adjust width here */}
                                <SelectValue placeholder="Select your role" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="volunteer">
                                    Volunteer
                                </SelectItem>
                                <SelectItem value="ngo">NGO</SelectItem>
                                <SelectItem value="admin">Admin</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="col-span-full mt-4">
                        <Button type="submit" className="w-full" disabled>
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
