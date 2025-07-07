import React, { useState } from 'react';

const AddProductsForm = () => {
    const [product, setProduct] = useState({
        image: '',
        title: '',
        description: '',
        price: '',
        category: '',
        stock: '',
        unit: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://green-agro-server.vercel.app/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert(`Add products : ${product.title}`)
                }
            })
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-base-100 shadow-xl rounded-xl mt-10">
            <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Add New Agro Product</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Image URL */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Image URL</span>
                    </label>
                    <input
                        type="text"
                        name="image"
                        placeholder="https://example.com/image.jpg"
                        value={product.image}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Title</span>
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={product.title}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        className="textarea textarea-bordered w-full"
                        rows="4"
                        required
                    ></textarea>
                </div>

                {/* Price */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price (৳)</span>
                    </label>
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Category */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select
                        name="category"
                        value={product.category}
                        onChange={handleChange}
                        className="select select-bordered w-full"
                        required
                    >
                        <option disabled value="">Select a category</option>
                        <option>Vegetables</option>
                        <option>Fruits</option>
                        <option>Seeds</option>
                        <option>Fertilizers</option>
                        <option>Tools</option>
                        <option>Pesticides</option>
                        <option>Organic Products</option>
                        <option>Animal Feed</option>
                        <option>Equipment</option>
                        <option>Irrigation</option>
                    </select>
                </div>

                {/* Stock */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Stock / Quantity</span>
                    </label>
                    <input
                        type="number"
                        name="stock"
                        value={product.stock}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Unit */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Unit</span>
                    </label>
                    <select
                        name="unit"
                        value={product.unit}
                        onChange={handleChange}
                        className="select select-bordered w-full"
                        required
                    >
                        <option disabled value="">Select a unit</option>
                        <option>kg</option>
                        <option>gm</option>
                        <option>litre</option>
                        <option>pcs</option>
                    </select>
                </div>

                {/* Submit Button */}
                <div className="form-control mt-6">
                    <button className="btn btn-success w-full">Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddProductsForm;
