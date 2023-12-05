import { TProducts } from '@/data/type.data';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addCartItem } from '@/redux/reducer/appslice';
import { useSession } from 'next-auth/react';
import React,{useEffect,useState} from 'react';

const Checkout = () => {
    const dispatch = useAppDispatch()
    const [cartData,setCartData] = useState<TProducts>()
    const { data: session } = useSession();
    const { cart } = useAppSelector((state) => state.app);

//    useEffect(()=>{
//     const products = localStorage.getItem('cart')
//     console.log(products,"pro")
//     if(products){
//         dispatch(addCartItem(products as unknown as TProducts))
//         localStorage.removeItem('cart')
//     }

//    },[])

   console.log(cart,"cart")
    
    return (
        <div>
            {cart.map((item)=>{
                return(
                    <p>{item?.name}</p>
                )
            })}


            
        </div>
    );
};

export default Checkout;