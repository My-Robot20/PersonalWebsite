import React from 'react'
import Cards from './Cards'
import './HomeBody.css'
import {CardsData} from '../Data/CardsData';

function HomeBody() {


  return (
    <div className='home-Container'>
      <h1 className='cards-header'>Overview</h1>
      <div className='cards-Container'>
        {CardsData.map((myCards) => {
          console.log(myCards)
          return <Cards key={myCards.id} myCards={myCards}></Cards>
        })}
      </div>
    </div>
  );
}



export default HomeBody;



