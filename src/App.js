//import { Component } from 'react'; // import Component class from react to create a class based component
//import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import CardList  from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';




const App = ()=>{
    
    const [searchField, setSearchField]=useState(''); //useState returns [value, setValue]
    const [monsters, setMonsters]=useState([]); //useState returns [value, setValue]
    const [filteredMonsters, setFilteredMonsters]=useState(monsters);
    const onSearchFunction=(event)=>{
    const searchFieldString=event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json()).then(users=>{
      setMonsters(users);
    });
    },[]);
    
    useEffect(()=>{
      const filteredMonsterList=monsters.filter((monster) => {
        return monster.name.toLowerCase().includes(searchField);
      })
      setFilteredMonsters(filteredMonsterList);

    },[monsters,searchField]);

    
  return(
    <div className="App">
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox onChangeHandler={onSearchFunction} 
      placeholder='Search Monsters' 
      className='monster-search-box'/>

      <CardList monsters={filteredMonsters}/>
    </div>  
  );

}
// class App extends Component{ // Your class needs to extend the  Component class imported from react
//   constructor(){ // not needed but if done then super(); needs to be called
//     super();
//     // this is the state variable it is JSON object with Key value pairs
//     // this.state = {
//     //   name: { firstname: 'Ajay', lastname: 'Devgan'},
//     //   company: 'Majesco',
//     // };
//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }

//   componentDidMount(){
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response=>response.json()).then(users=>{
//       this.setState(()=>{
//         return( {monsters: users});
//       })
//     });
//   }
  
//   onSearchFunction=(event)=>{
//     const searchString=event.target.value.toLowerCase();
//     this.setState(()=>{
//     return {searchField: searchString};
//   });            
//   };
//   // Provided by component class
//   render(){
//     const {monsters, searchField}=this.state;
//     const filteredMonsters=monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });
//     return (
      
//       <div className="App">
//         <h1 class='app-title'>Monster Rolodex</h1>
//         <SearchBox onChangeHandler={this.onSearchFunction} placeholder='Search Monsters' className='monster-search-box'/>
        
//         {/* {filteredMonsters.map( (monster)=> {
//           return(
//             <h1 key={monster.id}>{monster.name}</h1>
//           ); 
//         })}; */}

//         <CardList monsters={filteredMonsters}/>
       
//       </div>
//     );  
//   }
// }

/***
 * The basic explaination of state variable in react
 * 
 */
 {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> Hi from {this.state.name.firstname} {this.state.name.lastname}, I work at {this.state.company}</p>
          <button onClick={()=>{
            
            //setState function
            //this function setState does the shallow merging of state variable on basis of keys
            //It won't care what type was there previously for given key it just merges new value
            //Way 1: directly changing state variable
            
            
            //this.setState({ name: { firstname: 'Aayush', lastname: 'Agrawal'}}); 

            //Way 2: Changing via function and callback function
            // first argument is the function to be executed takes state, props as arguments
            // second is callback function, optional here. React opteration happens in asynchronous way
            // as a result callback is needed if something needs to happen after execution of 1st function
            this.setState( ()=>{
              return(
                { name: { firstname: 'Aayush', lastname: 'Agrawal'}}
              );
            }, ()=>{
              console.log(this.state);
             });
              

          }}>Change Name</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}

/**
 * The basic react hook provided initially with the react app when generated by create-react-app npm
 * 
 */
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;