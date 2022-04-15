import React, { createContext } from 'react';
import { useProduct } from '../hooks/useProduct'
import styles from '../styles/styles.module.css'

import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCartHandlers } from '../interfaces/interfaces';

export interface Props {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children: ( args: ProductCartHandlers ) => JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value ?: number;
    initialValues?: InitialValues
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });
        
    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount
        }}>
            <div style={ style } className={ `${styles.productCard} ${className}` }>
                
                { 
                    children({
                        count: counter,
                        isMaxCountReached,
                        maxCount: initialValues?.maxCount,
                        product,
                        increaseBy,
                        reset
                    }) 
                }

            </div>
        </Provider>
    )
}
