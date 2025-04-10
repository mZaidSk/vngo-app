import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ArrowUpCircleIcon } from "lucide-react";

function NgoSidebarHader() {
    return (
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
                            Acme Inc.
                        </span>
                    </a>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}

export default NgoSidebarHader;
