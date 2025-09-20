import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import styled from "styled-components"
import RollDice from "./RollDice"
import ShowRules from "./ShowRules"
import { useState } from "react"



 
const GamePlay = () => {
     
    const [score,SetScore]= useState(0);
    const [selectedNumber,setselectedNumber]=useState();
    const[currentDice,setCurrentDice]=useState(1);
    const [error,setError]=useState();

 
 
  const [showRules,setShowRules] =useState(false)

  

  const randomNumbergenerator = (min,max)=>{
       
   return Math.floor(Math.random() * (max - min ) + min);
  }

  const RolllDice = ()=>{
     
    if(!selectedNumber){


      setError("You have not selected any Number!")


   


      return;
    } 




    const RandomNumber=randomNumbergenerator(1,7);
    setCurrentDice(RandomNumber);

      if(selectedNumber==RandomNumber){
    SetScore((prev)=>prev+RandomNumber);

  }
  else{
    SetScore((prev)=>prev-2);

  }

  setselectedNumber(undefined);

  }



   
  return (
    <>

    <MainContainer>
      
      <div className="top_section">
        
      <TotalScore score={score}/>
      <NumberSelector setError={setError} selectedNumber={selectedNumber} setselectedNumber={setselectedNumber}/>
      

     </div>

    </MainContainer>


<BigContainer>

    <MiddleContainer>

       <RollDice error={error}  currentDice={currentDice} RolllDice={RolllDice}/>

      <ButtonContainer>

      <button className="b1" onClick={()=>SetScore(0)}>RESET SCORE</button>
      <button onClick={()=>setShowRules((prev)=>!prev)}  className="b2"> {showRules? "HIDE RULES" : "SHOW RULES"}</button>
      

     </ButtonContainer>

     </MiddleContainer>

     <RuleContainer>

     { showRules && <ShowRules /> } 

      </RuleContainer>   

   </BigContainer>

    
    </>
  )
}

export default GamePlay


const MainContainer = styled.div`

.top_section{

  display: flex;
  justify-content: space-between;
  align-items:start;
  
}`

const MiddleContainer =styled.div`
  
  display: flex;
  flex-direction: column;
`

const ButtonContainer = styled.div`
  


  display: flex;
flex-direction: column;
align-items: center;
gap:10px;

 max-width: 270px;  
  margin: 0 auto;    




.b1{

   background-color:white;
  color:black;
  min-width:200px;
  height: 44px;
  border-radius:10px;
  cursor: pointer;


}


.b1:hover {
  background-color:black;
  color:white;
}


.b2{

   background-color:white;
  color:black;
  min-width:200px;
  height: 44px;
  border-radius:10px;
  cursor: pointer;


}

.b2:hover {
  background-color:black;
  color:white;
}

`

const BigContainer = styled.div`


display: flex;
justify-content: center;
width: 100%;
height:100vh;
position: relative;

`

const RuleContainer= styled.div`

position: absolute;
top:0px;
right:0px;

` 







