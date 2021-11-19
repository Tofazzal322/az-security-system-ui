import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
// import CheckoutForm from './CheckOut';
import { Elements } from '@stripe/react-stripe-js';
import { Col, Row } from 'react-bootstrap';
import useAuth from '../../hook/useAuth';
import CheckOut from './CheckOut';


const stripePromise = loadStripe('pk_test_51JvnVTFN0so5PzLNH4PbBA18Sdj6KeluBFn4FgjP2rlRNtVJTJyqJksbqjM03AyvoOdth1MLUwXu1adzt9pdnCDG00kCwJSvch')

const Payment = () => {
    const { user } = useAuth();
    const { payId } = useParams();
    const [order, setOrder] = useState({});
    useEffect(() => {
        fetch(`https://fathomless-shelf-34125.herokuapp.com/orders/${payId}`)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [payId]);
    return (
        <div className="payment-form  p-5 text-success ">
            <h2 className="product-title text-success ">Submit your payment </h2>
            <hr />
            <Col className="mt-2">
                <h5>Buyer Name *</h5>
                <input
                  type="text"
                  className="w-100 input-field   h-75"
                  defaultValue={order.buyerName}
                //   {...register("productPrice")}
                />
              </Col>
            <Col className="mt-2">
                <h5>Buyer Email  *</h5>
                <input
                  type="text"
                  className="w-100 input-field  h-75"
                  defaultValue={user.email}
                //   {...register("productPrice")}
                />
              </Col>
            <Col className="mt-2">
                <h5>Buyer Address*</h5>
                <input
                  type="text"
                  className="w-100 input-field   h-75"
                  defaultValue={order.Address}
                //   {...register("productPrice")}
                />
              </Col>
            <Row className="mt-2">
            <Col  >
                <h5>Payment Method</h5>
                <input
                  type="text"
                  className="w-100 input-field  mt-2  "
                //   defaultValue=  { order.productPrice}
                    placeholder="Card"
                //   {...register("productPrice")}
                />
              </Col>
            <Col >
                <h5>Total Amount</h5>
                <input
                  type="text"
                  className="w-100 input-field  mt-2 "
                  defaultValue=  { order.productPrice}
                //   {...register("productPrice")}
                />
              </Col>
            </Row>
            {/* <h3 className=" text-danger">Buyer Name : {order.productName} </h3> */}
            <h4 className=" text-danger  my-3">Pay: ${order.productPrice}</h4>
            {order?.productPrice && <Elements className="mt-5" stripe={stripePromise}>
                <CheckOut
                    
                    order={order}
                />
            </Elements>}
        </div>
    );
};

export default Payment;

/*
1. install stripe and stripe-react
2. set publishable key
3. Elements
4. Checkout Form
-----
5. Create payment method
6. server: create payment Intent api
7. Load client secret
8. ConfirmCard payment
9. handle user error
*/




// import React from 'react';
// import { useParams } from 'react-router';
// import useOrders from '../../hook/useOrders';

// const Payments = () => {
//     const { payId } = useParams();
//     const { order } = useOrders()
    
//     const paymentFor = order.find(item => item._id === payId);


//     return (
//         <div>
//             <h1 className="product-title mt-5">Payment System Coming Soon..............</h1>
//             <h1 className="product-title mt-5">{payId}</h1>
//             <h1 className="product-title mt-5">${paymentFor?.productPrice}</h1>
//             <h1 className="product-title mt-5">{paymentFor?.productName}</h1>
//             <h1 className="product-title mt-5">{paymentFor?.buyerName}</h1>
            
            
            


//         </div>
//     );
// };

// export default Payments;