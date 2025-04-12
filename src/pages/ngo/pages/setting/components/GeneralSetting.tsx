import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { UploadCloud } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const GeneralSetting = () => {
    const [logoFile, setLogoFile] = useState<File | null>(null);

    const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setLogoFile(e.target.files[0]);
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl w-full">
            <h2 className="text-lg font-semibold mb-6">General Settings</h2>

            <div className="space-y-4">
                <div>
                    <Label>NGO Name</Label>
                    <Input placeholder="Example NGO Name" />
                </div>

                <div>
                    <Label>Address</Label>
                    <Textarea
                        placeholder="Enter your NGO's address..."
                        rows={3}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label>Contact Email</Label>
                        <Input placeholder="example@ngo.org" />
                    </div>
                    <div>
                        <Label>Phone Number</Label>
                        <Input placeholder="+1234567890" />
                    </div>
                </div>

                <div>
                    <Label>Logo Upload</Label>
                    <label
                        htmlFor="logo-upload"
                        className={cn(
                            "mt-2 flex flex-col items-center justify-center border border-dashed border-gray-300 rounded-md h-36 cursor-pointer bg-muted/40 hover:bg-muted transition"
                        )}
                    >
                        <UploadCloud className="h-6 w-6 text-gray-500 mb-2" />
                        <p className="text-sm text-gray-500">
                            {logoFile
                                ? logoFile.name
                                : "Drag and drop your logo here, or click to select a file"}
                        </p>
                        <input
                            type="file"
                            id="logo-upload"
                            onChange={handleLogoUpload}
                            accept="image/*"
                            className="hidden"
                        />
                    </label>
                </div>

                <div className="pt-4">
                    <Button className="ml-auto block">Save Changes</Button>
                </div>
            </div>
        </div>
    );
};

export default GeneralSetting;
