import * as React from "react";
import {
    LayoutDashboard,
    Newspaper,
    User,
    Activity,
    Settings2,
    ArrowUpCircleIcon,
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar";

import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NgoSidebarFooter } from "./NgoSidebarFooter";
import { NgoSidebarMain } from "./NgoSidebarMain";

// Updated sidebar data
const data = {
    main: [
        {
            title: "Dashboard",
            url: "/ngo",
            icon: LayoutDashboard,
        },
        {
            title: "Feed",
            url: "/ngo/feed",
            icon: Newspaper,
        },
        {
            title: "Profile",
            url: "/ngo/profile",
            icon: User,
        },
        {
            title: "Activities",
            url: "/ngo/activities",
            icon: Activity,
        },
        {
            title: "Settings",
            url: "/ngo/settings",
            icon: Settings2,
        },
    ],
};

export function NgoSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            size="lg"
                            asChild
                            className="data-[slot=sidebar-menu-button]:!p-1.5"
                        >
                            <a href="#">
                                <ArrowUpCircleIcon className="h-5 w-5" />
                                <span className="text-base font-semibold">
                                    NGO Portal
                                </span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NgoSidebarMain items={data.main} />
            </SidebarContent>
            <SidebarFooter>
                <NgoSidebarFooter />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
