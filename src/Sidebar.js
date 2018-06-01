import PropTypes from 'prop-types';
import React from 'react';


export default class Sidebar extends React.PureComponent {
    
    render() {
    
        return (
            <nav>
                <h1 className="site-title"><a href="index.html">Change Log</a></h1>
                <ul className="nav nav-pills flex-column sidebar-nav" >
                    {this.props.releases.map(release => (
                        <li className="nav-item" key={"m"+release.id}><a className="nav-link" href={"#"+release.id}>{release.name}</a></li>
                    ))
                    }
                </ul>
            </nav>
    );
    }
}
  
Sidebar.propTypes = {
    release: PropTypes.object
  };

