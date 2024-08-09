/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

interface ISlideData {
  key: string
  src: string
}

const totalImgs = 10
const slideInterval = 5000

export default function Slider() {
  const [data, setData] = useState<ISlideData[]>(() => {
    const list = []
    for (let i = 1; i < totalImgs; i++) {
      list.push({
        key: `${i}`,
        src: `/imgs/img-${i}.jpeg`
      })
    }
    return list 
  })
  const [selectedItem, setSelectedItem] = useState<number>(1)

  const handleChangeSlide = (type: string) => {
    switch (type) {
      case 'next':
        setSelectedItem(
          selectedItem < (data.length) ?
          selectedItem + 1 :
          1
        )
        break;
      case 'prev':
        setSelectedItem(
          selectedItem !== 1 ?
          selectedItem - 1 :
          data.length
        )
        break;
    }
  }

  return (
    <div className="custom-slider-wrapper">
      <div className="carousel slide custom-slide" data-ride="carousel">
        <div className="carousel-inner">
          {data.length &&  data.map(({ key, src }) => (
            <div 
              key={key} 
              className={ 
                selectedItem === Number(key) ? 
                'carousel-item custom-slide-img-wrapper active' : 
                'carousel-item'
              }
            >
              <img 
                className="custom-slide-img"
                src={src} 
                alt={key} 
              />
            </div>
          ))}
        </div>
        <p className="custom-slide-text">I love U</p>
        <button 
          type="button" 
          onClick={() => handleChangeSlide('prev')}
          className="custom-button-prev"
        >
          {"<"}
        </button>
        <button 
          type="button" 
          onClick={() => handleChangeSlide('next')}
          className="custom-button-next"
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
