import Thermometer  from './Themometer'

function App() {
  return (
    <div>
      <h1>Térmometro</h1>
      <div className='container'>
        <Thermometer percentage={40} />
      </div>
    </div>
  )
}

export default App
