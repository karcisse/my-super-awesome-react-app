import React, { useState } from 'react';
import _ from 'lodash';

import loadingImg from 'assets/images/memes/loading-gangnam-style.gif';
import messages from 'shared/loading-component/loading-messages';

export default function LoadingComponent() {
    const findMessage = (): string => messages[_.random(0, messages.length - 1)];

    const [message, setMesssage] = useState(findMessage());
    setInterval(() => setMesssage(findMessage()), 2000);

    return (
        <>
            <img src={loadingImg} alt="loading"/>
            <p>{message}</p>
        </>
    )
}