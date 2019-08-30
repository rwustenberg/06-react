import React from 'react';
import '../styles/Thumbnail.css'


class Thumbnail extends React.Component {
	state = {
		place: this.props.place}
	render() {
		return (
			<div className="Thumbnail">
				<h3>{this.props.place.name}</h3>
				<span>{this.props.place.price} {this.props.place.location}</span>
			</div>
		)
	}
}

export default Thumbnail
