import React from 'react';

function HogTile({ hog, isHidden, toggleHide }){
    return (
        <div className ="ui eight wide column"style={{ display: isHidden ? "none" : "block" }}>
            <div className="ui card">
                <div className="image">
                <img src={hog.image} alt={hog.name} style={{ width: '100%', height: 'auto' }} />

                </div>
                <div className="content">
                    <h3>{hog.name}</h3>
                    <p><strong>Specialty:</strong> {hog.specialty}</p>
                    <p><strong>Weight:</strong> {hog.weight}</p>
                    <p><strong>Greased:</strong> {hog.greased ? 'Yes' : 'No'}</p>
                    <p><strong>Highest Medal:</strong> {hog.highestMedal}</p>
                    <button onClick={() => toggleHide(hog.name)}
                    style={{
                        backgroundColor: '#F8C8DC',  
                        color: 'white',              
                        padding: '10px 20px', 
                        border: 'none',                
                        borderRadius: '5px',         
                        cursor: 'pointer',          
                        fontSize: '16px',           
                        fontWeight: 'bold', 
                    }}
                >
                        {isHidden ? 'Show' : 'Hide'} Hog
                    </button>
                </div>
            </div>
        </div>

    );
}

export default HogTile;