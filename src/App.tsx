import React from "react";
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore";
import Routes from "./components/Routes";

function App() {
  return (
    <Provider store={appStore}>
      <Routes />
    </Provider>
  );
}

export default App;
