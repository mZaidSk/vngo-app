import { Outlet } from "react-router-dom";

import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { NgoSidebar } from "../components/sidebar/NgoSidebar";

const NgoLayout = () => {
    return (
        <SidebarProvider>
            <NgoSidebar />
            <SidebarInset>
                <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-16 flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear sticky top-0 bg-white">
                    <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mx-2 data-[orientation=vertical]:h-4"
                        />
                        <h1 className="text-base font-medium">Documents</h1>
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 pt-0 bg-amber-100 ">
                    <Outlet />
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
};

export default NgoLayout;
