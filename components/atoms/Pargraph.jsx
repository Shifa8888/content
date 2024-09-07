import React from 'react'
const paragraph= ({children}) => {
    const style = "text-[#FF0000] text-[30px]"
    
        return (
            <p className={style} >{children}</p>
         )
        
    }

export default paragraph
