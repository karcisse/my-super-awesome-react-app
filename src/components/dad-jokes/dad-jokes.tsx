import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync, faCopy } from '@fortawesome/free-solid-svg-icons';

import './dad-jokes.css';
import { getJokes } from 'backend/joke-service';
import LoadingComponent from 'shared/loading-component/loading-component';
import _ from 'lodash';

interface State {
    joke: string,
    loading: boolean,
    copied: boolean
}

export class DadJokes extends React.Component<{}, State> {

    jokeElement: HTMLParagraphElement | null;

    constructor(props: {}) {
        super(props);
        this.jokeElement = null;
        this.state = {
            joke: '',
            loading: false,
            copied: false
        }
    }

    componentDidMount() {
        this.fetchJokes();
    }

    fetchJokes() {
        this.setState({
            joke: '',
            loading: true,
            copied: false
        });
        getJokes(1).then(jokes => this.setState({
            joke: jokes[0],
            loading: false,
            copied: false
        }));
    }

    copyToClipboard() {
        window?.getSelection()?.removeAllRanges();
        var range = document.createRange();
        range.selectNode(this.jokeElement!);
        window?.getSelection()?.addRange(range);
        document.execCommand('copy');
        window?.getSelection()?.removeAllRanges();
        this.setState({ copied: true },
            () => _.delay(() => this.setState({ copied: false }), 2000));
      };

    renderJokes() {
        const { copied } = this.state;
        return (
            <>
                <div className="joke-card bg-secondary text-light shadow-lg rounded-pill">
                    <p className="joke" ref={(jokeElement) => this.jokeElement = jokeElement}>{this.state.joke}</p>
                    <div>
                        <button className="btn"><FontAwesomeIcon icon={faCopy} size="3x" onClick={() => this.copyToClipboard()} /></button>
                        <button className="btn"><FontAwesomeIcon icon={faSync} size="3x" onClick={() => this.fetchJokes()} /></button>
                    </div>
                </div>
                <p className={`alert-success copied-text ${copied ? '' : 'hide'}`}>Copied!</p>
            </>
        );
    }

    render() {
        const { loading } = this.state;
        return (
            <div className={`d-flex align-items-center justify-content-center h-100`}>
                <div>
                    {loading ? <LoadingComponent /> : this.renderJokes()}
                </div>
            </div>
        );
    }
}

export default DadJokes;
