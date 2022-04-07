import React,{Component} from 'react';
import axios from 'axios';

const url = "https://zomatotejas.herokuapp.com/filter";

class SortFilter extends Component {

    filterSort = (event) => {
        let cuisineId = this.props.cuisineId;
        let mealId = this.props.mealId
        let sort = "";
        let sortUrl = ""
        if(event.target.value === ""){
            sortUrl = `${url}/${mealId}`
        }else{
            sortUrl = `${url}/${mealId}?cuisineId=${cuisineId}&sort=${sort}`
        }
        axios.get(sortUrl)
        .then((res) => {this.props.restPerSort(res.data)})
    }
    render(){
        return(
            <>
                <center>Sort Filter</center>
                <div style={{marginLeft:'15%'}} onChange={this.filterSort}>
                    <label className="radio">
                        <input type="radio" value="" name="sort"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1" name="lowtohigh"/>Low to High 
                    </label>
                    <label className="radio">
                        <input type="radio" value="-1" name="hightolow"/>High to Low
                    </label>
                </div>
                
            </>
        )
    }
}

export default SortFilter