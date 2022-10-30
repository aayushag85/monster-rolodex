//import { Component } from "react";
import './card.style.css';

const Card = (props) => {
const {monster} = props;
return(
    <div key={monster.id} className='card-container'>
            <img alt={`monster ${monster.name}`}
            src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
            />
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>

            </div>
)
}
// class Card extends Component{

//     render(){

//         const {monster} = this.props;
//         return(
//             <div key={monster.id} className='card-container'>
//                     <img alt={`monster ${monster.name}`}
//                     src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
//                     />
//                     <h2>{monster.name}</h2>
//                     <p>{monster.email}</p>

//                     </div>
//         )
//     }

// }

export default Card;