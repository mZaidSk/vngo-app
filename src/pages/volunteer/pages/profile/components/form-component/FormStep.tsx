import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FormStepProps {
    children: React.ReactNode;
    isLastStep: boolean;
    onPrev: () => void;
    isFirstStep: boolean;
}

export const FormStep = ({
    children,
    isLastStep,
    onPrev,
    isFirstStep,
}: FormStepProps) => {
    return (
        <div className="flex-1 flex flex-col h-full">
            <div className="flex-1 overflow-y-auto pr-2">
                <Card className="rounded-2xl shadow-sm h-full flex flex-col pb-0">
                    <CardContent className="space-y-6 p-6 md:p-8 flex-1">
                        {children}
                    </CardContent>

                    <CardFooter className="sticky bottom-0 left-0 bg-white/90 backdrop-blur-md border-t py-4 px-4 flex justify-between items-center shadow-sm rounded-b-2xl z-10">
                        <Button
                            variant="outline"
                            onClick={onPrev}
                            disabled={isFirstStep}
                            type="button"
                        >
                            Back
                        </Button>
                        <Button type="submit">
                            {isLastStep ? "Submit" : "Next Step"}
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};
