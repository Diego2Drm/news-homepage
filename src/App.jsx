import { Footer } from "./components/Footer/Footer"
import { Nav } from "./components/Header/Nav"
import { BrightInfo } from "./components/main/brightInfo"

function App() {

  return (
    <section className="container py-2">
      <Nav />
      <BrightInfo />
      <Footer />

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/Diego2Drm/news-homepage">Diego Ramírez</a>.
      </div>
    </section>
  )
}

export default App
