export function NGOImpactGallery({ galleryUrls }: { galleryUrls: string[] }) {
    return (
        <div>
            <h3 className="text-lg font-semibold mb-2">Impact Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {galleryUrls?.map((url: string, idx: number) => (
                    <img
                        key={idx}
                        src={url}
                        alt={`gallery-${idx}`}
                        className="h-36 object-cover w-full rounded-md"
                    />
                ))}
            </div>
        </div>
    );
}
