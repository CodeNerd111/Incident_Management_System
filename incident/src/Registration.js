
// Registration.js
import React, { Component } from 'react';

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
      pincode: '',
      city: '',
      countryName: '',
      error: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onRegister = this.onRegister.bind(this);
  }

  onChange(e) {
    const { name, value } = e.target;

    this.setState({ [name]: value });

    if (name === 'pincode' && value.length === 6) {
      this.setState({ error: '' });

      fetch(`https://api.postalpincode.in/pincode/${value}`, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data && data[0] && data[0].PostOffice && data[0].PostOffice[0]) {
            const city = data[0].PostOffice[0].Block;
            const countryName = data[0].PostOffice[0].Country;

            this.setState({ city, countryName }, () => {
              this.props.getData(this.state);
            });
          } else {
            throw new Error('Invalid response');
          }
        })
        .catch((err) => {
          console.error(err);
          this.setState({
            city: '',
            countryName: '',
            error: this.props.invalidError || 'Invalid PIN Code',
          });
        });
    }
  }

  onRegister() {
    const { name, email, phone, pincode, city, countryName } = this.state;

    if (!name || !email || !phone || !pincode || !city || !countryName) {
      alert('Please fill in all fields');
      return;
    }

    const message = `Registration Successful!`;
    alert(message);
  }

  render() {
    const { name, email, phone, pincode, city, countryName, error } = this.state;

    return (
      <div style={this.props.container}>
        {error && <span className="error-display">{error}</span>}

        <div style={this.props.inputContainer}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={this.onChange}
            style={this.props.input}
          />
        </div>

        <div style={this.props.inputContainer}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.onChange}
            style={this.props.input}
          />
        </div>

        <div style={this.props.inputContainer}>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={phone}
            onChange={this.onChange}
            style={this.props.input}
          />
        </div>

        <div style={this.props.inputContainer}>
          <input
            maxLength={6}
            name="pincode"
            placeholder="Pin Code"
            value={pincode}
            onChange={this.onChange}
            type="number"
            style={this.props.input}
          />
        </div>

        {this.props.showCity && (
          <div style={this.props.inputContainer}>
            <input
              type="text"
              disabled={true}
              placeholder="City"
              value={city}
              style={this.props.input}
            />
          </div>
        )}

        {this.props.showCountry && (
          <div style={this.props.inputContainer}>
            <input
              type="text"
              disabled={true}
              placeholder="Country"
              value={countryName}
              style={this.props.input}
            />
          </div>
        )}

        <button onClick={this.onRegister} disabled={!name || !email || !phone || !pincode || !city || !countryName} style={this.props.button}>
          Register
        </button>
      </div>
    );
  }
}

Registration.defaultProps = {
  showCity: true,
  showCountry: true,
};

export default Registration;
