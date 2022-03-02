import React from 'react'
import './card-list.styles.css'
import Card from '../card/card.component'
export const  CardList = (props)=>(

  <div className='card-list'>  {
    props.monsters.map(monster => (
      <Card key={monster.id} monster={monster}/>
    ))
    }
   
  </div>
);

// import React from 'react'
// import ''
// const card_list.component = () => {
//   return (
//     <div>card_list.component</div>
//   )
// }

// export default card_list.component