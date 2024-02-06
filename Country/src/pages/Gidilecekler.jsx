import React from 'react'


const Gidilecekler = ({gidilecekler}) => {
    
  return (
    <div>
        {
            gidilecekler.map((git)=>(
                <div key={git.name.common}>{git.currencies.name}</div>
            ))
        }
    </div>
  )
}

export default Gidilecekler