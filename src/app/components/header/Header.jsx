import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand">React App</a>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Add Post</button>
                </nav>
            </div>
        )
    }
}

export default Header;