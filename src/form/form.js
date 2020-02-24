import React from 'react'; 	


// controle component


// class App extends React.Component{
// 	constructor(){
// 		super();
// 		this.state = {
// 			name: ''
// 		}
// 	}

// 	handleChange = (e) => {
// 		this.setState({
// 			name: e.target.value
// 		})
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<form>
// 					<label>Email</label>
// 					<br/>
// 					<input value={this.state.name} onChange={this.handleChange} />
// 					<br/>
// 					{this.state.name}
// 					<br/>
// 					<button>kirim</button>
// 				</form>
// 			</div>
// 		)
// 	}
// }



// uncontrole component


// class Unc extends React.Component {

// 	handleSubmit = (e) => {
// 		e.preventDefault();

// 		console.log({
// 			title: this.title.value
// 		})
// 	}

// 	render(){
// 		return (
// 			<div>
// 				<form onSubmit={this.handleSubmit}>

// 					<input
// 					placeholder='Title'
// 					ref={input => this.title = input}
// 					/>

// 					<button type='submit'>submit</button>
// 				</form>
// 			</div>
// 		)
// 	  }
// }


// form validasi


class Unc extends React.Component {
	constructor(){
		super();

		this.state = {
			firstName: ''
		}
	}

	handleChange = (e) => {
		this.setState({
			firstName: e.target.value
		})

		if (e.target.value.length === 0 || e.target.value.length < 5) {
		    this.setState({
		      error: "Field ini tidak boleh kosong dan kurang dari 5"
		    })
		} else {
			this.setState({
				error: ''
			})
		}
	}

	render(){
		return (
			<form>
			  <label>
			    First Name *:
			    <input
			      name="firstName"
			      type="text"
			      onChange={this.handleChange}
			      value={this.state.firstName}
			      onKeyPress={this.validate}
			    />
			    {this.state.error && <span style={{color: "red"}}>{this.state.error}</span>}
			  </label>
			</form>		
		);
	}
}


export default Unc;