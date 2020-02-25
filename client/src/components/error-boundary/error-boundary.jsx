
import React from 'react';

import './error-boundary.scss';
class ErrorBoundary extends React.Component {

    constructor() {
        super();
        this.state = {
            hasErrored: false
        };
    }
    static getDerivedStateFromError(error) {
        // process the error
        return {hasErrored: true};
    }
    componentDidCatch(error) {
        console.log(error)
    }
    render() {
        if(this.state.hasErrored) {
            return (
                <div className='errorImageOverlay'>
                    <div className='errorImageContainer' style = {{backgroundImage: `url('https://i.imgur.com/g3hgqe8.png')`}}></div>
                    <h2 className='image-text'>Sorry this page is broken...</h2>
                    <p>A broken clock is right twice a day. But if you just have one clock, it’s impossible to tell exactly when the clock is right. So it could be right at any moment. And that brings you to the crux of the conceptualization. What is time? Nothing but an abyss. Clocks are just false attempts to harness its power. It’s cruel really.</p>
                </div>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;