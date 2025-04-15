import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function NGOCTA() {
    return (
        <Card className="bg-primary text-primary-foreground text-center">
            <CardContent className="p-6 space-y-4">
                <h2 className="text-xl font-bold">Make a Difference Today</h2>
                <p>
                    Join our community of volunteers and help us create positive
                    change in this world.
                </p>
                <div className="flex justify-center gap-4">
                    <Button variant="secondary">Become a Volunteer</Button>
                    <Button variant="ghost">Support Us</Button>
                </div>
            </CardContent>
        </Card>
    );
}
