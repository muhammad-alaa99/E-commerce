import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import '../../../style/offers.css'
const Offers = () => {
    return (
        <>
            <h1 className="mt-5 fw-bolder text-center" id='offers'>Offers</h1>
            <Swiper
                freeMode={true}
                grabCursor={true}
                autoplay={{ delay: 2000 ,disableOnInteraction: false,}}
                modules={[Autoplay]}
                loop={true}
               
                breakpoints={{
                    0:{
                        spaceBetween:10,
                        slidesPerView:1
                    },
                    480:{
                        spaceBetween:10,
                        slidesPerView:2
                    },
                    768:{
                        spaceBetween:10,
                        slidesPerView:3
                    },
                    1024:{
                        spaceBetween:10,
                        slidesPerView:4
                    }
                }}
            >
                <SwiperSlide>
                    <div className="card m-2">
                        <img className="card-img-top SW-img" src="https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">wristwatch</h5>
                            <p className="card-text">accessories</p>
                            <ul className="list-unstyled list-inline my-2">
                                <li className="list-inline-item mx-0"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item mx-0"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item mx-0"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item mx-0"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item mx-0"><i className="fa fa-star-half-alt"></i></li>
                            </ul>
                            <p className="price mb-0">9,99 $</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card m-2">
                        <img className="card-img-top SW-img" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">headphone</h5>
                            <p className="card-text"> accessories</p>
                            <ul className="list-unstyled list-inline my-2">
                                <li className="list-inline-item mx-0"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item mx-0"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item mx-0"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item mx-0"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item mx-0"><i className="fa fa-star-half-alt"></i></li>
                            </ul>
                            <p className="price mb-0">20 $</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card m-2">
                        <img className="card-img-top SW-img" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">smart twatch</h5>
                            <p className="card-text">accessories</p>
                            <ul className="list-unstyled list-inline my-2">
                                <li className="list-inline-item mx-0"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item mx-0"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item mx-0"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item mx-0"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item mx-0"><i className="fa fa-star-half-alt"></i></li>
                            </ul>
                            <p className="price mb-0">10,99 $</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card m-2">
                        <img className="card-img-top SW-img" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">camera</h5>
                            <p className="card-text">accessories</p>
                            <ul className="list-unstyled list-inline my-2">
                                <li className="list-inline-item mx-0"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item mx-0"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item mx-0"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item mx-0"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item mx-0"><i className="fa fa-star-half-alt"></i></li>
                            </ul>
                            <p className="price mb-0">15$</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card m-2">
                        <img className="card-img-top SW-img" src="https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">T-shirt</h5>
                            <p className="card-text">clothes</p>
                            <ul className="list-unstyled list-inline my-2">
                                <li className="list-inline-item mx-0"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item mx-0"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item mx-0"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item mx-0"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item mx-0"><i className="fa fa-star-half-alt"></i></li>
                            </ul>
                            <p className="price mb-0">5 $</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card m-2">
                        <img className="card-img-top  SW-img" src="https://images.pexels.com/photos/2002717/pexels-photo-2002717.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">fashion</h5>
                            <p className="card-text"> fashion</p>
                            <ul className="list-unstyled list-inline my-2">
                                <li className="list-inline-item mx-0"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item mx-0"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item mx-0"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item mx-0"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item mx-0"><i className="fa fa-star-half-alt"></i></li>
                            </ul>
                            <p className="price mb-0">15 $</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card m-2">
                        <img className="card-img-top SW-img" src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">T-shirt</h5>
                            <p className="card-text">clothes</p>
                            <ul className="list-unstyled list-inline my-2">
                                <li className="list-inline-item mx-0"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item mx-0"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item mx-0"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item mx-0"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item mx-0"><i className="fa fa-star-half-alt"></i></li>
                            </ul>
                            <p className="price mb-0">9,99 $</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card m-2">
                        <img className="card-img-top SW-img" src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=1472&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">jacket</h5>
                            <p className="card-text">clothes</p>
                            <ul className="list-unstyled list-inline my-2">
                                <li className="list-inline-item mx-0"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item mx-0"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item mx-0"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item mx-0"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item mx-0"><i className="fa fa-star-half-alt"></i></li>
                            </ul>
                            <p className="price mb-0">10 $</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card m-2">
                        <img className="card-img-top SW-img" src="https://images.unsplash.com/photo-1542487354-feaf93476caa?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNtYXJ0JTIwdHZ8ZW58MHx8MHx8fDA%3D" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">smart TV</h5>
                            <p className="card-text">technology</p>
                            <ul className="list-unstyled list-inline my-2">
                                <li className="list-inline-item mx-0"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item mx-0"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item mx-0"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item mx-0"><i className="fa fa-star"></i></li>
                                <li className="list-inline-item mx-0"><i className="fa fa-star-half-alt"></i></li>
                            </ul>
                            <p className="price mb-0">25 $</p>
                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </>
    );
};

export default Offers;