import React from 'react';
import '../styles/Thumbnail.css'


class Thumbnail extends React.Component {
	state = {
		liked: false
	}
	likePlace = () => {
		if(!this.state.liked){
			this.setState( {
				liked: true
			})
		} else {
			this.setState( {
				liked: false
			})
		}
		console.log(this.state.liked)
	}


	render() {
		return (
			<div className="Thumbnail">
				<h2>{this.props.place.name}</h2>
				<h4>{this.props.place.price}</h4>
				<h3>{this.props.place.location}</h3>
				<button onClick={this.likePlace} className={this.state.liked ? 'liked': ''}>
						{this.state.liked ? 'LIKED' : 'LIKE ME'}
				</button>
			</div>
		)
	}
}

export default Thumbnail
