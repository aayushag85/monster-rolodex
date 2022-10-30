import { Component } from "react";
import Card  from '../card/card.component';
import './card-list.style.css';
import './card.style.css';


const CardList= (props)=>{

    const {monsters} = props;    
    return(
    <div className='card-list'>
            {monsters.map( (monster) => {
               return (
                <Card monster={monster}></Card>
               );
               //{<h1 key={monster.id}>{monster.name}</h1>};
            })}
    </div>
    );


}

// class CardList extends Component{

//     render(){
//         const {monsters} = this.props;    
//         return(
//         <div className='card-list'>
//                 {monsters.map( (monster) => {
//                    return (
//                     <Card monster={monster}></Card>
//                    );
//                    //{<h1 key={monster.id}>{monster.name}</h1>};
//                 })}
//         </div>
//         );
//     }
// }

export default CardList;