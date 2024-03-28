import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Programs.css';

const Programs = () => {
    const navigate = useNavigate();

    const tileData = [
        { bgImage: 'LED3.jpg', title: 'Computer Vision', path: '/programs/tile1' },
        { bgImage: 'City4_4K_adjusted.jpg', title: 'Business Analysis', path: '/programs/tile2' },
        { bgImage: 'Neb.jpg', title: 'ETL and EDA', path: '/programs/tile3' },
        { bgImage: 'CheetahFace.jpg', title: 'Parallel Computing with CUDA', path: '/programs/tile4' },
    ];

    return (
        <div className="Programs">
            <div className="tiles-container">
                {tileData.map(tile => (
                    <div
                        key={tile.title}
                        className="tile"
                        style={{ backgroundImage: `url(${tile.bgImage})` }}
                        onClick={() => navigate(tile.path)}
                    >
                        <div className="tile-title">{tile.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Programs;

