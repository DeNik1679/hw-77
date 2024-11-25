import './cartProduct.css'

export const CartProduct = ({ cart, setCart }) => {

    const addCount = (obj) => {
        const ind = cart.findIndex((elem) => {
            return elem.id === obj.id
        })

        cart[ind].cont += 1;
        setCart([...cart]);  
    }

    const minusCount = (obj) => {
        const ind = cart.findIndex((elem) => {
            return elem.id === obj.id
        }) 

        if(cart[ind].cont === 1){
            setCart(
                cart.filter((product) => {
                    return product.id !== obj.id
                })
            )
        }else{
            cart[ind].cont -= 1;
            setCart([...cart]);
        }
    }

    const deleteCart = (obj) => {
        setCart(cart.filter((product) => {
            return product.id !== obj.id
        }))
    }
    return (
        <div className='cartBlock'>
            {
                cart &&
                cart.map((elem) => (
                    <div className='product'>
                        <div className='productPhoto'>
                            <img src={elem.image} alt="" />
                        </div>
                        <div className='productDescription'>
                            <div>
                                <h3>{elem.title}</h3>
                                <p>Size: <span>Large</span></p>
                                <p>Color: <span>White</span></p>
                            </div>
                            <h3 className='priceProduct'>${elem.price * elem.cont}</h3>
                        </div>
                        <div className='productTotal'>
                            <svg onClick={() => deleteCart(elem)} width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.25 3.5H13.5V2.75C13.5 2.15326 13.2629 1.58097 12.841 1.15901C12.419 0.737053 11.8467 0.5 11.25 0.5H6.75C6.15326 0.5 5.58097 0.737053 5.15901 1.15901C4.73705 1.58097 4.5 2.15326 4.5 2.75V3.5H0.75C0.551088 3.5 0.360322 3.57902 0.21967 3.71967C0.0790178 3.86032 0 4.05109 0 4.25C0 4.44891 0.0790178 4.63968 0.21967 4.78033C0.360322 4.92098 0.551088 5 0.75 5H1.5V18.5C1.5 18.8978 1.65804 19.2794 1.93934 19.5607C2.22064 19.842 2.60218 20 3 20H15C15.3978 20 15.7794 19.842 16.0607 19.5607C16.342 19.2794 16.5 18.8978 16.5 18.5V5H17.25C17.4489 5 17.6397 4.92098 17.7803 4.78033C17.921 4.63968 18 4.44891 18 4.25C18 4.05109 17.921 3.86032 17.7803 3.71967C17.6397 3.57902 17.4489 3.5 17.25 3.5ZM7.5 14.75C7.5 14.9489 7.42098 15.1397 7.28033 15.2803C7.13968 15.421 6.94891 15.5 6.75 15.5C6.55109 15.5 6.36032 15.421 6.21967 15.2803C6.07902 15.1397 6 14.9489 6 14.75V8.75C6 8.55109 6.07902 8.36032 6.21967 8.21967C6.36032 8.07902 6.55109 8 6.75 8C6.94891 8 7.13968 8.07902 7.28033 8.21967C7.42098 8.36032 7.5 8.55109 7.5 8.75V14.75ZM12 14.75C12 14.9489 11.921 15.1397 11.7803 15.2803C11.6397 15.421 11.4489 15.5 11.25 15.5C11.0511 15.5 10.8603 15.421 10.7197 15.2803C10.579 15.1397 10.5 14.9489 10.5 14.75V8.75C10.5 8.55109 10.579 8.36032 10.7197 8.21967C10.8603 8.07902 11.0511 8 11.25 8C11.4489 8 11.6397 8.07902 11.7803 8.21967C11.921 8.36032 12 8.55109 12 8.75V14.75ZM12 3.5H6V2.75C6 2.55109 6.07902 2.36032 6.21967 2.21967C6.36032 2.07902 6.55109 2 6.75 2H11.25C11.4489 2 11.6397 2.07902 11.7803 2.21967C11.921 2.36032 12 2.55109 12 2.75V3.5Z" fill="#FF3333"/>
                            </svg>
                            <div className='total'> 
                                <button onClick={() => minusCount(elem)}>-</button>
                                <span>{elem.cont}</span>
                                <button onClick={() => addCount(elem)}>+</button>
                            </div>
                        </div>
                        
                    </div>
                ))
            }
        </div>
    );
}
