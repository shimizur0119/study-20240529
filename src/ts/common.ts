import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

export const commonInit = () => {
  console.log('common.ts')
  const slider1 = new Swiper('.swiper', {
    modules: [Navigation],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true
  })
  return slider1
}
