export default function Prices({oldPrice,newPrice})
{
    let style={
display:"flex",
gap:"20px",
justifyContent:"center"
    }
    let oldStyle={
        textDecorationLine:"line-through"
    }
return(
    <div style={style}> <p style={oldStyle}>{oldPrice}</p>
    <p>{newPrice}</p>
    </div>
)
}