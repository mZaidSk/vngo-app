import { Outlet } from "react-router-dom";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Sidebar } from "@/components/ui/sidebar";
import {
  HomeIcon,
  SearchIcon,
  CalendarIcon,
  AwardIcon,
  SettingsIcon,
  ClipboardListIcon,
} from "lucide-react";

const VolunteerSidebar = () => {
  const menuItems = [
    { label: "Dashboard", icon: <HomeIcon className="h-4 w-4" /> },
    { label: "Feed", icon: <SearchIcon className="h-4 w-4" /> },
    {
      label: "Explore NGOs",
      icon: <ClipboardListIcon className="h-4 w-4" />,
    },
    { label: "My Events", icon: <CalendarIcon className="h-4 w-4" /> },
    { label: "Certificates & Badges", icon: <AwardIcon className="h-4 w-4" /> },
    { label: "Settings", icon: <SettingsIcon className="h-4 w-4" /> },
  ];

  return (
    <Sidebar className="w-64 border-r bg-white p-4">
      <div className="text-lg font-bold mb-4">VolunteerHub</div>
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li
            key={item.label}
            className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 cursor-pointer"
          >
            {item.icon}
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </Sidebar>
  );
};

const VolunteerLayout = () => {
  return (
    <SidebarProvider>
      <VolunteerSidebar />
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
        <div className="flex flex-1 flex-col gap-4 pt-0 bg-[#E6F4EA] ">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default VolunteerLayout;
