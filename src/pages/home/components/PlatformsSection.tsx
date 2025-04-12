// components/PlatformsSection.tsx

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function PlatformsSection() {
    return (
        <section className="text-center px-6" id="home">
            <h2 className="text-2xl font-semibold mb-8">
                Two Powerful Platforms
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <Card>
                    <CardContent className="p-6 space-y-4 text-left">
                        <h3 className="font-bold text-lg flex items-center gap-2">
                            <Users className="w-5 h-5" /> For NGOs
                        </h3>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Create and manage volunteer opportunities</li>
                            <li>Track volunteer applications</li>
                            <li>Manage projects and events</li>
                            <li>Generate impact reports</li>
                        </ul>
                        <Link to={"/ngo"}>
                            <Button className="w-full cursor-pointer">
                                NGO Dashboard
                            </Button>
                        </Link>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6 space-y-4 text-left">
                        <h3 className="font-bold text-lg flex items-center gap-2">
                            <Users className="w-5 h-5" /> For Volunteers
                        </h3>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li>Browse verified opportunities</li>
                            <li>Match with suitable projects</li>
                            <li>Track volunteer hours</li>
                            <li>Get certificates and recognition</li>
                        </ul>
                        <Link to={"/volunteer"}>
                            <Button className="w-full cursor-pointer">
                                Volunteer Dashboard
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
