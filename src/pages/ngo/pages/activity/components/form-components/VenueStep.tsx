import React from "react";
import { useFormikContext } from "formik";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const VenueStep: React.FC = () => {
    const { values, handleChange, setFieldValue } = useFormikContext<any>();

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
                <Label htmlFor="googleMapsUrl" className="mb-2 block">
                    Google Maps Embed URL (or Latitude / Longitude)
                </Label>
                <Input
                    id="googleMapsUrl"
                    name="googleMapsUrl"
                    placeholder="https://maps.google.com/... or 37.7749,-122.4194"
                    value={values.googleMapsUrl}
                    onChange={handleChange}
                />
            </div>
            {values?.googleMapsUrl && (
                <div className="mt-4">
                    <Label className="mb-2 block">Map Preview</Label>
                    <iframe
                        title="Google Maps Preview"
                        src={values.googleMapsUrl}
                        width="100%"
                        height="300"
                        allowFullScreen
                        loading="lazy"
                        style={{ border: 0 }}
                    />
                </div>
            )}
        </div>
    );
};
