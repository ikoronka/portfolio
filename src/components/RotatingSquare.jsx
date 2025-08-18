import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Rotation.css';

const RotatingSquare = ({
    imageUrl,
    size = 300,
    rotationSpeed = 10
}) => {
    return (
        <div
            className="rotating-square-container"
            style={{ width: size, height: size }}
        >
            <img
                src={imageUrl}
                alt="Rotating"
                className="rotating-square-image"
            />
            <div
                className="rotating-borders"
                style={{ animationDuration: `${rotationSpeed}s` }}
            >
                <div className="rotating-square-outer" />
                <div className="rotating-square" />
            </div>
        </div>
    );
};

RotatingSquare.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    size: PropTypes.number,
    rotationSpeed: PropTypes.number
};

export default RotatingSquare;