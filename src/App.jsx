import './App.css'
import Bracket from './Bracket'

function App() {

  return (
    <>
      <Bracket
        doNotSeed={false}
        manualContenders={['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']}
      />
    </>
  )
}

export default App
