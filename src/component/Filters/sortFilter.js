import React,{Component} from 'react';
import axios from 'axios';

const url = "https://zomatotejas.herokuapp.com/filter";

class SortFilter extends Component {

    filterSort = (event) => {
        let mealId = this.props.mealId
        let cost = (event.target.value).split('-');
        let lcost = cost[0];
        let hcost = cost[1];
        let costUrl = ""
        if(event.target.value === ""){
            costUrl = `${url}/${mealId}?lcost=${lcost}&hcost=${hcost}`
        }else{
            costUrl = `${url}/${mealId}?hcost=${hcost}&lcost=${lcost}`
        }
        axios.get(costUrl)
        .then((res) => {this.props.restPerSort(res.data)})
    }
    render(){
        return(
            <>
                <center>Sort Filter</center>
                <div style={{marginLeft:'15%'}} onChange={this.filterSort}>
                    <label className="radio">
                        <input type="radio" value="" name="cuisine"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="100-300" name="cuisine"/>Low to High 
                    </label>
                    <label className="radio">
                        <input type="radio" value="301-500" name="cuisine"/>High to Low
                    </label>
                </div>
                
            </>
        )
    }
}

export default SortFilter