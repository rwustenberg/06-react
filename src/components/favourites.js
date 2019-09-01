//i did 060301 and 060302 in the wrong order sorry!
import React from 'react'
import '../styles/Favourites.css'
import Thumbnail from './Thumbnail'

class Favourites extends React.Component {
	state = {
		places: this.props.places
	}
	render() {
		return (
			<div className= "favourites">
				{this.state.places.map((p) => <Thumbnail place={p} liked= {this.props.liked} />)}
			</div>
		)
	}
}

export default Favourites
