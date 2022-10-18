import {useDispatch, useSelector} from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { removeItemFromCart,addItemToCart,clearItemFromCart } from '../../store/cart/cart.action';
import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl,price,quantity} = cartItem;
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()
    const clearItemHandler = () => dispatch( clearItemFromCart(cartItems,cartItem));
    const addItemHandler = () =>dispatch (addItemToCart(cartItems,cartItem));
    const removeItemHandler = () =>  dispatch(removeItemFromCart(cartItems,cartItem));

    return(
           <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={ `${name}`} />
            </div>
            <span className='name'>{name} </span>
            <span className='quantity'>
            <div className='arrow' onClick={addItemHandler}>
                &#x2B;
            </div>
            <span className='value'>  {quantity} </span>
             <div className='arrow' onClick={removeItemHandler }>
                 &#x2D;
             </div>
            </span>
            <span className='price'>{price} </span>
            <div className='remove-button' onClick={clearItemHandler}> &#x2612;</div>
           
           </div>

    )
}
export default CheckoutItem;