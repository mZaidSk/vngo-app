import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Globe, Twitter, Instagram, Linkedin } from "lucide-react";

export function NGOFooter({ profile }: { profile: any }) {
    return (
        <footer className="mt-10 text-muted-foreground text-sm">
            <Separator className="mb-6" />
            <div className="flex flex-col md:flex-row justify-between gap-6 px-2 md:px-4">
                {/* About & Contact */}
                <div className="flex-1 space-y-2">
                    <h4 className="text-foreground font-medium">
                        {profile?.organization_name}
                    </h4>
                    <p>{profile?.mission}</p>
                    <div className="space-y-1">
                        <p>
                            Email:{" "}
                            <a
                                href={`mailto:${profile?.email}`}
                                className="hover:underline"
                            >
                                {profile?.email}
                            </a>
                        </p>
                        <p>Phone: {profile?.phone}</p>
                    </div>
                </div>

                {/* Follow & Subscribe */}
                <div className="flex-1 space-y-3">
                    <div>
                        <h4 className="text-foreground font-medium">
                            Stay Connected
                        </h4>
                        <div className="flex items-center gap-3 mt-1">
                            {profile?.website && (
                                <a
                                    href={profile?.website}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Globe size={20} />
                                </a>
                            )}
                            {profile?.twitter && (
                                <a
                                    href={profile?.twitter}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Twitter size={20} />
                                </a>
                            )}
                            {profile?.instagram && (
                                <a
                                    href={profile?.instagram}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Instagram size={20} />
                                </a>
                            )}
                            {profile?.linkedin && (
                                <a
                                    href={profile?.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Linkedin size={20} />
                                </a>
                            )}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-foreground font-medium mt-3">
                            Subscribe
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                            <Input
                                placeholder="Your email"
                                className="h-8 text-sm"
                            />
                            <Button size="sm">Subscribe</Button>
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-center text-xs pt-6 text-muted-foreground">
                © 2025 Green Earth Initiative. All rights reserved.
            </p>
        </footer>
    );
}
