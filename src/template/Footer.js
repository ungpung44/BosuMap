import React, { useState } from 'react';
import './Footer.css'
const mode = (flag) => {
    return flag == 0  ? '기본모드' : '다크모드';
}

function Footer() {
    const [flag, setFlag] = useState(false);

    return (
        <footer>
            Tel : 010-0000-0000
            <button className="changeBackgroundColor" onClick={()=>setFlag(!flag)}>{mode(flag)}</button>
        </footer>
    );
}

export default Footer;