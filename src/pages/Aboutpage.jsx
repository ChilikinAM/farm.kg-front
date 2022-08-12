import './Aboutpage.css';
import { useState, useEffect } from 'react';

const About = () => {
    const [text, setText] = useState([]);

    useEffect(() => {
      fetch('https://raw.githubusercontent.com/ChilikinAM/farm.kg-front/main/src/components/data/main_en.json')
        .then(res => res.json())
        .then(data => setText(data))
    }, []);
    return (
        <>
        <div className="arnament"></div>
        <div className="aboutMain">
            <div className="aboutLeft">
                <h1>{text.aboutOurMission}</h1>
                <h3>{text.aboutText}</h3>
            </div>
            <div className="aboutRight">
                <div className='aboutImg1'></div>
                <div className='aboutImg2'></div>               
            </div>
        </div>
        </>
    )
}

export {About}