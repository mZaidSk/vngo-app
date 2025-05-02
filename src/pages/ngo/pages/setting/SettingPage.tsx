import { Route, Routes } from "react-router-dom";
import GeneralSetting from "./components/GeneralSetting";
import SettingLayout from "./layouts/SettingLayout";
import PrivacyPolicySetting from "./components/PrivacyPolicySetting";
import TermsConditions from "./components/TermsConditionsSetting";
import AccountSetting from "./components/AccountSetting";

interface MenuItem {
    label: string;
    icon: React.ElementType;
    to: string;
}

const SettingPage = ({ menuItems }: { menuItems: MenuItem[] }) => {
    return (
        <Routes>
            <Route element={<SettingLayout menuItems={menuItems} />}>
                <Route path="/" element={<GeneralSetting />} />
                <Route
                    path="/privacy-policy"
                    element={<PrivacyPolicySetting />}
                />

                <Route path="/terms-conditions" element={<TermsConditions />} />
                <Route path="/security" element={<AccountSetting />} />
            </Route>
        </Routes>
    );
};

export default SettingPage;
