import { Outlet } from "react-router-dom";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { NgoSidebar } from "../components/sidebar/NgoSidebar";
import { Breadcrumbs } from "../components/header/Breadcrumbs";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { logout } from "@/store/slice/AuthSlice";

const NgoLayout = () => {
    const dispatch = useDispatch<AppDispatch>();
    const authSelector = useSelector((state: RootState) => state.auth.user);

    const logOut = () => {
        dispatch(logout());
        window.location.reload();
    };

    return (
        <SidebarProvider>
            <NgoSidebar />
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

                        {/* Right Side: Notification & Profile */}
                        <div className="flex items-center gap-4">
                            {/* Notification Bell */}
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
                                        New project assigned
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Volunteer joined your event
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        NGO profile updated
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            {/* Profile Avatar */}
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Avatar className="cursor-pointer">
                                        <AvatarImage
                                            src={
                                                authSelector?.data?.profile
                                                    ?.logo_url
                                            }
                                        />
                                        <AvatarFallback>
                                            {authSelector?.data?.profile?.organization_name?.slice(
                                                0,
                                                2
                                            )}
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
                                                <AvatarImage
                                                    src={
                                                        authSelector?.data
                                                            ?.profile?.logo_url
                                                    }
                                                />
                                                <AvatarFallback>
                                                    {authSelector?.data?.profile?.organization_name?.slice(
                                                        0,
                                                        2
                                                    )}
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

                <div className="flex flex-1 flex-col gap-4 pt-0">
                    <Outlet />
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
};

export default NgoLayout;
