import React from "react";
import MainLayOut from "../../layout/mainlayout";
import ModalVisible from "../../component/modal";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function Home() {
  return (
    <MainLayOut>
      {/* <div
        style={{
          border: "0px solid red",
          paddingTop: "100px",
          backgroundImage:
            'url("https://1.bp.blogspot.com/-Ail6KladlPw/VvaNCKv0twI/AAAAAAAAAEA/dONnUVLqJhMLxEEnz_SwjCVqJaIKsLtFA/s1600/Hacker%2Bman.png")',
          height: "556px",
          backgroundSize: "100% 100%",
        }}
      >
        <ModalVisible />
      </div> */}
     {/* <Swiper modules={[EffectFade]} effect="fade">
      {[1, 2, 3].map((i, el) => {
        return <SwiperSlide>Slide {el}</SwiperSlide>;
      })}
    </Swiper> */}
    <ModalVisible/>
    </MainLayOut>
  );
}
