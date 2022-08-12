import './Homepage.css';
import { useState, useEffect } from 'react';

const Homepage = () => {
    const [text, setText] = useState([]);

    useEffect(() => {
      fetch('https://raw.githubusercontent.com/ChilikinAM/farm.kg-front/main/src/components/data/main_en.json')
        .then(res => res.json())
        .then(data => setText(data))
    }, []);
    return (
        <>
        <div className="arnamentLeft"></div>
        <div className="arnamentRight"></div>
        <div className="homepageMain">
            <div className='mainContent'>
                <div className='slogan'><h1>{text.mainHeader}</h1>
                <h3>{text.mainSlogan}</h3>
                </div>
                <div className='mainBrandsPhoto'>
                    <div className='mainBrand1'></div>
                    <div className='mainBrand2'></div>
                    <div className='mainBrand3'></div>
                    <div className='mainBrand4'></div>
                </div>
            </div>    
        </div>
        </>
    )
}

export {Homepage}