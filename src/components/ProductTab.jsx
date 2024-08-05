import Product from "./Product"
export default function ProductTab()
{
    let styles={
        display:"flex",
        gap:"40px",
    }
return(
    <div style={styles}>
    <Product title="Logitect Mx Master" idx={0}></Product>
    <Product title="Logitect Ms Master" idx={1}></Product>
    <Product title="Logitect Mt Master" idx={2}></Product>
    <Product title="Logitect Mg Master" idx={3}></Product>
    </div>
)
}
