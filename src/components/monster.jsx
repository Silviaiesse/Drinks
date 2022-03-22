import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../lotties/404-error-monster.json';

function Monster() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={400}
                width={400}
            />
        </div>
    );
}

export default Monster;
