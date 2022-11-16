import React, { FC } from 'react';
import { ReactUI, useAPI } from '@sibvisions/reactui';
import './App.scss';
import ScreenWrapperRestaurants from './screen-wrappers/ScreenWrapperRestaurants';

const App: FC = () => {
  const api = useAPI();

  const onLogin = () => {
    if (api.getUser().userName === "admin") {
      api.addScreenWrapper("Res-O3", <ScreenWrapperRestaurants />)
    }
  }

  return (
    <ReactUI onLogin={onLogin} />
  );
}

export default App;
