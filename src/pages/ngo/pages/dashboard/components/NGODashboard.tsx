import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
} from "recharts";

export default function NGODashboard() {
    const user = JSON.parse(localStorage.getItem("user") || "");

    const stats = [
        {
            title: "Total Donations",
            value: "$124,563",
            change: "+12.5% from last month",
            icon: "$",
        },
        {
            title: "Beneficiaries",
            value: "1,234",
            change: "+3.2% from last month",
            icon: "👥",
        },
        {
            title: "Active Projects",
            value: "23",
            change: "2 new this month",
            icon: "🛠️",
        },
        {
            title: "Volunteers",
            value: "456",
            change: "+5.3% from last month",
            icon: "🤝",
        },
    ];

    const activities = [
        {
            icon: "💰",
            title: "New donation received",
            description: "John Doe donated $1,000",
            time: "2 hours ago",
        },
        {
            icon: "🧑‍🤝‍🧑",
            title: "New volunteer registered",
            description: "Sarah Smith joined as a volunteer",
            time: "5 hours ago",
        },
        {
            icon: "📅",
            title: "Event Completed",
            description: "Food Distribution Drive",
            time: "1 day ago",
        },
    ];

    const donationData = [
        { month: "Jan", amount: 4000 },
        { month: "Feb", amount: 3000 },
        { month: "Mar", amount: 5000 },
        { month: "Apr", amount: 7000 },
        { month: "May", amount: 6000 },
        { month: "Jun", amount: 8000 },
    ];

    const projectDistribution = [
        { name: "Education", value: 400 },
        { name: "Healthcare", value: 300 },
        { name: "Environment", value: 300 },
        { name: "Food", value: 200 },
    ];

    const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f7f"];

    return (
        <div className="p-6 space-y-6 max-w-6xl mx-auto">
            {/* Header */}
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

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                    <Card key={index}>
                        <CardHeader className="flex flex-col gap-1">
                            <CardDescription className="flex items-center gap-2 text-sm text-gray-500">
                                <span>{stat.icon}</span> {stat.title}
                            </CardDescription>
                            <CardTitle className="text-2xl">
                                {stat.value}
                            </CardTitle>
                            <CardDescription className="text-green-600 text-sm">
                                {stat.change}
                            </CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Donation Trends Chart */}
                <Card className="h-64">
                    <CardHeader>
                        <CardTitle>Donation Trends</CardTitle>
                    </CardHeader>
                    <CardContent className="h-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={donationData}>
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="amount"
                                    stroke="#8884d8"
                                    strokeWidth={2}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Project Distribution Pie Chart */}
                <Card className="h-64">
                    <CardHeader>
                        <CardTitle>Project Distribution</CardTitle>
                    </CardHeader>
                    <CardContent className="h-full flex items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={projectDistribution}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    label
                                >
                                    {projectDistribution.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Activities */}
            <Card>
                <CardHeader>
                    <CardTitle>Recent Activities</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {activities.map((activity, index) => (
                            <li
                                key={index}
                                className="flex justify-between items-start"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="text-xl">
                                        {activity.icon}
                                    </div>
                                    <div>
                                        <p className="font-medium">
                                            {activity.title}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {activity.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-sm text-muted-foreground whitespace-nowrap">
                                    {activity.time}
                                </div>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
}
