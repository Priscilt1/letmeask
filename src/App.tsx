import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

function App() {
  return (
    <BrowserRouter>
      {/* exact para não pegar as outras rotas que tenha / */}
      <Route path='/' exact component={Home} /> 
      <Route path='/rooms/new' component={NewRoom} />
    </BrowserRouter>
  )
}

export default App;
