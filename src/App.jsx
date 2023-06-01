import AppClima from "./componentes/AppClima";
import { ClimaProvider } from "./context/ClimaProvider";

function App() {

  return (
    <ClimaProvider>
      <header>
        <h1>Weather Searcher</h1>
      </header>
      <AppClima />
    </ClimaProvider>
    
  )
}

export default App
