import React,{Component} from "react";
import CardList from "../components/CardList.js";
import SearchBox from '../components/Searchbox.js'
import Scroll from '../components/Scroll.js'
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';
// import { robots } from "./robots";


// const state = {
//     robots:robots,
//     searchfield:''
// }
class App extends Component{
    constructor(){
        super()
        this.state = {
            robots:[],
            searchfield:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
         .then(response =>  response.json())
         .then(users => this.setState({robots: users})); 
        

    }
    
    onSearchChange=(event)=>{
       this.setState({searchfield:event.target.value})
       
        
    }
    
    render(){
        const filteredRobots = this.state.robots.filter(robots=>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
    if (this.state.robots.lenght === 0 ){
        return<h1>Loading</h1>

    }else{
    return (
        <div className="tc">
         <h1 className = 'f1'>RoboFriends</h1>
         <SearchBox searchChange={this.onSearchChange}/>
         <Scroll>
            <ErrorBoundry>
             <CardList robots = {filteredRobots}/>
            </ErrorBoundry>
         </Scroll>
        </div>
    );
  }
 }
}

export default App;