import React from "react";


function Product({product}) {
    // console.log(props);
    // const {product} = props;
    // const product = props.product;

    return (
        <>
            <div className="card">
                <img src={ product?.thumbnail } className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{product?.name}</h5>
                        <p className="card-text">{product?.price}</p>
                        {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
                    </div>
            </div>
            </>
    )
}

export default Product;
