import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { UserRound, Settings, Trash2 } from "lucide-react";
import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type User = {
    name: string;
    email: string;
    status: "Completed" | "In Progress";
};

export default function RegisteredVolunteer() {
    const [search, setSearch] = useState("");
    const [userList, setUserList] = useState<User[]>([
        {
            name: "John Doe",
            email: "john@example.com",
            status: "Completed",
        },
        {
            name: "Jane Smith",
            email: "jane@example.com",
            status: "In Progress",
        },
    ]);

    const filteredUsers = userList.filter(
        (user) =>
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase())
    );

    const updateStatus = (index: number, newStatus: User["status"]) => {
        const updated = [...userList];
        updated[index].status = newStatus;
        setUserList(updated);
    };

    const updateAllStatuses = (newStatus: User["status"]) => {
        const updated = userList.map((user) => ({
            ...user,
            status: newStatus,
        }));
        setUserList(updated);
    };

    const generateAllCertificates = () => {
        console.log("Generating certificates for all participants...");
        // implement actual logic here
    };

    return (
        <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Registered volunteer</h2>
                <Input
                    placeholder="Search users..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="max-w-sm"
                />
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
                                            <Select
                                                onValueChange={(
                                                    value: User["status"]
                                                ) => updateAllStatuses(value)}
                                            >
                                                <SelectTrigger className="w-[140px] h-8">
                                                    <SelectValue placeholder="Update All" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Completed">
                                                        Completed
                                                    </SelectItem>
                                                    <SelectItem value="In Progress">
                                                        In Progress
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </th>
                                    <th className="px-6 py-3 font-medium">
                                        <div className="flex flex-col space-y-2">
                                            <span>Actions</span>
                                            <Button
                                                size="sm"
                                                className="w-44"
                                                onClick={
                                                    generateAllCertificates
                                                }
                                            >
                                                Generate All
                                            </Button>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers.map((user, index) => (
                                    <tr
                                        key={index}
                                        className="border-b hover:bg-gray-50 transition"
                                    >
                                        <td className="px-6 py-4 flex items-center gap-2">
                                            <UserRound className="w-6 h-6" />
                                            <div>
                                                <div className="font-medium">
                                                    {user.name}
                                                </div>
                                                <div className="text-gray-500 text-xs">
                                                    {user.email}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Select
                                                value={user.status}
                                                onValueChange={(
                                                    value: User["status"]
                                                ) => updateStatus(index, value)}
                                            >
                                                <SelectTrigger className="w-[140px]">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Completed">
                                                        Completed
                                                    </SelectItem>
                                                    <SelectItem value="In Progress">
                                                        In Progress
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </td>
                                        <td className="px-6 py-4 space-x-2">
                                            <Button variant="outline" size="sm">
                                                <Settings className="w-4 h-4 mr-1" />
                                                Generate Certificate
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="text-red-600"
                                            >
                                                <Trash2 className="w-4 h-4 mr-1" />
                                                Remove
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-between items-center px-6 py-4 text-sm text-muted-foreground">
                        <div>
                            Showing {filteredUsers.length} of {userList.length}{" "}
                            entries
                        </div>
                        <div className="space-x-2">
                            <Button size="sm" variant="outline">
                                Previous
                            </Button>
                            <Button size="sm" variant="default">
                                1
                            </Button>
                            <Button size="sm" variant="outline">
                                Next
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
