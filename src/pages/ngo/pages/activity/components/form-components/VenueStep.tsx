import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface VenueStepProps {
    values: any;
    handleChange: (e: React.ChangeEvent<any>) => void;
    setFieldValue: (field: string, value: any) => void;
}

export const VenueStep: React.FC<VenueStepProps> = ({
    values,
    handleChange,
    setFieldValue,
}) => {
    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold">📍 Venue / Location</h2>

            <div>
                <Label htmlFor="venueName" className="mb-2 block">
                    Venue Name
                </Label>
                <Input
                    id="venueName"
                    name="venueName"
                    placeholder="E.g. Community Hall, City Auditorium"
                    value={values.venueName}
                    onChange={handleChange}
                />
            </div>

            <div>
                <Label htmlFor="fullAddress" className="mb-2 block">
                    Full Address
                </Label>
                <Input
                    id="fullAddress"
                    name="fullAddress"
                    placeholder="123 Green Street, Springfield, IL 62704"
                    value={values.fullAddress}
                    onChange={handleChange}
                />
            </div>

            <div>
                <Label htmlFor="mapEmbedUrl" className="mb-2 block">
                    Google Maps Embed URL (or Latitude / Longitude)
                </Label>
                <Input
                    id="mapEmbedUrl"
                    name="mapEmbedUrl"
                    placeholder="https://maps.google.com/... or 37.7749,-122.4194"
                    value={values.mapEmbedUrl}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};
