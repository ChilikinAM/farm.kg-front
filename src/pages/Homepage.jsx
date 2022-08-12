import './Homepage.css';

const Homepage = () => {
    return (
        <>
        <div className="arnamentLeft"></div>
        <div className="arnamentRight"></div>
        <div className="homepageMain">
            <div className='mainContent'>
                <div className='slogan'><h1>Kyrgyz Brands</h1>
                <h3>Traditional Kyrgyz products made with love</h3>
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