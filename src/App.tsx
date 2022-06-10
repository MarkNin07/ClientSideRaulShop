import { BrowserRouter } from "react-router-dom"
import StockistForm from "./components/StockistForm"
import PrivateRoutes from "./routes/PrivateRoutes"


function App() {

  return (
    <div>
      <BrowserRouter>
      <PrivateRoutes />
      <footer>
        This is my footer
      </footer>
      </BrowserRouter>
    </div>
  )
}

export default App
