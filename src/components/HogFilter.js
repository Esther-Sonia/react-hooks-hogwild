import React from 'react';

function Filter({ greasedHogs, setGreasedHogs }){
    return(
        <div>
            <button onClick ={() => setGreasedHogs(!greasedHogs)}
                style={{
                    backgroundColor: '#F8C8DC',  
                    color: 'white',              
                    padding: '10px 20px',
                    border: 'none',                 
                    borderRadius: '5px',         
                    cursor: 'pointer',          
                    fontSize: '16px',           
                    fontWeight: 'bold', 
                    marginRight: '20px'
                    
                }}
                
                >
                {greasedHogs ? 'show All Hogs' : 'show Greased Hogs only'}
            </button>
        </div>
    );
}

export default Filter;