import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { AuthContextProvider } from "./contexts/AuthContext";
import { Room } from "./pages/Room";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        {/* switch para nao pegar duas rotas ao mesmo tempo */}
        <Switch>
          {/* exact para não pegar as outras rotas que tenha / */}
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
