# Ian-Product-Card

Este es un paquete de pruebas de despligue en NPM

### Ian Carlos Ortega

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'ian-product-card'
```


```
<ProductCard
    product={ product }
    initialValues={{
    count: 4,
    maxCount: 10
    }}
>
    {
    ({ reset, increaseBy, isMaxCountReached, count }) => (
        <>
        <ProductImage />
        <ProductTitle  />
        <ProductButtons />
        </>
    )
    }
</ProductCard>
```