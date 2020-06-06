import React, { useState } from 'react';

import doge404 from 'assets/images/memes/doge-404.png';
import areYouLost from 'assets/images/memes/are-you-lost.jpg';
import lostSteven from 'assets/images/memes/lost-steven.gif';
import trap from 'assets/images/memes/trap.jpg';
import dontPush from 'assets/images/memes/dont-push.jpg';

export function DamnSonHowYouFoundThis() {

    const images = [
        doge404,
        areYouLost,
        lostSteven,
        trap
    ];
    const [idx, setIdx] = useState(0);
    const [imgClicked, setClicked] = useState(false);
    const handleIdxChange = (): void => idx + 1 === images.length ? setIdx(0) : setIdx(idx + 1);

    const handleImageClick = (): void => {
        handleIdxChange();
        setClicked(true);
    };

    return (
        <div className={`d-flex ${imgClicked ? 'flex-row' : 'flex-column'} align-items-center justify-content-center h-100`}>
            {imgClicked ? (
                <img src={dontPush} alt="dont-push" />
            ) : (
                <h1 className="text-danger font-weight-bold">Under any circumstances DON'T click on image below !!!!!1</h1>
            )}
            <img className="h-50" onClick={handleImageClick} src={images[idx]} alt="404-img" />
        </div>
    );
}

export default DamnSonHowYouFoundThis;