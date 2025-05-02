import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Clock, Users, RefreshCw, FileText } from "lucide-react";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    BarChart,
    Bar,
    Pie,
    PieChart,
    Cell,
} from "recharts";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const summaryData = [
    {
        icon: <Clock />,
        label: "Hours Completed",
        value: 48,
        trend: "+8% this month",
    },
    {
        icon: <Users />,
        label: "Activities Joined",
        value: 12,
        trend: "+2 this month",
    },
    {
        icon: <RefreshCw />,
        label: "Ongoing Activities",
        value: 3,
        trend: "No change",
    },
    {
        icon: <FileText />,
        label: "Certificates Earned",
        value: 5,
        trend: "+1 this month",
    },
];

const participationData = [
    { date: "Jan", hours: 4 },
    { date: "Feb", hours: 6 },
    { date: "Mar", hours: 8 },
    { date: "Apr", hours: 10 },
    { date: "May", hours: 5 },
];

const hoursBreakdownData = [
    { name: "Cleanup", hours: 12 },
    { name: "Food Drive", hours: 18 },
    { name: "Planting", hours: 8 },
    { name: "Other", hours: 10 },
];

const recentActivities = [
    {
        title: "Beach Cleanup Drive",
        status: "Completed",
        hours: 4,
    },
    {
        title: "Food Bank Distribution",
        status: "Ongoing",
        hours: 2,
    },
];

const user = JSON.parse(localStorage.getItem("user") || "");

export default function DashboardPage() {
    return (
        <div className="w-full flex justify-center bg-white min-h-screen px-2">
            <div className="max-w-6xl w-full py-6 space-y-6">
                <Card>
                    <CardHeader className="flex flex-row justify-between items-center">
                        <div>
                            <CardTitle className="text-xl">
                                Welcome back, {user?.name}
                            </CardTitle>
                            <CardDescription>
                                Here's what's happening with your NGO today.
                            </CardDescription>
                        </div>
                        <Avatar>
                            <AvatarFallback>
                                {user?.name
                                    ? user.name
                                          .split(" ")
                                          .map((word: any) => word[0])
                                          .join("")
                                          .toUpperCase()
                                          .slice(0, 2)
                                    : "NA"}
                            </AvatarFallback>
                        </Avatar>
                    </CardHeader>
                </Card>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {summaryData.map((item, idx) => (
                        <Card
                            key={idx}
                            className="shadow-md hover:shadow-lg transition-all"
                        >
                            <CardHeader className="flex flex-col gap-1">
                                <CardDescription className="flex items-center gap-2 text-sm text-gray-500">
                                    <span>{item.icon}</span> {item.label}
                                </CardDescription>
                                <CardTitle className="text-2xl">
                                    {item.value}
                                </CardTitle>
                                <CardDescription className="text-green-600 text-sm">
                                    {item.trend}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Line Chart: Participation Over Time */}
                    <Card className="shadow-md">
                        <CardContent className="p-4">
                            <h3 className="text-lg font-semibold mb-4 text-center">
                                Participation Over Time
                            </h3>
                            <ResponsiveContainer width="100%" height={250}>
                                <LineChart
                                    data={participationData}
                                    margin={{
                                        top: 10,
                                        right: 30,
                                        left: 0,
                                        bottom: 0,
                                    }}
                                >
                                    <XAxis dataKey="date" />
                                    <YAxis />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: "#fff",
                                            borderRadius: "0.5rem",
                                            boxShadow:
                                                "0px 2px 6px rgba(0,0,0,0.1)",
                                        }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="hours"
                                        stroke="#6366f1" // Tailwind indigo-500
                                        strokeWidth={3}
                                        dot={{ r: 5 }}
                                        activeDot={{ r: 7 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                    {/* Pie Chart: Hours Breakdown */}

                    <Card className="shadow-md">
                        <CardContent className="p-4">
                            <h3 className="text-lg font-semibold mb-4 text-center">
                                Hours Breakdown
                            </h3>
                            <ResponsiveContainer width="100%" height={250}>
                                <PieChart>
                                    <Pie
                                        data={hoursBreakdownData}
                                        dataKey="hours"
                                        nameKey="name"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={80}
                                        label={({ name, percent }) =>
                                            `${name} (${(percent * 100).toFixed(
                                                0
                                            )}%)`
                                        }
                                    >
                                        {hoursBreakdownData.map(
                                            (entry, index) => (
                                                <Cell
                                                    key={`cell-${index}`}
                                                    fill={
                                                        [
                                                            "#6366f1",
                                                            "#10b981",
                                                            "#f59e0b",
                                                            "#ef4444",
                                                        ][index % 4]
                                                    } // Indigo, Green, Amber, Red
                                                />
                                            )
                                        )}
                                    </Pie>
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: "#fff",
                                            borderRadius: "0.5rem",
                                            boxShadow:
                                                "0px 2px 6px rgba(0,0,0,0.1)",
                                        }}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Recent Activities</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {recentActivities.map((activity, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between border p-3 rounded-md"
                            >
                                <div>
                                    <div className="font-semibold">
                                        {activity.title}
                                    </div>
                                    <div className="text-sm text-muted-foreground my-4">
                                        <Badge
                                            className={`px-2 py-1 text-xs font-medium rounded-full shadow ${
                                                activity.status === "Upcoming"
                                                    ? "bg-green-100 text-green-700"
                                                    : activity.status ===
                                                      "Ongoing"
                                                    ? "bg-yellow-100 text-yellow-700"
                                                    : "bg-gray-200 text-gray-600"
                                            }`}
                                        >
                                            {activity.status}
                                        </Badge>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-sm">
                                        {activity.hours} hours
                                    </div>
                                    <Button size="sm" variant="outline">
                                        View Details
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="shadow-md">
                        <CardContent className="flex flex-col items-center justify-center p-4">
                            <BadgeCheck className="mb-2 text-primary" />
                            <p className="text-sm font-medium">
                                First Activity
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="shadow-md">
                        <CardContent className="flex flex-col items-center justify-center p-4">
                            <Clock className="mb-2 text-primary" />
                            <p className="text-sm font-medium">
                                50 Hours Milestone
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="shadow-md">
                        <CardContent className="flex flex-col items-center justify-center p-4">
                            <Users className="mb-2 text-primary" />
                            <p className="text-sm font-medium">
                                Consistent Volunteer
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <Card className="shadow-md">
                    <CardContent className="flex items-center justify-between p-4">
                        <div>
                            <p className="text-lg font-semibold">
                                Next Activity: Tree Planting Drive
                            </p>
                            <p className="text-sm text-muted-foreground">
                                March 15, 2025 - 9:00 AM
                            </p>
                        </div>
                        <Button>Join Now</Button>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white shadow-md">
                    <CardContent className="p-6 text-center">
                        <blockquote className="italic">
                            “Small acts, when multiplied by millions of people,
                            can transform the world.”
                        </blockquote>
                    </CardContent>
                </Card>

                <Card className="shadow-md">
                    <CardContent className="p-4 text-center">
                        <p className="text-sm">
                            You’ve impacted <strong>6 communities</strong> and
                            collaborated with <strong>4 NGOs</strong>.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
