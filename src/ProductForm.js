import React, {useState} from "react";

function ProductForm() {
    const [form, setForm] = useState({});

    const type = 'type1';
    const onFormChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        })
    };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(form);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Tên sản phẩm</label>
                    <input type="text"
                           className="form-control"
                           id="exampleInputEmail1"
                           aria-describedby="emailHelp"
                           name={'name'}
                           onChange={onFormChange}
                    />
                        {/*<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone*/}
                        {/*    else.</small>*/}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Giá</label>
                    <input type="text" className="form-control"
                            name={'price'}
                           id="exampleInputPassword1"
                           onChange={onFormChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Thumbnail</label>
                    <input type="text" className="form-control"
                           name={'thumbnail'}
                           id="exampleInputPassword1"
                           onChange={onFormChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default ProductForm;
