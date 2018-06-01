import PropTypes from 'prop-types';
import React from 'react';

export default class ReleaseStories extends React.PureComponent {

    componentWillMount() {
        const release = this.props.release;
        release && this.props.fetchStories(release.id);
    }

    getStoryClass(storyType)
    {
        if(storyType === "feature") return 'badge-success';
        else if(storyType === "bug") return 'badge-danger';
        else return 'badge-warning';
    }

    renderStories(release) {
        return (
            <nav id="doc-nav">
                <ul id="navigation-menu" className="fa-ul mb-0" >
                {
                    release.stories.map(story => (
                        <li key={story.id}>
                            <span className={"badge story-badge " + this.getStoryClass(story.story_type)}>{story.story_type}</span> 
                            <a className="scrollto" href={story.url}>{story.name}</a>
                        </li>
                    ))
                }
                </ul>
            </nav>
            )
    }
    
    render() {
    
        return (
        <div className="">
            {
                this.props.release.stories && this.renderStories(this.props.release)
            }
        </div>
    
    );
    }
}

ReleaseStories.propTypes = {
    release: PropTypes.object,
    fetchStories: PropTypes.func.isRequired
};

