import styled from "styled-components"

const RollDice = ({error,currentDice,RolllDice}) => {

  




  return (


    <DiceContainer >

      <div >
   

   
      <p className="error">{error}</p>
    <img onClick={RolllDice} className="image" src={`./images/dice/dice_${currentDice}.png`}/>
    
    <p className="para">Click On the Dice to Roll</p>


    </div>
      
    </DiceContainer>

  )
}

export default RollDice


const DiceContainer = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

 max-width: 270px;  
  margin: 0 auto;    


  .error{
    color: red;
    margin-left: 10px;
    font-size: 17px;
  }


.image{
  cursor: pointer;
  width: 250px;
  height: 250px;
}

.para{
  font-size: 24px;
  font-family: "Poppins","sans-serif";
  font-weight: 600;
  
}


`