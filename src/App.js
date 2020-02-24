import React from 'react';
import './App.css';

class Unc extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			firstName: '',
			Password: ''
		}
	}

	handleSubmit = (e) => {
		e.preventDefault()
	}

	aaaa = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	validateE = (e) => {
		const Email = this.state.Password
		if (e.target.value.length === 0 || e.target.value.length == '@' ) {
		    this.setState({
		      error: "Please enter your email correctly"
		    })
		} else {
			this.setState({
				error: " "
			})
		}
	}

	validateP = (e) => {
		const Password = this.state.firstName
		if (e.target.value.length === 0 || e.target.value.length <= 7) {
		    this.setState({
		      error: "Please fill your password and no more 8 characters!"
		    })
		} else if (e.target.value.length >= 8){
			this.setState({
				error: <span style={{color: "lightgreen"}}>Your password is right!</span>
			})
		} else {
			this.setState({
				error: " "
			})
		}
	}

	render(){
		return (
			<div>
			<h1 className="judul">Please log in</h1>
			<div className="jumbo">
				<div className="form">
				<form onSubmit={this.handleSubmit}>
				  <label>
				    Email :
				  </label>
				    <input
				    	autocomplete="off"
					    placeholder="masukan Email anda"
					    name="firstName"
					    type="email"
					    onChange={this.aaaa}
					    value={this.state.firstName}
					    onKeyPress={this.validateE}
				    />
				  <br/>
				  <label>
				  	Password :
				  </label>
				  	<input
				  		autocomplete="off"
				  		placeholder="masukan Password anda"
				  		name="Password"
				  		type="Password"
				  		onChange={this.aaaa}
				  		value={this.state.Password}
				  		onKeyPress={this.validateP}
				  	/>
				  	<br/>
				  	<button type="submit">Log in</button>
				  	{this.state.error && <span style={{color: "red"}}>{this.state.error}</span>}
				</form>
				</div>
			</div>
			</div>
		);
	}
}


export default Unc;