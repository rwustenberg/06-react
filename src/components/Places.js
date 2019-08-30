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
				location:"Koh Samui"
			},{
				name:"888 Pan Asain",
				price:"$10",
				location:"Austin"
			},{
				name:"Seafood 'n eat it",
				price:"$15",
				location:"Auckland"
			},{
				name:"Lewbowski Bar",
				price:"$30",
				location:"Iceland"
			},{
				name:"Flat Iron Grill",
				price: "$20",
				location: 'Atlanta'
			},{
				name: "Casa De Toño",
				price: "$5",
				location: "Mexico City"
			}

		]
	}
	render() {
		return (
		<div className="grid-container">
			<h1>
				{this.state.places.length}
			</h1>
			<div className= "thumbnails">
		 		{this.state.places.map((e, i) =>
					<Thumbnail key= {i} place = {e} />)}
			</div>
			<Favourites />
		</div>
		)
	}
}

export default Places
