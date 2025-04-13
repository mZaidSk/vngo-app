import { NavLink, Outlet } from "react-router-dom";

const sections = [
  { name: "Profile", path: "" },
  { name: "Security", path: "security" },
  { name: "Notifications", path: "notifications" },
  { name: "Privacy", path: "privacy" },
  { name: "Account Actions", path: "account-actions" },
];

export default function SettingsLayout() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-60 p-4 border-r bg-white space-y-2">
        {sections.map((section) => (
          <NavLink
            key={section.name}
            to={section.path}
            end
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-gray-200 font-semibold" : "text-gray-700"
              }`
            }
          >
            {section.name}
          </NavLink>
        ))}
      </aside>

      {/* Outlet for section pages */}
      <div className="flex-1 p-6 bg-[#F5FFFA]  min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}
