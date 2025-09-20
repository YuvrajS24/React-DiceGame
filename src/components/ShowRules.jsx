import styled from "styled-components"

const ShowRules = () => {
  return (

    <>

    <ShowRulesContainer>

     <h1>How To Play Dice Game</h1>
     <ul>
        <li>Select any number</li>
        <li>Click any dice image</li>
        <li>Select any number</li>
        <li>after click on  dice  if selected number is equal to dice number you will get same point as dice </li>
        <li>if you get wrong guess then  2 point will be dedcuted </li>
     </ul>
      

    </ShowRulesContainer>

    </>
  )
}

export default ShowRules


const ShowRulesContainer = styled.div`
    
  
    background-color: #FBF1F1;
    width: 208px;
    height: 494px;
   
    line-height: 30px;
    display: flex;
    flex-direction: column;
   
 h1{
  text-align: center;
 }

    ul li{
        font-size:20px;
        
    }

`
