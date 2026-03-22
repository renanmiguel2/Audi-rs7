import Car from "./components/Colorstocar/Car"
import Description from "./components/Desc/Description"
import Desempenho from "./components/Desempenho/Desempenho"
import Footer from "./components/Footer/Footer"
import Header from "./components/Hero/Header"
import Hero from "./components/Hero/Hero"
import Project from "./components/Project/Project"
import Tecnologia from "./components/Tecnologia/Tecnologia"


function App() {

  return (
    <div>
      <Header />
      <Hero />
      <Description />
      <Car />
      <Project />
      <Desempenho />
      <Tecnologia />
      <Footer />
    </div>
  )
}

export default App
