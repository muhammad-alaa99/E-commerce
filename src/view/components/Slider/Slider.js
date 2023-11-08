import React from "react";
import { Carousel } from "react-bootstrap";
import "../../../style/slider.css";
const Slider = () => {
  return (
    <>
      <Carousel className="slider" data-bs-theme="dark">
        <Carousel.Item interval={500}>
          <img
            className="d-block  sliderimg"
            src="https://media.istockphoto.com/id/1496839001/photo/3d-render-design-of-gold-twisted-rings-with-diamonds-surrounding-the-ring-on-white-background.jpg?s=612x612&w=0&k=20&c=Ry6xu_Qv146P9_anSqIHp2CgG7qdK2pNgxk13EFIXRo="
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block sliderimg"
            src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=1410&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block sliderimg"
            src="https://media.istockphoto.com/id/1314987155/photo/modern-golden-bracelets-and-ring-on-white-and-blue-background-with-copy-space.jpg?s=612x612&w=0&k=20&c=qF_aT8dD83Vi7IgZvZJZUzWSUInwFDCdr7fmO9RhHtQ="
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block sliderimg"
            src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block sliderimg"
            src="https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block sliderimg"
            src="https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block sliderimg"
            src="https://images.unsplash.com/photo-1618354691714-7d92150909db?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block sliderimg"
            src="https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block sliderimg"
            src="https://media.istockphoto.com/id/831074530/photo/3d-illustration-two-rose-gold-diamonds-decorative-rings-with-reflection.jpg?s=612x612&w=0&k=20&c=viyNKeZy7dNTQETzrh-BF1O6o2thRQQ5E7XWIDEqNqM="
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
