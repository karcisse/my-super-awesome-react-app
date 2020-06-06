import React from 'react';

import { getMemes } from 'backend/meme-service';
import { IMemeObject } from 'model/meme.model';
import { ErrorPage } from './error-page';
import { MemeContainer } from 'shared/memes/container';

interface State {
    memes: ReadonlyArray<IMemeObject>;
    error: boolean;
}

export class Home extends React.Component<{}, State> {

    constructor(props: {}) {
        super(props);
        this.state = {
            memes: [],
            error: false
        }
    }

    componentDidMount() {
        getMemes()
        .then((memesData) => this.setState({ memes: memesData.data.memes, error: false }))
        .catch(() => this.setState({ error: true, memes: []}));
    }

    render() {
        const { memes, error } = this.state;
        return (
            <>
                {error && <ErrorPage />}
                <MemeContainer memes={memes} />
            </>
        );
    }
}

export default Home;
