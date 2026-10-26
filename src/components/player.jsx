import { useState } from "react";

function Player({ name, symbol, setName}){
    const [actv, setActv] = useState(false); 
    const [playerName, setplayerName] = useState("");

    function handleClick(){
        setActv(true);
        setplayerName(name);
    }
    function handleplayerName(option){
        if(option === "save"){
            if (playerName.trim() === "") {
                alert("Name Cannot be Blank");
                return;
            }
            else{
                setName(playerName);
                setActv(false);
            }
        }
        else if(option === "cancel"){
            setActv(false);
        }
    }

    return(
        <li>
            <span className="player">
            <span className="player-name">
                {actv? <input 
                type="text" 
                value={playerName} 
                placeholder={name}
                onChange={(event) => {setplayerName(event.target.value)}}
                />
                : name}
            </span>
            <span className="player-symbol">{symbol}</span>
            </span>
            {actv? <button onClick={() => handleplayerName("save")} >Save</button>
            :  <button onClick={handleClick} >Edit</button>}
            {actv? <button onClick={() => handleplayerName("cancel")} >Cancel</button>: ""}
        </li>
    )
}

export default Player;