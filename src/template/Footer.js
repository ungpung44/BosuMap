import React, { useState } from 'react';

let buttonName = '다크모드';

function Footer() {
    const [flag, setFlag] = useState(false);

    if(flag == 0){
        buttonName = '기본모드';
    }else {
        buttonName = '다크모드';
        
    }

    return (
        <footer>
            Tel : 010-0000-0000
            <button className="ButtonDisplayColor" onClick={()=>setFlag(!flag)}>{buttonName}</button>
        </footer>
    );
}

export default Footer;