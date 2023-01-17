import React from 'react'
import './searchItem.css'

export const SearchItem = () => {
    return (
        <div className="searchItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1" className='siImg' alt="searchImg" />
            <div className="siDesc">
                <h1 className="siTitle">Tower Street apartments</h1>
                <span className='siDistance'>500m from center</span>
                <span className='siTaxiOp'> Free airport taxi</span>
                <span className='siSubTitle'>
                    Studio apartment with air conditioning
                </span>
                <span className="siFeatures">
                    Entire studio - 1 bathRoom - 21m - 1 full bed
                </span>
                <span className="siCanceleOp"> Free cancellation  </span>
                <span className="siCancelOpSubtitle">
                    you can cancel  later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailText">
                    <span className='SiDetailPrice'>$112</span>
                    <span className='SiDetailInclude'> includes taxes and fees</span>
                    <button>see availability</button>
                </div>
            </div>


        </div>
    )
}
