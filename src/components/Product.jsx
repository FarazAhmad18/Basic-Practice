import Prices from "./Prices"
// import './Product.css'
export default function Product({title, idx})
{
    const desc =["8000 DPI", "Intuitive touch","zebronics","Intuitive touch"]
    const oldPrices=["123","1234","98797","2232"]
    const newPrices=["12","134","9877","232"]
    let styles={
        height: "200px",
        width: "200px",
        border:"2px solid red",
    }
    return(
       
        <div className="prod" style={styles}>
        <h4>{title}</h4>
        <p>{desc[idx]}</p>
        <Prices oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}></Prices>
        </div>
        
    )
}