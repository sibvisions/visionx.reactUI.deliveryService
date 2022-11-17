import React, { FC } from 'react';
import { ReactUI, useAPI } from '@sibvisions/reactui';
import './App.scss';
import ScreenWrapperRestaurants from './screen-wrappers/ScreenWrapperRestaurants';
import CustomRestaurantScreen from './CustomRestaurantScreen';

const App: FC = () => {
  const api = useAPI();

  const onLogin = () => {
    if (api.getUser().userName === "admin") {
      api.addCustomScreen("PartnerImages", <CustomRestaurantScreen />);
      api.addScreenWrapper("Res-O3", <ScreenWrapperRestaurants />);
    }
  }

  const onMenu = () => {
    api.addMenuItem({
      id: "PartnerImages",
      text: "Partner Images",
      menuGroup: "Custom Screens",
      icon: ""
    })
  }

  return (
    <ReactUI onLogin={onLogin} onMenu={onMenu} />
  );
}

export default App;
