import { PrimeReactProvider } from 'primereact/api';
import { Button } from 'primereact/button';


function App() {

  return (
    <PrimeReactProvider>
        <h1 className="text-red-300 text-center">Hello World</h1>
    </PrimeReactProvider>
  )
}

export default App
