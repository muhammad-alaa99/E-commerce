import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
const Testimonial = () => {
    return (
        <>
            <h1 className="mt-5 fw-bolder text-center" id="testimonial">
                testimonial
            </h1>
            <Swiper
                className="bg-light py-3 "
                freeMode={true}
                grabCursor={true}
                autoplay={{ delay: 2000, disableOnInteraction: true ,reverseDirection:true}}
                modules={[Autoplay]}
                loop={true}
                breakpoints={{
                    0: {
                        spaceBetween: 20,
                        slidesPerView: 1,
                    },
                    700: {
                        spaceBetween: 20,
                        slidesPerView: 2,
                    },
                    1024: {
                        spaceBetween: 20,
                        slidesPerView: 3,
                    },
                }}
            >
                <SwiperSlide>
                    <div className="text-center">
                        <img
                            className="rounded-circle shadow-1-strong mb-4"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                            alt="avatar"
                            style={{ width: "150px;" }}
                        />
                        <h5 className="mb-3">Anna Deynah</h5>
                        <p>UX Designer</p>
                        <p className="text-muted">
                            <i className="fa fa-quote-left pe-2"></i>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
                            id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                        </p>
                        <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center">
                        <img
                            className="rounded-circle shadow-1-strong mb-4"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                            alt="avatar"
                            style={{ width: "150px;" }}
                        />
                        <h5 className="mb-3">John Doe</h5>
                        <p>Web Developer</p>
                        <p className="text-muted">
                            <i className="fa fa-quote-left pe-2"></i>
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam
                            corporis suscipit laboriosam, nisi ut aliquid commodi.
                        </p>
                        <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="fa fa-star-half-alt fa-sm"></i>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center">
                        <img
                            className="rounded-circle shadow-1-strong mb-4"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                            alt="avatar"
                            style={{ width: "150px;" }}
                        />
                        <h5 className="mb-3">Maria Kate</h5>
                        <p>Photographer</p>
                        <p className="text-muted">
                            <i className="fa fa-quote-left pe-2"></i>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui
                            blanditiis praesentium voluptatum deleniti atque corrupti.
                        </p>
                        <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="far fa-star fa-sm"></i>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center">
                        <img
                            className="rounded-circle shadow-1-strong mb-4"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
                            alt="avatar"
                            style={{ width: "150px;" }}
                        />
                        <h5 className="mb-3">John Doe</h5>
                        <p>UX Designer</p>
                        <p className="text-muted">
                            <i className="fa fa-quote-left pe-2"></i>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
                            id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                        </p>
                        <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center">
                        <img
                            className="rounded-circle shadow-1-strong mb-4"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                            alt="avatar"
                            style={{ width: "150px;" }}
                        />
                        <h5 className="mb-3">Alex Rey</h5>
                        <p>Web Developer</p>
                        <p className="text-muted">
                            <i className="fa fa-quote-left pe-2"></i>
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam
                            corporis suscipit laboriosam, nisi ut aliquid commodi.
                        </p>
                        <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="fa fa-star-half-alt fa-sm"></i>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center">
                        <img
                            className="rounded-circle shadow-1-strong mb-4"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp"
                            alt="avatar"
                            style={{ width: "150px;" }}
                        />
                        <h5 className="mb-3">Maria Kate</h5>
                        <p>Photographer</p>
                        <p className="text-muted">
                            <i className="fa fa-quote-left pe-2"></i>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui
                            blanditiis praesentium voluptatum deleniti atque corrupti.
                        </p>
                        <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="far fa-star fa-sm"></i>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center">
                        <img
                            className="rounded-circle shadow-1-strong mb-4"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp"
                            alt="avatar"
                            style={{ width: "150px;" }}
                        />
                        <h5 className="mb-3">Anna Deynah</h5>
                        <p>UX Designer</p>
                        <p className="text-muted">
                            <i className="fa fa-quote-left pe-2"></i>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
                            id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                        </p>
                        <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center">
                        <img
                            className="rounded-circle shadow-1-strong mb-4"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(8).webp"
                            alt="avatar"
                            style={{ width: "150px;" }}
                        />
                        <h5 className="mb-3">John Doe</h5>
                        <p>Web Developer</p>
                        <p className="text-muted">
                            <i className="fa fa-quote-left pe-2"></i>
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam
                            corporis suscipit laboriosam, nisi ut aliquid commodi.
                        </p>
                        <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="fa fa-star-half-alt fa-sm"></i>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center">
                        <img
                            className="rounded-circle shadow-1-strong mb-4"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(7).webp"
                            alt="avatar"
                            style={{ width: "150px;" }}
                        />
                        <h5 className="mb-3">Maria Kate</h5>
                        <p>Photographer</p>
                        <p className="text-muted">
                            <i className="fa fa-quote-left pe-2"></i>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui
                            blanditiis praesentium voluptatum deleniti atque corrupti.
                        </p>
                        <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="fa fa-star fa-sm"></i>
                            </li>
                            <li>
                                <i className="far fa-star fa-sm"></i>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Testimonial;
