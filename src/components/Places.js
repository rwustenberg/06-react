import React from 'react'

class Places extends React.Component {
	state = {places: [{name:"Harrys",price:"$3",location:"thailand"},{name:"888 pan asain",price:"$10",location:"Austin"},{name:"Seafood 'n eat it",price:"$15",location:"Auckland"},{name:"lewbowski bar",price:"$30",location:"iceland"}]}
	render() {
		return (
		<div>
		<h1>
			{this.state.places.length}
		</h1>
		<div class= "thumbnails">
		 {this.state.places.map((e) => <div> {e.name + " " + e.price + " " + e.location}</div>)}
		</div>
		</div>
		)
	}
}

export default Places
