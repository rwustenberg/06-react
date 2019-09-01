//i did 060301 and 060302 in the wrong order sorry!
import React from 'react'
import '../styles/Favourites.css'
import Thumbnail from './Thumbnail'

class Favourites extends React.Component {
	render() {
		return (
			<div className= "favourites">
				{this.props.places.map((p, index) => <Thumbnail place={p} key={index} />)}
			</div>
		)
	}
}

export default Favourites
