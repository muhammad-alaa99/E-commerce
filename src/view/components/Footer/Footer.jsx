import React from "react";
import '../../../style/footer.css'
const Footer = () => {
  return (
    <>
      <footer className="bg-light text-center text-lg-start mt-4">
        <div className=" p-5 pb-0">
          <div className="row ">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">e-commerce</h5>
              <p className="lh-lg dark-50">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                atque ea quis molestias. Fugiat pariatur maxime quis culpa
                corporis vitae repudiandae aliquam voluptatem veniam, est atque
                cumque eum delectus sint!
              </p>
            </div>

            <div className="col-lg-6 col-md-12 mb-4 mb-md-0 row justify-content-center align-items-center text-lg-end text-sm-center ">
              <form>
                <div className="row justify-content-lg-end justify-content-sm-center ">
                  <div className="col-auto">
                    <p className="pt-2">
                      <strong>Sign up for our newsletter</strong>
                    </p>
                  </div>

                  <div className="col-md-5 col-12">
                    <div className="form-outline form-white mb-lg-0 mb-3 ">
                      <input
                        type="email"
                        id="form"
                        className="form-control"
                        placeholder="Email address"
                      />
                      {/* <label className="form-label" for="form5Example29">
                        Email address
                      </label> */}
                    </div>
                  </div>

                  <div className="col-auto">
                    <button type="submit" className="btn btn-outline-dark">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr className="m-0" />
        <div className="row m-auto container">
          <div className="text-sm-center text-lg-start p-3 col-lg-6 col-md-12 mb-lg-2 mb-md-0 text-black-50">
            © 2020 Copyright:
            <a className="text-black-50" href="#">
              MDBo
            </a>
          </div>
          <div className=" text-sm-center text-lg-end p-3 col-lg-6 col-md-12 mb-lg-2 mb-md-0">
            <a className="  text-black-50 me-3" href="#">
              <i class="fo-icon opacity-50 fa fa-facebook fa-2x" aria-hidden="true"></i>
            </a>
            <a className="text-black-50 me-3" href="#">
              <i class="fo-icon opacity-50 fa fa-youtube fa-2x" aria-hidden="true"></i>
            </a>
            <a className="text-black-50 me-3" href="#">
              <i class="fo-icon opacity-50 fa fa-twitter fa-2x" aria-hidden="true"></i>
            </a>
            <a className="text-black-50 me-3" href="#">
              <i class="fo-icon opacity-50 fa fa-instagram fa-2x" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
