import React from 'react'
import '../styles/Search.css'


class Search extends React.Component {

	filterPlaces = (event) => {
		let input = event.target.value
		let places = this.props.places
		let filtered = places.filter((f) => { f.name.includes(input)


			 //let filteredPlace = Object.assign({},f)
			 console.log(filtered)


		}


	render() {
		return (
			<input type='text' className='Search' placeholder='Search' onChange={
				(event) => this.filterPlaces}/>
		)
	}
}

export default Search
