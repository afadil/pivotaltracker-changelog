import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions/releasesActions';
import ReleaseStories from './ReleaseStories';
import Sidebar from './Sidebar';


class releasesList extends React.Component {  

    componentWillMount() {
        this.props.actions.fetchReleases();
    }
    
    renderReleases(releases) {
        return (
            <div className="row">
                <div className="sidebar col-xs-12 col-sm-4 col-lg-3 col-xl-2 sidebar-style-1">
                    <Sidebar releases={releases}/>
                </div>
                <div className="col-xs-12 col-sm-8 offset-sm-4 col-lg-9 offset-lg-3 col-xl-10 offset-xl-2 pt-3 pl-4">
                    {releases.map(release => (
                        <div key={release.id} id={release.id} className="card release-card">
                            <div className="card-body">
                                <h3 className="card-title release-title ">{release.name}</h3>
                                <h6 className="card-subtitle mb-2 text-muted release-subtitle">{release.deadline && new Date(release.deadline).toLocaleDateString()}</h6>
                                <div className="card-text">
                                    <ReleaseStories 
                                        release={release} 
                                        fetchStories={this.props.actions.fetchStories}
                                        />
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>

        </div>
        )
    }
    
    render() {
      return (
        <div>
            {this.props.releasesList.length > 0 ?
                this.renderReleases(this.props.releasesList)
              :
              <div>
                No Release loaded
              </div>
            }
        </div>
      );
    }
  }
  
  releasesList.propTypes = {
    releasesActions: PropTypes.object,
    releasesList: PropTypes.array
  };
  
  function mapStateToProps(state) {
    return {
        releasesList: state.releases.releasesList
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(releasesList);