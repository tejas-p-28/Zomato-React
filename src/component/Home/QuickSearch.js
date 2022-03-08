import React,{Component} from 'react';
import './QuickSearch.css'

class QuickSearch extends Component{
    render(){
        return(
            <div id="quicksearch">
                <span id="quickHeading" style={{textAlign: 'none'}}>Quick Search</span>
                <h1 id="quickSubHeading">Search Your Favorite Restaurants by Meal</h1>
                <div className="mainTile">
                    <div className="card" style={{width:'280px', display:'inline-block'}}>
                        <img className="card-img-top" src="https://i.ibb.co/SRn3qKP/sacks.png" alt="Snacks"/>
                        <div className="card-body">
                            <a className="card-title" href="listing.html">Snacks</a>
                            <div className="card-text">Enjoy your Snacks</div>
                        </div>
                    </div>
                    <div className="card" style={{width:'280px', display:'inline-block'}}>
                        <img className="card-img-top" src="https://i.ibb.co/NTxmQ3B/lunch.png" alt="Lunch"/>
                        <div className="card-body">
                            <a className="card-title" href="listing.html">Lunch</a>
                            <div className="card-text">Enjoy your Lunch</div>
                        </div>
                    </div>
                    <div className="card" style={{width:'280px', display:'inline-block'}}>
                        <img className="card-img-top" src="https://i.ibb.co/0s2ymvR/drinks.png" alt="Drinks"/>
                        <div className="card-body">
                            <a className="card-title" href="listing.html">Soft Drinks</a>
                            <div className="card-text">Enjoy your drinks</div>
                        </div>
                    </div>
                    <div className="card" style={{width:'280px', display:'inline-block'}}>
                        <img className="card-img-top" src="https://i.ibb.co/NTxmQ3B/lunch.png" alt="Lunch"/>
                        <div className="card-body">
                            <a className="card-title" href="listing.html">Lunch</a>
                            <div className="card-text">Enjoy your Lunch</div>
                        </div>
                    </div>
                    <div className="card" style={{width:'280px', display:'inline-block'}}>
                        <img className="card-img-top" src="https://i.ibb.co/p2VzqCs/samosa.jpg" alt="Burger"/>
                        <div className="card-body">
                            <a className="card-title" href="listing.html">Fastfood</a>
                            <div className="card-text">Enjoy your Fastfood</div>
                        </div>
                    </div>
                    <div className="card" style={{width:'280px', display:'inline-block'}}>
                        <img className="card-img-top" src="https://i.ibb.co/VgHnWQp/nightlife.png" alt="Nightlife"/>
                        <div className="card-body">
                            <a className="card-title" href="listing.html">Nightlife</a>
                            <div className="card-text">Enjoy your Nightlife</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuickSearch 