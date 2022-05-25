import React from 'react'
import Image from 'next-image-export-optimizer'
import { Swiper, SwiperSlide } from 'swiper/react' //カルーセル用のタグをインポート
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper' //使いたい機能をインポート
import 'swiper/css/autoplay'

SwiperCore.use([Pagination, Navigation, Autoplay]) 

// カルーセルにする画像のソースをリストにします
const images = [
  'images/tips01.png',
  'images/tips01.png',
]

const Slideshow = () => {
  const prevRef = React.useRef(null);
  const nextRef = React.useRef(null);

  const c_handleClick = () => {
    console.log('click')
    var obj = document.getElementById("credit")
    obj.classList.remove("credit")
    obj.classList.add("credit-img")
  }

  const b_handleClick = () => {
    console.log('click')
    var obj = document.getElementById("credit")
    obj.classList.add("credit")
    obj.classList.remove("credit-img")
  }

  return (
    <div className="block">
      <div id="credit" className="relative credit">
      <Image
        src="images/credit.png"
        width={1025}
        height={769}
        alt=""
      />
      <button type="button" className="batsu absolute top-0 left-0" onClick={b_handleClick} ></button>
    </div>
    <div className="absolute top-0 left-0 right-0 bottom-0 max-w-screen-lg mx-auto">
      <div className="relative text-white text-right pt-7 px-16 z-50">
        <button className="" type="button" onClick={c_handleClick} >クレジット</button>
      </div>
      
      <div className="relative pl-12 top-0">
        <Image
          src="images/title.png"
          width={626}
          height={89}
          alt=""
          className="z-50"
        />
      </div>
      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
        <Swiper
          slidesPerView={1} //一度に表示するスライドの数
          navigation={
            {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            }
          }
          pagination={
            { 
              el: '.swiper-pagination',
              clickable: true 
            }
          }
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={1000}
          autoHeight={false}
          className="top-7"
        >
          {images.map((src, index) => {
            return (
              <SwiperSlide key={`${index}`} className="p-16 flex justify-center">
                <Image
                  src={src}
                  width={968}
                  height={681}
                  alt=""
                />
              </SwiperSlide>
            )
          })}
        </Swiper>

        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
    </div>
  )
}

export default Slideshow