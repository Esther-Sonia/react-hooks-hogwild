import React from 'react';

function Sort({setSortBy}){
    return(
        <div>
            <button onClick={() => setSortBy('name')}
                                style={{
                                    backgroundColor: '#F8C8DC',  
                                    color: 'white',              
                                    padding: '10px 20px',        
                                    borderRadius: '5px',
                                    border: 'none',         
                                    cursor: 'pointer',          
                                    fontSize: '16px',           
                                    fontWeight: 'bold', 
                                    marginRight: '10px',
                                    marginLeft: '-10px'  
  
                                      
 
                                }}
                >Sort by Name</button>
            <button onClick={() => setSortBy('weight')}
                 style={{
                    backgroundColor: '#F8C8DC',  
                    color: 'white',              
                    padding: '10px 20px',        
                    borderRadius: '5px', 
                    border: 'none',                 
                    cursor: 'pointer',         
                    fontSize: '16px',           
                    fontWeight: 'bold', 
                    margin: '10px'
   
                }}
                >Sort by Weight
                
            </button>
        </div>
    );
}

export default Sort;