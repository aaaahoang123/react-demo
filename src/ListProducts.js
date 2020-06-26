import React, {useEffect, useState} from "react";
import Product from "./Product";
import Axios from "axios";

function ListProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        Axios.get('http://hoangdosite.buzz/products.php')
            .then((res) => {
                setProducts(res.data);
            });
    }, []);

    const addProduct = () => {
        Axios.post('http://hoangdosite.buzz/add_products.php', {
            "thumbnail": "https://salt.tikicdn.com/cache/280x280/ts/product/96/9a/25/d7268497f0b1dc626a0c89301e5d8f67.jpg",
            "name": "Laptop HP Pavilion 15-cs3012TU 8QP30PA (Core i5-1035G1/ 8GB DDR4 2666MHz/ 512GB PCIe NVMe/ 15.6 FHD IPS/ Win10) - Hàng Chính Hãng",
            "price": 15923000
        }).then(res => {
            setProducts([
                ...products,
                res.data
            ])
        });
    }

    return (
        <>
            <div className={'row'}>
                {
                    products.map(product => {
                        return (
                            <div className={'col col-md-3'}>
                                <Product product={product} />
                            </div>
                        )
                    })
                }
            </div>
            <div className={'row'}>
                <button className={'btn btn-primary'}
                        onClick={addProduct}>
                    Thêm sản phẩm
                </button>
            </div>
        </>
    );
}

export default ListProducts;
