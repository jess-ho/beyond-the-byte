import React from "react";
import { Formik, Field } from "formik";
import { Button, Card, Container } from "react-bootstrap";

const ShippingAddressForm = () => {
  return (
    <div>
      <Field type="text" name="streetNumber" />
      {/* <Field type="text" name="streetNumber" />
      <Field type="text" name="streetNumber" />
      <Field type="text" name="streetNumber" />
      <Field type="text" name="streetNumber" />
      <Field type="text" name="streetNumber" /> */}
    </div>
  );
};

const DeliveryTimeForm = () => {
  return <div>delivery time</div>;
};

const PaymentForm = () => {
  return <div>payments info</div>;
};

export const Checkout = () => {
  const totalCost = 60.01;
  const initialValues = {
    streetNumber: "23"
  };
  const submitMethod = e => {
    e.preventDefault();
    console.log("hello");
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={values => console.log(values)}
      >
        {({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <Card>
              <Card.Title>Shipping</Card.Title>
              <ShippingAddressForm />
            </Card>
            <Card>
              <Card.Title>Delivery</Card.Title>
              <DeliveryTimeForm />
            </Card>
            <Card>
              <Card.Title>Payment</Card.Title>
              <PaymentForm />
            </Card>
            <div>{totalCost}</div>
            <Button type="submit">Submit</Button>
          </form>
        )}
      </Formik>
    </Container>
  );
};
