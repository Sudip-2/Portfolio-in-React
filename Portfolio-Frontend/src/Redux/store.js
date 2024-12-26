import { configureStore } from '@reduxjs/toolkit'
import  infiniteSliderItems  from './Slideritems/infinteSliderItem.js'

const store = configureStore({
  reducer: {
    infinteSlider:infiniteSliderItems,
  },
})


export default store;