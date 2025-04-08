import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { decreaseProduct, increaseProduct, removeItem } from '../../redux/slices/shoppingCart';
import '../../assets/css/cart.css'
import '../../assets/css/ShoppeeCart.css'
import { Link } from 'react-router-dom';

function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.shopping);
    
    let totalCost = 0;
    let totalRate = 0;

 
    cartItems.forEach((item) => {
        totalCost += item.price * item.qty;
        totalRate += (item.price * item.qty * item.rate) / 100;
    });

    return (
        <div className="shopping_cart_area">
            <div className="container">
                <form action="#" className='Form'>
                    <div className="row ">
                        <div className="col-12">
                            <div className="table_desc">
                                <div className="cart_page table-responsive">
                                    <table className='Box__data'>
                                        <thead>
                                            <tr className='title'>
                                                <th className="product_remove">Delete</th>
                                                <th className="product_remove">Images</th>
                                                <th className="product_name">Product</th>
                                                <th className="product-price">Price</th>
                                                <th className="product_quantity">Quantity</th>
                                                <th className="product_total">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartItems.map((item) => (
                                                <tr key={item._id}>
                                                    <td className="product_remove">
                                                        <a onClick={() => dispatch(removeItem(item._id))}>
                                                        <i class="fa fa-trash" aria-hidden="true"></i>                                                        
                                                        </a>
                                                    </td>
                                                     <td className="product_img" style={
                                                        {width: "100px",
                                                        height: "100px"}
                                                    }><img src={item.img} alt="" /></td>
                                                    <td className="product_name"><a>{item.name}</a></td>
                                                    <td className="product-price">£{item.price}</td>
                                                    <td className="product_quantity">
                                                        <RemoveCircleRoundedIcon onClick={() => dispatch(decreaseProduct(item))} style={{ cursor: 'pointer' }} />
                                                        <span style={{ fontSize: '20px', background: '#E8EAF6', padding: '4px 7px 7px 7px' }}>{item.qty}</span>
                                                        <AddCircleRoundedIcon onClick={() => dispatch(increaseProduct(item))} style={{ cursor: 'pointer' }} />
                                                    </td>
                                                    <td className="product_total">£{item.price * item.qty}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="cart_submit">
                                    <button type="submit" onClick={(e) => e.preventDefault()}>Update Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="coupon_area">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="coupon_code left">
                                    <h3>Coupon</h3>
                                    <div className="coupon_inner">
                                        <p>Enter your coupon code if you have one.</p>
                                        <input placeholder="Coupon code" type="text" />
                                        <button type="submit">Apply coupon</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="coupon_code right">
                                    <h3>Cart Totals</h3>
                                    <div className="coupon_inner">
                                        <div className="cart_subtotal">
                                            <p>Subtotal</p>
                                            <p className="cart_amount">£{totalCost}</p>
                                        </div>
                                        <div className="cart_subtotal ">
                                            <p>Shipping</p>
                                            <p className="cart_amount"><span>Flat Rate:</span> £{totalRate}</p>
                                        </div>
                                        <a>Calculate shipping</a>

                                        <div className="cart_subtotal">
                                            <p >Total</p>
                                            <p className="cart_amount" id='total'>£{totalCost + totalRate}</p>
                                        </div>
                                        <div className="checkout_btn">
                                            
                                            <span className="iconCart" ><Link to='/Cart'> <i class="fa fa-shopping-cart" aria-hidden="true"></i>Proceed to Checkout</Link></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Cart;
