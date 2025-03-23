import './App.css'
import { sum } from './helper';
import Lottery from './Lottery.jsx';


function App() {

  // CONDITION FOR SUM OF ALL NO.S IN TICKET SHD BE= 15 TO WIN
  let winCondition= (ticket) =>{
    return sum(ticket)===15;
  }

  //CONDITION FOR EACH NO. OF THE TICKET TO BE EQUAL TO WIN
  // let winCondition= (ticket) =>{
  //   return ticket.every((num) => num === ticket[0]);
  // }

  return (
    <>
      

      <Lottery n={3} winCondition={winCondition} />

    </>
  )
}

export default App
