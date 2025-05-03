import React from 'react'
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Package } from 'lucide-react';

const Order = () => {
    const product = {
        id: 2,
        name: "Biochar Soil Enhancer",
        size: "5kg",
        price: "₹999",
        originalPrice: "₹1499",
        description: "Ideal for larger farms and agricultural use",
        image: "/images/products/biochar.jpg",
        features: [
            "Treats up to 100 sq meters",
            "Long-lasting soil health",
            "Increases crop yield by 40%"
        ]
    };

    return (
        <div className='relative bg-gradient-to-br from-biocharCream to-white min-h-screen'>
            <Navbar />

            <div className='section-container py-12'>
                <div className='max-w-6xl mx-auto'>
                    <h1 className='text-4xl font-bold text-center text-biocharGreen mb-2'>Complete Your Order</h1>
                    <p className='text-center text-gray-600 mb-12 max-w-2xl mx-auto'>
                        Fill in your details to place your order. We'll contact you for confirmation.
                    </p>

                    <div className='grid md:grid-cols-2 gap-8'>
                        {/* Product Summary Card */}
                        <Card className="border-biocharGreen border-2">
                            <CardHeader>
                                <div className="flex items-center gap-2">
                                    <Package className="h-5 w-5 text-biocharGreen" />
                                    <CardTitle>Your Selected Product</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="w-full md:w-1/3 h-48 overflow-hidden rounded-lg">
                                        <img
                                            src={product.image}
                                            alt={`${product.name} ${product.size}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="w-full md:w-2/3">
                                        <h3 className="text-xl font-bold text-biocharBrown">{product.name} - {product.size}</h3>
                                        <div className="flex items-center gap-2 my-2">
                                            <span className="text-2xl font-bold text-biocharGreen">{product.price}</span>
                                            <span className="text-gray-500 line-through">{product.originalPrice}</span>
                                        </div>
                                        <p className="text-gray-600 mb-4">{product.description}</p>
                                        <ul className="space-y-2">
                                            {product.features.map((feature, index) => (
                                                <li key={index} className="flex items-start">
                                                    <Check className="h-5 w-5 text-biocharGreen mr-2 flex-shrink-0 mt-0.5" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Order Form */}
                        <Card className="bg-biocharSoftGreen">
                            <CardHeader>
                                <CardTitle className="text-2xl text-biocharGreen">Shipping Information</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form
                                    action="https://docs.google.com/forms/d/e/1FAIpQLSc_g-mxzlVgtbW4kqZVOhsdBiiHrWn3f59SfkhEwPrsR8qfFg/formResponse"
                                    method="POST"
                                    target="_blank"
                                >
                                    {/* Hidden required fields for Google Forms */}
                                    <input type="hidden" name="fvv" value="1" />
                                    <input type="hidden" name="draftResponse" value="[]" />
                                    <input type="hidden" name="pageHistory" value="0" />
                                    <input type="hidden" name="fbzx" value="-5743902190505576000" />

                                    {/* Full Name */}
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="entry.2100212293"
                                            required
                                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-biocharGreen"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="mb-4">
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="entry.630770383"
                                            required
                                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-biocharGreen"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="entry.1487250067"
                                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-biocharGreen"
                                        />
                                    </div>

                                    {/* Address */}
                                    <div className="mb-4">
                                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                                            Full Address *
                                        </label>
                                        <textarea
                                            id="address"
                                            name="entry.494119239"
                                            required
                                            rows={3}
                                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-biocharGreen"
                                        ></textarea>
                                    </div>

                                    {/* Quantity Dropdown - Fixed */}
                                    <div className="mb-">
                                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                                            Quantity *
                                        </label>
                                        <select
                                            id="quantity"
                                            name="entry.1361012101"
                                            required
                                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-biocharGreen"
                                        >
                                            <option value="">Select quantity</option>
                                            <option value="1 Bag (1kg)">1 Bag (1kg)</option>
                                            <option value="1 Bag (5kg)">1 Bag (5kg)</option>
                                            <option value="2 Bags (10kg)">2 Bags (10kg)</option>
                                            <option value="3 Bags (15kg)">3 Bags (15kg)</option>
                                            <option value="4 Bags (20kg)">4 Bags (20kg)</option>
                                            <option value="5 Bags (25kg)">5 Bags (25kg)</option>
                                        </select>
                                    </div>

                                    {/* Payment Dropdown */}
                                    <div className="mb-6">
                                        <label htmlFor="payment" className="block text-sm font-medium text-gray-700 mb-1">
                                            Payment Method *
                                        </label>
                                        <select
                                            id="payment"
                                            name="entry.42732745"
                                            required
                                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-biocharGreen"
                                        >
                                            <option value="">Select payment</option>
                                            <option value="Cash On Delivery">Cash on Delivery</option>
                                            <option value="UPI">UPI</option>
                                            <option value="Bank Transfer">Bank Transfer</option>
                                        </select>
                                    </div>

                                    <Button type="submit" className="w-full bg-biocharGreen hover:bg-biocharDarkGreen py-6 text-lg">
                                        Place Order
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order