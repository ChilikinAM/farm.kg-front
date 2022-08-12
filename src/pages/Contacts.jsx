import './Contacts.css';

const Contacts = () => {
    return (
        <div className="contactsMain">
            <div className="contactsContent">
                <div className='leftColumn'>
                    <div className='contactHeader'><p>Contact us</p></div>
                    <div className='callUs'>
                        <h3>Call us</h3>
                        <h1>+ 996 700 431 430</h1>
                    </div>
                    <div className='contactIcon'>
                        <div className='contactLineItems'>
                            <div className='mailIcon'></div>
                            <h3>farmkg@gmail.com</h3>
                        </div>
                        <div className='contactLineItems'>
                            <div className='addressIcon'></div>
                            <h3>Isanova 105</h3>
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