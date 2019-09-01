import React from 'react'
import '../styles/Places.css'
import Favourites from './Favourites'
import Thumbnail from './Thumbnail'

class Places extends React.Component {
	state = {
		places: [
			{
				name:"Harry's",
				price:"$3",
				location:"Koh Samui",
				liked: true
			},{
				name:"888 Pan Asain",
				price:"$10",
				location:"Austin",
				liked: false
			},{
				name:"Seafood 'n eat it",
				price:"$15",
				location:"Auckland",
				liked: true
			},{
				name:"Lewbowski Bar",
				price:"$30",
				location:"Iceland",
				liked: true
			},{
				name:"Flat Iron Grill",
				price: "$20",
				location: 'Atlanta',
				liked: false
			},{
				name: "Casa De Toño",
				price: "$5",
				location: "Mexico City",
				liked: true
			}
		]
	}

	likedPlace = (place) => {
		let newPlaces = this.state.places.map((p)=> {
			// If this is the place we want to change
			if(p === place) {
				// Then change it
				let newPlace = Object.assign({}, p)
				newPlace.liked = !newPlace.liked
				return newPlace
			}
			// Otherwise just return the place as we don't want to modify it
			return p
		})
		this.setState({
			places: newPlaces,
		})
	}

	render() {
		return (
		<div className="grid-container">
			<h1>
				{this.state.places.length}
			</h1>
			<div className= "thumbnails">
		 		{this.state.places.map((e, i) =>
					<Thumbnail key= {i} place = {e} likedPlace = {this.likedPlace}/>)}
			</div>
			<Favourites places={this.state.places.filter((p) => p.liked)}/>
		</div>
		)
	}
}

export default Places
