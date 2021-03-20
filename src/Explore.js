import React from 'react';
import './css/header.css';
import axios from  'axios';
import {InfoWithDev,InfoWithoutDev} from './AddDeveloperInfo';
import { render } from '@testing-library/react';

function ExploreTitle(){
    return (
        <div className='exploreDevTitle'>
            <div className='item' id='exploreItem1' >
                Explore developers profiles
            </div>
        </div>
    )
}

function SearchBar(props){
    <form onSubmit = {props.handleSubmit} >
        <div className='searchForm' >
            <input type='text' id='searchInput' onChange = {props.handleChange} />
            <input id='getDevBtn' type='image' alt='search' src='images/icons/search.svg' onClick = {props.handleClick} />
        </div>
    </form>
}

function DeveloperList(props){
    const devList = props.devList;
    console.log('devList : ', devList);
    const listItems = devList.map((item)=>{
        <li>
            <form>
                <div className='devInfoItem' >
                    <img id='devInfoItem1' src='images/icons/account_circle.svg' alt='Account' />
                    <div id='devInfoItem2'></div>
                    <img id='devInfoItem3' src='images/icons/north_east.svg' alt='Account link' />
                </div>
            </form>
        </li>
    })
}

class Explore extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            isDevPresent : false,
            devList : [],
            value : ''
        }
    }

    componentDidMount(){
        axios.get('/api/developers')
        .then(response => {
            console.log('response data : ', response.data);
            this.setState({devList : response.data});
        })
    }

    render(){
        return '';
    }

}

export default Explore;