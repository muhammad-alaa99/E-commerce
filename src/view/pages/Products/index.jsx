import React, { useEffect } from "react";
import { Container, Overlay } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import {
  All,
  Details,
  clearRecord,
  electronics,
  fetchProducts,
  getProduct,
  jewelery,
  man,
  woman,
} from "../../../store/ProductSlice";
import "../../../style/Product.css";

const Index = () => {
  const dispatch = useDispatch();
  const { items, loading, record } = useSelector((state) => state.Products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };
  return (
    <div className="position-relative">
      <Container>
        <h1 className="my-5 fw-bolder text-center">All Products</h1>
        <div className="text-center ">
          <button
            className="btn btn-outline-dark px-3 mb-2 me-2"
            onClick={() => {
              dispatch(All());
            }}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark mb-2 px-3 me-2"
            onClick={() => {
              dispatch(man("men's clothing"));
            }}
          >
            Man`s Clothes
          </button>
          <button
            className="btn btn-outline-dark px-3 mb-2  me-2"
            onClick={() => {
              dispatch(woman("women's clothing"));
            }}
          >
            woman`s Clothes
          </button>
          <button
            className="btn btn-outline-dark px-3 mb-2  me-2"
            onClick={() => {
              dispatch(jewelery("jewelery"));
            }}
          >
            jewelery
          </button>
          <button
            className="btn btn-outline-dark px-3 mb-2  me-2"
            onClick={() => {
              dispatch(electronics("electronics"));
            }}
          >
            electronics
          </button>
        </div>
        <hr className="mb-4" />
        <div className="row justify-content-center">
          {loading ? (
            <Loading />
          ) : (
            items.map((record, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-3 " key={index}>
                <div className="card my-card ">
                  <img
                    src={record.image}
                    height="250px"
                    className="card-img-top"
                    alt="product"
                  />
                  <div className="card-body">
                    <h2 className="card-title">
                      {record.title.substring(0, 10)}......
                    </h2>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">${record.price}</li>
                  </ul>
                  <div className="card-body">
                    <button
                      className="card-link btn btn-outline-dark"
                      onClick={() => {
                        dispatch(getProduct(record.id));
                      }}
                    >
                      Add to cart
                    </button>
                    <button
                      className="card-link btn btn-outline-dark"
                      onClick={() => {
                        dispatch(Details(record));
                      }}
                    >
                      details
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </Container>
      {record.length === 0 ? (
        ""
      ) : (
        <div
        className=""
        style={{
          backgroundColor: "hsla(0, 0%, 0%, 0.6)",
          padding: "2px 10px",
          borderRadius: 3,
          width: "100%",
          height: "100%",
          position: "fixed",
          top: "0",
          zIndex: "10",
          overflow: "auto",
        }}
      >
{record.map((item, index) => (
        <div key={index}
          className=" h-100 d-flex justify-content-center align-items-center "
        >
          <div className="card mb-3 pt-5 h-75 my-5 w-100"> {/* Adjust width */}
            <button
              className="btn position-absolute text-dark fs-2 fw-bold"
              onClick={() => {
                dispatch(clearRecord());
              }}
              style={{ right: "20px", top: "0px" }}
            >
              X
            </button>
            
              <div  className="row g-0 overflow-auto">
                <div className="col-md-4">
                  <img
                    src={item.image}
                    className="img-fluid rounded-start"
                    alt="image"
                    style={{ maxWidth: "100%", maxHeight: "60vh" }} // Make the image responsive
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title fs-2 fw-bold">{item.title}</h5>
                    <p class="card-text lh-lg ms-5">{item.description}</p>
                    <div className="d-flex">
                      <p class="card-text ms-5 fs-4 fw-bold">{item.price}$</p>
                      <p class="card-text ms-5 fs-4 fw-bolder">
                        Rate ::{" "}
                        <span className="fst-italic fs-5">
                          {item.rating.rate}
                          <i className=" text-warning fa fa-star" aria-hidden="true"></i>
                        </span>
                      </p>
                    </div>
                    <p className="card-text ms-5 fs-4 fw-bolder">
                      Quantity available ::{" "}
                      <span className="fst-italic fs-5">
                        {item.rating.count}
                      </span>
                    </p>
                    <button
                      className="card-link btn btn-outline-dark  ms-5"
                      onClick={() => {
                        dispatch(getProduct(item.id));
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
          
          </div>
        </div>
          ))}
      </div>
      )}
    </div>
  );
};

export default Index;
