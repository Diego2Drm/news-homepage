import { Footer } from "./components/Footer/Footer"
import { Nav } from "./components/Header/Nav"
import { BrightInfo } from "./components/main/brightInfo"

function App() {

  return (
    <div className="container py-2">
      <Nav />
      <BrightInfo />
      <Footer />
    </div>
  )
}

export default App
