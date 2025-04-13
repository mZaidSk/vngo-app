import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormikContext } from "formik";

const BrandingMedia = () => {
    const { values, handleChange } = useFormikContext<any>();

    const renderImagePreview = (url: string, alt: string) => {
        if (!url?.trim()) return null;
        return (
            <img
                src={url}
                alt={alt}
                className="mt-2 w-full h-40 object-cover rounded border"
                onError={(e) => (e.currentTarget.style.display = "none")}
            />
        );
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
                <Label>Logo URL</Label>
                <Input
                    type="url"
                    name="logoUrl"
                    value={values.logoUrl}
                    onChange={handleChange}
                    placeholder="https://example.com/logo.png"
                />
                {renderImagePreview(values.logoUrl, "Logo Preview")}
            </div>
            <div className="space-y-2">
                <Label>Cover Banner URL</Label>
                <Input
                    type="url"
                    name="bannerUrl"
                    value={values.bannerUrl}
                    onChange={handleChange}
                    placeholder="https://example.com/banner.jpg"
                />
                {renderImagePreview(values.bannerUrl, "Banner Preview")}
            </div>
            <div className="md:col-span-2 space-y-4">
                <Label>Image Gallery (4 URLs)</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[0, 1, 2, 3].map((index) => {
                        const url = values.galleryUrls?.[index] || "";
                        return (
                            <div key={index} className="space-y-2">
                                <Input
                                    type="url"
                                    name={`galleryUrls[${index}]`}
                                    value={url}
                                    onChange={handleChange}
                                    placeholder={`Gallery Image ${
                                        index + 1
                                    } URL`}
                                />
                                {renderImagePreview(
                                    url,
                                    `Gallery Image ${index + 1}`
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default BrandingMedia;
