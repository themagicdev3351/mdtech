"use client";

import { useEffect, useState } from "react";
import { createClientSide } from "@/utils/supabase/client";

interface Product {
    id?: number;
    category_id: number;
    name: string;
    description: string;
    price: number;
    stock_quantity: number;
    user_id: string;
}

const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [formData, setFormData] = useState<Product>({
        category_id: 0,
        name: "",
        description: "",
        price: 0,
        stock_quantity: 0,
        user_id: "",
    });
    const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
    const [isFormOpen, setFormOpen] = useState(false);

    const supabase = createClientSide();

    // Fetch products from Supabase
    useEffect(() => {
        const fetchProducts = async () => {
            const { data, error } = await supabase.from("products").select();
            if (error) {
                console.error("Error fetching products:", error.message);
            } else if (data) {
                setProducts(data);
            }
        };

        fetchProducts();
    }, []);

    // Handle input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Add or update a product
    const handleSaveProduct = async () => {
        if (currentProduct) {
            // Update existing product
            const { error } = await supabase
                .from("products")
                .update(formData)
                .eq("id", currentProduct.id);

            if (error) {
                console.error("Error updating product:", error.message);
            } else {
                setProducts((prev) =>
                    prev.map((product) => (product.id === currentProduct.id ? { ...formData, id: currentProduct.id } : product))
                );
            }
        } else {
            // Add new product
            const { data, error } = await supabase.from("products").insert([formData]);

            if (error) {
                console.error("Error adding product:", error.message);
            } else if (data) {
                setProducts((prev) => [...prev, data[0]]);
            }
        }

        setFormOpen(false);
        setCurrentProduct(null);
        setFormData({
            category_id: 0,
            name: "",
            description: "",
            price: 0,
            stock_quantity: 0,
            user_id: "",
        });
    };

    // Delete a product
    const handleDeleteProduct = async (productId: number) => {
        const { error } = await supabase.from("products").delete().eq("id", productId);

        if (error) {
            console.error("Error deleting product:", error.message);
        } else {
            setProducts((prev) => prev.filter((product) => product.id !== productId));
        }
    };

    // Open the form to edit a product
    const handleEditProduct = (product: Product) => {
        setCurrentProduct(product);
        setFormData(product);
        setFormOpen(true);
    };

    return (
        <main className="p-4">
            <h1 className="text-2xl font-bold mb-4">Products</h1>
            <div className="w-full max-w-4xl mx-auto">
                <button
                    onClick={() => {
                        setFormOpen(true);
                        setCurrentProduct(null);
                    }}
                    className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Add Product
                </button>

                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">Category ID</th>
                            <th className="border border-gray-300 px-4 py-2">Name</th>
                            <th className="border border-gray-300 px-4 py-2">Description</th>
                            <th className="border border-gray-300 px-4 py-2">Price</th>
                            <th className="border border-gray-300 px-4 py-2">Stock Quantity</th>
                            <th className="border border-gray-300 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td className="border border-gray-300 px-4 py-2">{product.category_id}</td>
                                <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{product.description}</td>
                                <td className="border border-gray-300 px-4 py-2">${product.price.toFixed(2)}</td>
                                <td className="border border-gray-300 px-4 py-2">{product.stock_quantity}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <button
                                        onClick={() => handleEditProduct(product)}
                                        className="mr-2 px-4 py-1 bg-yellow-500 text-white rounded"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteProduct(product.id!)}
                                        className="px-4 py-1 bg-red-500 text-white rounded"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {isFormOpen && (
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
                        <div className="bg-white p-6 rounded shadow-md w-96">
                            <h2 className="text-lg font-bold mb-4">
                                {currentProduct ? "Edit Product" : "Add Product"}
                            </h2>
                            <form>
                                <label className="block mb-2">
                                    Category ID:
                                    <input
                                        name="category_id"
                                        value={formData.category_id}
                                        onChange={handleInputChange}
                                        type="number"
                                        className="w-full border px-2 py-1 rounded"
                                    />
                                </label>
                                <label className="block mb-2">
                                    Name:
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        type="text"
                                        className="w-full border px-2 py-1 rounded"
                                    />
                                </label>
                                <label className="block mb-2">
                                    Description:
                                    <input
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        type="text"
                                        className="w-full border px-2 py-1 rounded"
                                    />
                                </label>
                                <label className="block mb-2">
                                    Price:
                                    <input
                                        name="price"
                                        value={formData.price}
                                        onChange={handleInputChange}
                                        type="number"
                                        className="w-full border px-2 py-1 rounded"
                                    />
                                </label>
                                <label className="block mb-2">
                                    Stock Quantity:
                                    <input
                                        name="stock_quantity"
                                        value={formData.stock_quantity}
                                        onChange={handleInputChange}
                                        type="number"
                                        className="w-full border px-2 py-1 rounded"
                                    />
                                </label>
                                <label className="block mb-4">
                                    User ID:
                                    <input
                                        name="user_id"
                                        value={formData.user_id}
                                        onChange={handleInputChange}
                                        type="text"
                                        className="w-full border px-2 py-1 rounded"
                                    />
                                </label>
                                <button
                                    type="button"
                                    onClick={handleSaveProduct}
                                    className="px-4 py-2 bg-green-500 text-white rounded mr-2"
                                >
                                    Save
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setFormOpen(false)}
                                    className="px-4 py-2 bg-gray-500 text-white rounded"
                                >
                                    Cancel
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
};

export default Products;
