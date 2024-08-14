import "./App.css";
import Home from "./Component/Home";
import { Provider } from "react-redux";
import appStore from "./ReduxStore/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
