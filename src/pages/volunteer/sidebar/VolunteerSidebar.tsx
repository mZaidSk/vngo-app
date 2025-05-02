import * as React from "react";
import {
    HomeIcon,
    SearchIcon,
    CalendarIcon,
    AwardIcon,
    SettingsIcon,
    ClipboardListIcon,
    ArrowUpCircleIcon,
    UserPlus,
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar";
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { VolunteerSidebarMain } from "./VolunteerSidebarMain";

const volunteerSidebarData = {
    main: [
        {
            title: "Dashboard",
            url: "/volunteer",
            icon: HomeIcon,
        },
        {
            title: "Feed",
            url: "/volunteer/feed",
            icon: SearchIcon,
        },
        {
            title: "Explore NGOs",
            url: "/volunteer/explore",
            icon: ClipboardListIcon,
        },
        {
            title: "My Activity",
            url: "/volunteer/activity",
            icon: CalendarIcon,
        },
        {
            title: "Profile",
            url: "/volunteer/profile",
            icon: UserPlus,
        },
        {
            title: "Settings",
            url: "/volunteer/settings",
            icon: SettingsIcon,
        },
    ],
};

export function VolunteerSidebar({
    ...props
}: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            size="lg"
                            asChild
                            className="data-[slot=sidebar-menu-button]:!p-1.5 bg-black hover:bg-zinc-500 hover:text-white text-white"
                        >
                            <Link to="/">
                                <ArrowUpCircleIcon className="h-5 w-5" />
                                <span className="text-base font-semibold">
                                    VolunteerHub
                                </span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <VolunteerSidebarMain items={volunteerSidebarData.main} />
            </SidebarContent>

            {/* <SidebarFooter>
        <VolunteerSidebarFooter />
      </SidebarFooter> */}

            <SidebarRail />
        </Sidebar>
    );
}
