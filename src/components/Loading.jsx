import React from 'react';

export default function LoadingAnimation() {
    let styles = {BackgroundColor: "black"}

    return (
        <div style={styles}>
            <div className="progress-loader">
                <div className="progress"></div>
            </div>
        </div>
    )
}