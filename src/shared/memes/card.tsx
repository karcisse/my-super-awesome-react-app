import React from 'react';

import './memes.css';
import { IMemeObject } from 'model/meme.model';

interface Props {
    meme: IMemeObject;
}

export function MemeCard(props: Props) {
    const { meme } = props;
    return (
        <div className="row">
            <div className="col">
                <div className="meme-card">
                    <p>{meme.name}</p>
                    <img className="meme-img" src={meme.url} alt={meme.name}/>
                </div>
            </div>
        </div>
    );
}

export default MemeCard;