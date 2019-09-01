import React from 'react';
import '../styles/Thumbnail.css'


class Thumbnail extends React.Component {
	// likedPlace = () => {
	// 	if(!this.state.liked){
	// 		this.setState( {
	// 			liked: true
	// 		})
	// 	} else {
	// 		this.setState( {
	// 			liked: false
	// 		})
	// 	}
	// }
	newStateOfPlace = () => {
		this.props.likedPlace(this.props.place)
	}



	render() {
		return (
			<div className="Thumbnail">
				<h2>{this.props.place.name}</h2>
				<h4>{this.props.place.price}</h4>
				<h3>{this.props.place.location}</h3>
				<button onClick={this.newStateOfPlace} className={this.props.place.liked ? 'liked': ''}>
						{this.props.place.liked ? 'LIKED' : 'LIKE ME'}
				</button>
			</div>
		)
	}
}

export default Thumbnail
