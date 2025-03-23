import { useState, useEffect } from "react";
import { genTicket } from "./helper";
import Ticket from "./Ticket";
import "./Lottery.css";
import winSound from "/win.wav";


export default function Lottery({n=3, winCondition}){
    let [ticket, setTicket]= useState(genTicket(n));
    let [hasPlayed, setHasPlayed] = useState(false); // Tracks if user has clicked the buy ticket button
    let [isWinning, setIsWinning] = useState(false);



    let buyTicket= () => {
        const newTicket = genTicket(n);
        setTicket(newTicket);
        setHasPlayed(true); // Set to true after the first click

        const winning = winCondition(newTicket);
        setIsWinning(winning);

        if (winning) {
            playWinSound();
        }
    }

    const playWinSound = () => {
        const audio = new Audio(winSound);
        audio.play();
    };


    return(
        <div className={`mainDiv ${isWinning ? "flash" : ""}`}>
        
            <div className="mainDiv">
                <h1>Lottery Game💸</h1>
                <Ticket ticket={ticket}/>
                <button onClick={buyTicket}>Buy New ticket</button>
                
                
                {/* Show message only after first click */}

                {hasPlayed && (isWinning ? (
                    <h3 id="winMsg">🎉Congratulations, you won!🎉🎊</h3>
                ) : (
                    <h3 id="loseMsg">Oops, Try Again!😞</h3>
                ))}


                <p> (<b>Win Condition:</b> Sum of all digits of the ticket should be = 15)</p>
                
                
            </div>

            <footer>
                <p>Made with ❤️ by Ankit Nautiyal</p>
            </footer>
        </div>
    );
};