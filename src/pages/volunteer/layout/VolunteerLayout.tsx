import { Outlet } from "react-router-dom";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { logout } from "@/store/slice/AuthSlice";
import { Breadcrumbs } from "@/pages/ngo/components/header/Breadcrumbs";

import { Bell, User } from "lucide-react";
import { VolunteerSidebar } from "../sidebar/VolunteerSidebar";

const VolunteerLayout = () => {
    const dispatch = useDispatch<AppDispatch>();
    const authSelector = useSelector((state: RootState) => state.auth.user);

    const logOut = () => {
        dispatch(logout());
        window.location.reload();
    };

    return (
        <SidebarProvider>
            <VolunteerSidebar />
            <SidebarInset>
                <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-16 flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear sticky top-0 bg-white z-50">
                    <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6 justify-between">
                        {/* Left Side */}
                        <div className="flex items-center gap-2">
                            <SidebarTrigger className="-ml-1" />
                            <Separator
                                orientation="vertical"
                                className="mx-2 data-[orientation=vertical]:h-4"
                            />
                            <Breadcrumbs />
                        </div>

                        {/* Right Side */}
                        <div className="flex items-center gap-4">
                            {/* Notifications */}
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="relative"
                                    >
                                        <Bell className="h-5 w-5" />
                                        <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 animate-ping" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>
                                        Notifications
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        New event assigned
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        NGO liked your profile
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Certificate available
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            {/* Avatar */}
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Avatar className="cursor-pointer">
                                        <AvatarFallback className="bg-gray-100 flex items-center justify-center">
                                            <User className="w-6 h-6 text-gray-500" />
                                        </AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    align="end"
                                    className="w-64"
                                >
                                    <DropdownMenuLabel>
                                        <div className="flex items-center gap-3">
                                            <Avatar className="w-10 h-10">
                                                <AvatarFallback className="bg-gray-100 flex items-center justify-center">
                                                    <User className="w-5 h-5 text-gray-500" />
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="text-sm">
                                                <div className="font-medium">
                                                    {authSelector?.data?.name}
                                                </div>
                                                <div className="text-muted-foreground">
                                                    {authSelector?.data?.email}
                                                </div>
                                            </div>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Profile</DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Settings
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={logOut}>
                                        Logout
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </header>

                <div>
                    <Outlet />
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
};

export default VolunteerLayout;
