import React, { Component } from 'react';
import phone from '../img/phone.jpg'

class App extends Component {
    render() {
        return (
            <div className="App">
                hello app
                <img src={phone} alt=""/>
            </div>
        );
    }
}

export default App;