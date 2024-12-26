import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {makeFalse,makeTrue} from '../Redux/Slideritems/infinteSliderItem.js'

const Slideritems = ({imgSrc,altText,aniDelay,height,width}) => {
    const isHovered = useSelector((state) => state.infinteSlider.value)
    const dispatch = useDispatch()
    return (
        <>
            <div className="absolute left-full animate-autorun"
                style={{
                    height: height,
                    width: width,
                    animationDelay: aniDelay,
                    animationPlayState:isHovered?'paused':'running',
                }}
                onMouseEnter={() => dispatch(makeTrue())}
                onMouseLeave={() => dispatch(makeFalse())}
                ><img className='w-full h-full' src={imgSrc} alt={altText} /></div>
        </>
    )
}

export default Slideritems