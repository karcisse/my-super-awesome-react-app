import React from 'react';
import { IMemeObject } from 'model/meme.model';
import MemeCard from './card';

interface Props {
    memes: ReadonlyArray<IMemeObject>;
}

export function MemeContainer(props: Props) {
    const { memes } = props;
    return (
        <>
            {memes.map((meme: IMemeObject, idx: number) => <MemeCard key={idx} meme={meme}/>)}
        </>
    );
}

export default MemeContainer;