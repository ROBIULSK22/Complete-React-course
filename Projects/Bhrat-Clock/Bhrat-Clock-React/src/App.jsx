import './App.css'
import BharatClock from './Components/BharatClock';
import ClockSlogan from './Components/ClockSlogan';
import CurrentTime from './Components/CurrentTime';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
 

  return <center>
    <BharatClock></BharatClock>
    <ClockSlogan></ClockSlogan>
    <CurrentTime></CurrentTime>
  </center>
}

export default App;
