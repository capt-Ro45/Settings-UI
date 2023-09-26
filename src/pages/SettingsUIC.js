import FinishSettingUpPageContainer from "../components/FinishSettingUpPageContainer";
import SubscriptionForm from "../components/SubscriptionForm";
import "./SettingsUIC.css";
const SettingsUIC = () => {
  return (
    <div className="settings-ui-c">
      <div className="settings-ui-c-child" />
      <FinishSettingUpPageContainer />
      <SubscriptionForm />
    </div>
  );
};

export default SettingsUIC;
