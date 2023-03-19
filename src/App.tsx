import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Canvas from './components/Canvas'
import ResultBox from './components/ResultBox'

function App() {
  const [pipeline, setPipeline] = useState<string[]>([]);
  const [result, setResult] = useState<Array<{}>>([]);

  return (
    <div>
      <Canvas pipeline={pipeline} setPipeline={setPipeline} result={result} setResult={setResult} />
      <br />
      <ResultBox value={result} />
    </div>
  )
}

export default App
