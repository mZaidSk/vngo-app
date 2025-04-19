import { steps } from "./types";

interface SidebarProps {
    currentStep: number;
    setStep: (step: number) => void;
}

export const Sidebar = ({ currentStep, setStep }: SidebarProps) => {
    return (
        <div className="md:w-1/4 w-full space-y-4">
            {steps.map((label, index) => (
                <div
                    key={index}
                    onClick={() => setStep(index)}
                    className={`flex items-center gap-3 cursor-pointer transition px-3 py-2 rounded-lg ${
                        currentStep === index
                            ? "bg-black text-white font-semibold"
                            : "hover:bg-muted hover:text-black text-muted-foreground"
                    }`}
                >
                    <div
                        className={`w-8 h-8 flex items-center justify-center text-sm font-bold rounded-full border ${
                            currentStep === index
                                ? "bg-white text-black"
                                : "bg-gray-200 text-gray-500"
                        }`}
                    >
                        {index + 1}
                    </div>
                    <span className="text-sm">{label}</span>
                </div>
            ))}
        </div>
    );
};
