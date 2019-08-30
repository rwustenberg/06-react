import React from 'react'
import '../styles/Places.css'
import Favourites from './Favourites'
import Thumbnail from './Thumbnail'

class Places extends React.Component {
	state = {
		places: [
			{
				name:"Harrys",
				price:"$3",
				location:"thailand"
			},{
				name:"888 pan asain",
				price:"$10",
				location:"Austin"
			},{
				name:"Seafood 'n eat it",
				price:"$15",
				location:"Auckland"
			},{
				name:"lewbowski bar",
				price:"$30",
				location:"iceland"
			},{
				name:"flat iron grill",
				price: "$20",
				location: 'Atlanta'
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
