import { FormField } from "@/components/common/FormField";

export const SocialLinks = () => (
    <div className="space-y-4">
        <FormField
            name="twitter"
            label="Twitter"
            placeholder="https://twitter.com/username"
        />
        <FormField
            name="linkedin"
            label="LinkedIn"
            placeholder="https://linkedin.com/in/username"
        />
        <FormField
            name="github"
            label="GitHub"
            placeholder="https://github.com/username"
        />
    </div>
);
