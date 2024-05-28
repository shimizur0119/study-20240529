import Swiper from 'swiper/bundle'

export const commonInit = () => {
  console.log('common.ts')
  const slider1 = new Swiper('.swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true
  })
  return slider1
}
