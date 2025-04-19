import { FormField } from "@/components/common/FormField";

export const SkillsCertificates = () => (
    <div className="space-y-4">
        <FormField
            name="skills"
            label="Skills"
            type="textarea"
            placeholder="E.g., JavaScript, Communication"
        />
        <FormField
            name="certificates"
            label="Certificates"
            type="textarea"
            placeholder="E.g., React Developer, AWS Certified"
        />
    </div>
);
