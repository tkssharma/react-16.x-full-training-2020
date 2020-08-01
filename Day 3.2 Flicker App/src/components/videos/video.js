import React from 'react';
import Observer from 'react-intersection-observer';
import '../photos/photo.scss';

export default class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ visibility: e });
    }

    render() {
        const { video, onVideoClick } = this.props;
        return (
            <article>
                <Observer onChange={this.handleChange} rootMargin="50px 50px 50px 50px">
                    <a
                        href="#"
                        onClick={onVideoClick}
                        className="photos-grid__link"
                        id={video.id}
                    >
                        <video autoPlay loop muted>
                            <source src={video.url.mp4} />
                        </video>
                    </a>
                </Observer>

            </article>

        )
    }
}
