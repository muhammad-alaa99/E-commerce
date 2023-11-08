import React from "react";
import { ButtonGroup, Container, Table } from "react-bootstrap";
import Header from "../components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  minasItem,
  pluseItem,
  removeItem,
} from "../../store/ProductSlice";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Index = () => {
  const dispatch = useDispatch();
  const { cart, loading } = useSelector((state) => state.Products);

  const Product = cart.map((item, index) => (
    <tr key={index}>
      <td>{++index}</td>
      <td style={{ width: "20rem" }}>{item.title}</td>
      <td style={{ width: "20rem" }}>
        <img src={item.image} alt="image" width="150px" height="150px" />
      </td>
      <td>{item.price * item.quantity}$</td>
      <td>{item.quantity}</td>
      <td>
        <ButtonGroup>
          <button
            className=" btn btn-outline-dark"
            onClick={() => {
              dispatch(pluseItem(item));
            }}
          >
            +
          </button>
          <button
            className=" btn btn-outline-dark"
            onClick={() => {
              dispatch(minasItem(item));
            }}
          >
            -
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() => {
              dispatch(removeItem(item));
            }}
          >
            Delete
          </button>
        </ButtonGroup>
      </td>
    </tr>
  ));

  const Loading = () => {
    return (
      <div className="row">
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </div>
    );
  };
  return (
    <>
      <Header />
      <Container>
        <div className=" mb-5 pt-5 text-center">
          <h2 className="fw-bolder pt-5 fs-1">cart</h2>
          <hr className="w-25 m-auto" />
          <p className="fs-3 fw-bold">
            total price :{" "}
            <span>
              {cart
                .reduce((acc, item) => {
                  acc += item.price * item.quantity;
                  return acc;
                }, 0)
                .toFixed(2)}
              $
            </span>
          </p>
        </div>
        {cart.length === 0 ? (
          ""
        ) : (
          <ButtonGroup className="mb-2">
            <button
              className="btn btn-outline-danger px-5"
              onClick={() => {
                dispatch(clearCart());
              }}
            >
              clear
            </button>
            <button className="btn btn-outline-success px-5">bay naw</button>
          </ButtonGroup>
        )}
        {loading ? (
          <Loading />
        ) : (
          <Table striped bordered responsive hover>
            <thead>
              <tr>
                <th>#</th>
                <th>name</th>
                <th>image</th>
                <th>price</th>
                <th>quantity</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>{Product}</tbody>
          </Table>
        )}
      </Container>
    </>
  );
};

export default Index;
