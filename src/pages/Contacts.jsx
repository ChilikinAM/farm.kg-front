import './Contacts.css';
import { useState, useEffect } from 'react';

const Contacts = () => {
    const [text, setText] = useState([]);

    useEffect(() => {
      fetch('https://raw.githubusercontent.com/ChilikinAM/farm.kg-front/main/src/components/data/main_en.json')
        .then(res => res.json())
        .then(data => setText(data))
    }, []);
    return (
        <div className="contactsMain">
            <div className="contactsContent">
                <div className='leftColumn'>
                    <div className='contactHeader'><p>{text.contactContactUs}</p></div>
                    <div className='callUs'>
                        <h3>{text.contactCallUs}</h3>
                        <h1>{text.contactPhone}</h1>
                    </div>
                    <div className='contactIcon'>
                        <div className='contactLineItems'>
                            <div className='mailIcon'></div>
                            <h3>{text.contactMain}</h3>
                        </div>
                        <div className='contactLineItems'>
                            <div className='addressIcon'></div>
                            <h3>{text.contactAddress}</h3>
                        </div>
                    </div>
                </div>
                <div className='rightColumn'>
                    <div className='contactMap'></div>
                </div>
            </div>
        </div>
    )
}

export {Contacts}