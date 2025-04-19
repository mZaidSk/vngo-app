import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { UserRound, Settings, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import {
    deleteApplication,
    generateApplicationCertificate,
    getApplicationsByActivityId,
    updateApplication,
} from "@/store/slice/ApplicationSlice";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";

export default function RegisteredVolunteer() {
    const location = useLocation();
    const dispatch = useDispatch<AppDispatch>();

    const { activityId } = location.state || {};
    const applicationSelector = useSelector(
        (state: RootState) => state.application.applications
    );

    useEffect(() => {
        callApplicationsByActivityId();
    }, []);

    const callApplicationsByActivityId = () => {
        if (activityId) dispatch(getApplicationsByActivityId(activityId));
    };

    console.log(applicationSelector);

    const generateAllCertificates = () => {
        console.log("Generating certificates for all participants...");
        // implement actual logic here
    };

    const handleStatusChange = async (
        applicationId: string,
        newStatus: any
    ) => {
        try {
            // Call your API to update the status
            const response = await dispatch(
                updateApplication({
                    id: applicationId,
                    payload: { status: newStatus },
                })
            );

            if (response?.payload?.success) {
                // Optionally, update local state here or trigger a refetch to reflect changes
                toast.success("Status updated successfully");
            } else {
                toast.error("Failed to update status");
            }
            callApplicationsByActivityId();
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    const generateCertificate = async (applicationId: string, userId: any) => {
        try {
            // Call your API to update the status
            const response = await dispatch(
                generateApplicationCertificate({
                    applicationId: applicationId,
                    userId: userId,
                })
            );

            if (response?.payload?.success) {
                // Optionally, update local state here or trigger a refetch to reflect changes
                toast.success("Certificate Generated successfully");
            } else {
                toast.error("Failed to Generate Certificate");
            }
            callApplicationsByActivityId();
        } catch (error) {
            console.error("Error Generating Certificate:", error);
        }
    };

    const handleDeleteApplication = async (applicationId: string) => {
        try {
            // Call your API to update the status
            const response = await dispatch(deleteApplication(applicationId));

            if (response?.payload) {
                // Optionally, update local state here or trigger a refetch to reflect changes
                toast.success("Application Deleted successfully");
            } else {
                toast.error("Failed to Delete Application");
            }
            callApplicationsByActivityId();
        } catch (error) {
            console.error("Error Deleting Application:", error);
        }
    };

    return (
        <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Registered volunteer</h2>
                <Input placeholder="Search users..." className="max-w-sm" />
            </div>

            <Card>
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm text-left">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-6 py-3 font-medium">
                                        Name
                                    </th>
                                    <th className="px-6 py-3 font-medium">
                                        <div className="flex flex-col space-y-2">
                                            <span>Participation Status</span>
                                        </div>
                                    </th>
                                    <th className="px-6 py-3 font-medium">
                                        <div className="flex flex-col space-y-2">
                                            <span>Actions</span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {applicationSelector?.data?.map(
                                    (application: any, index: any) => (
                                        <tr
                                            key={index}
                                            className="border-b hover:bg-gray-50 transition"
                                        >
                                            <td className="px-6 py-4 flex items-center gap-2">
                                                <UserRound className="w-6 h-6" />
                                                <div>
                                                    <div className="font-medium">
                                                        {
                                                            application
                                                                ?.volunteerProfile
                                                                ?.fullName
                                                        }
                                                    </div>
                                                    <div className="text-gray-500 text-xs">
                                                        {
                                                            application
                                                                ?.volunteerProfile
                                                                ?.email
                                                        }
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <Select
                                                    value={application?.status}
                                                    onValueChange={(value) =>
                                                        handleStatusChange(
                                                            application?.application_id,
                                                            value
                                                        )
                                                    }
                                                >
                                                    <SelectTrigger className="w-[140px]">
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="PENDING">
                                                            Pending
                                                        </SelectItem>
                                                        <SelectItem value="APPROVED">
                                                            Approved
                                                        </SelectItem>
                                                        <SelectItem value="COMPLETED">
                                                            Completed
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </td>

                                            <td className="px-6 py-4 space-x-2">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() =>
                                                        generateCertificate(
                                                            application?.application_id,
                                                            application
                                                                ?.volunteerProfile
                                                                ?.user_id
                                                        )
                                                    }
                                                >
                                                    <Settings className="w-4 h-4 mr-1" />
                                                    Generate Certificate
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="text-red-600"
                                                    onClick={() =>
                                                        handleDeleteApplication(
                                                            application?.application_id
                                                        )
                                                    }
                                                >
                                                    <Trash2 className="w-4 h-4 mr-1" />
                                                    Remove
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
