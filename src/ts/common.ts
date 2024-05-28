import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

import SwiperGL from './swiper-gl/swiper-gl.esm'

export const commonInit = () => {
  console.log('common.ts')
  const slider1 = new Swiper('.swiper', {
    modules: [Navigation, SwiperGL],
    speed: 2000,
    effect: 'gl',
    loop: true,
    gl: {
      shader: 'wave-x'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  })
  return slider1
}
