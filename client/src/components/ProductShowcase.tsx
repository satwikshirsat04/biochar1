import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Package, ShoppingCart, Leaf, Lock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { products } from '@/data/product';

const ProductShowcase: React.FC = () => {
    const products = [
        {
            id: 1,
            name: "Biochar Soil Enhancer",
            size: "1kg",
            price: "₹199",
            originalPrice: "₹299",
            description: "Perfect for small gardens and potted plants",
            image: "/images/products/biochar1.webp",
            features: [
                "Treats up to 20 sq meters",
                "Improves water retention",
                "Increases nutrient absorption"
            ]
        },
        {
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
            ],
            popular: true
        }
    ];

    return (
        <section id="products" className="section-container">
            <h2 className="section-title text-center animate-fade-up duration-700 delay-100">Our Biochar Products</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                100% organic and scientifically formulated to enhance soil fertility and increase crop yields naturally.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {products.map(product => (
                    <Card key={product.id} className={`relative overflow-hidden ${product.popular ? 'border-biocharGreen border-2' : ''}`}>
                        {product.popular && (
                            <div className="absolute top-0 right-0 bg-biocharGreen text-white py-1 px-4 text-sm font-semibold">
                                MOST POPULAR

                            </div>
                        )}
                        <CardHeader>
                            <div className="flex items-center gap-2 mb-2">
                                <Package className="h-5 w-5 text-biocharGreen" />
                                <CardTitle className="text-xl">{product.name}</CardTitle>
                            </div>
                            <div className="text-2xl font-bold text-biocharBrown">{product.size}</div>
                            <CardDescription>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-xl font-bold text-biocharGreen">{product.price}</span>
                                    <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
                                </div>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="w-full h-48 mb-4 overflow-hidden rounded-md">
                                <img
                                    src={product.image}
                                    alt={`${product.name} ${product.size}`}
                                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                                    loading="lazy"
                                />
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
                        </CardContent>
                        <CardFooter>
                            {/* <a
                                href="https://wa.me/+917498238505?text=I'm%20interested%20in%20buying%20your%20Biochar%20product"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full"
                            >
                                <Button className="btn-primary w-full flex items-center justify-center">
                                    <ShoppingCart className="mr-2 h-5 w-5" />
                                    Buy Now
                                </Button>
                            </a> */}
                            {/* Replace with your order page link */}
                            {/* <a
                                href="/order" // Link to your order page
                                className="w-full"
                            >
                                <Button className="btn-primary w-full flex items-center justify-center">
                                    <ShoppingCart className="mr-2 h-5 w-5" />
                                    Buy Now
                                </Button>
                            </a> */}
                            <Link
                                to={`/order?productId=${product.id}`}
                                className="w-full"
                            >
                                <Button className="btn-primary w-full flex items-center justify-center">
                                    <ShoppingCart className="mr-2 h-5 w-5" />
                                    Buy Now
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            {/* <WaveDivider
                color="#5C6F3D"
                opacity={0.15}
                className="my-16"
            /> */}

            <div className="mt-16">
                <h3 className="text-2xl font-bold text-center text-biocharGreen mb-8 animate-fade-up duration-700 delay-100">Key Benefits</h3>
                <div className="grid md:grid-cols-3 gap-8" id="trust-badges">
                    <div className="bg-biocharSoftGreen p-6 rounded-lg text-center">
                        <div className="w-16 h-16 bg-biocharGreen rounded-full flex items-center justify-center mx-auto mb-4">
                            <Leaf className="h-8 w-8 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-biocharGreen mb-2">100% Organic Certified</h4>
                        <p className="text-gray-700">
                            Our biochar is made from organic materials and certified for organic farming use.
                        </p>
                    </div>

                    <div className="bg-biocharSoftGreen p-6 rounded-lg text-center">
                        <div className="w-16 h-16 bg-biocharGreen rounded-full flex items-center justify-center mx-auto mb-4">
                            <Lock className="h-8 w-8 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-biocharGreen mb-2">Secure Payments</h4>
                        <p className="text-gray-700">
                            All transactions are secure and your information is protected
                        </p>
                    </div>

                    <div className="bg-biocharSoftGreen p-6 rounded-lg text-center">
                        <div className="w-16 h-16 bg-biocharGreen rounded-full flex items-center justify-center mx-auto mb-4">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2421/2421991.png"
                                alt="5000+ Farmers Trust Us"
                                className="w-8 h-8"
                            />
                        </div>
                        <h4 className="text-xl font-bold text-biocharGreen mb-2">5000+ Farmers Trust Us</h4>
                        <p className="text-gray-700">
                            Join thousands of satisfied farmers across India
                        </p>
                    </div>
                </div>
            </div>
            {/* 
            <WaveDivider
                flip
                color="#155724"
                opacity={0.1}
                className="my-20"
            /> */}


            <div className="mt-20">
                <h3 className="text-2xl font-bold text-center text-biocharGreen mb-12 animate-fade-up duration-700 delay-100">Before & After Results</h3>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h4 className="text-xl font-bold text-biocharBrown mb-4 animate-fade-up duration-700 delay-100">Before Biochar</h4>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-red-500 text-sm">1</span>
                                </div>
                                <p className="text-gray-700">Poor water retention and frequent irrigation needed</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-red-500 text-sm">2</span>
                                </div>
                                <p className="text-gray-700">Low nutrient availability and high fertilizer dependency</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-red-500 text-sm">3</span>
                                </div>
                                <p className="text-gray-700">Soil compaction and poor root development</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-red-500 text-sm">4</span>
                                </div>
                                <p className="text-gray-700">Reduced microbial activity and soil biodiversity</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h4 className="text-xl font-bold text-biocharGreen mb-4 animate-fade-up duration-700 delay-100">After Biochar</h4>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-green-500 text-sm">1</span>
                                </div>
                                <p className="text-gray-700">Improved water retention by up to 30%</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-green-500 text-sm">2</span>
                                </div>
                                <p className="text-gray-700">Enhanced nutrient availability and reduced fertilizer needs</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-green-500 text-sm">3</span>
                                </div>
                                <p className="text-gray-700">Better soil structure and root penetration</p>
                            </div>
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                    <span className="text-green-500 text-sm">4</span>
                                </div>
                                <p className="text-gray-700">Increased microbial activity and soil biodiversity</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Before & After Images Section */}
            <div className="mt-20">
                <h3 className="text-2xl font-bold text-center text-biocharGreen mb-12 animate-fade-up duration-700 delay-100">Visual Results</h3>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            id: 1,
                            before: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST8srKQe1vpvb10i5ePBOqAte6sma2GHQN_XvOIry04oU25ylEc5Gos0uIcoCUWy_DA5E&usqp=CAU",
                            after: "https://www.alltech.com/sites/default/files/styles/16_9_large/public/2022-08/Soil%20fertility%201200x675_web-min.png.jpg?itok=f-ktj8iF",
                            crop: "Cotton field"
                        },
                        {
                            id: 2,
                            before: "https://news.ufl.edu/media/newsufledu/images/2024/08/rice-wide-774x516.jpg",
                            after: "https://nutrien-ekonomics.com/wp-content/uploads/2019/11/photo-news20170321.jpg",
                            crop: "Rice paddy"
                        },
                        {
                            id: 3,
                            before: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGITqApkvJ4rx54zcKVUd4-jMu4UrXfFtjEQ&s",
                            after: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA9iTV1HLJT3ozspd1rqpDoLceUBXXC8QuqkR7RU2lU8oxpVRQy_66rv8i436mQhqGRf8&usqp=CAU",
                            crop: "Vegetable garden"
                        }
                    ].map((item) => (
                        <div key={item.id} className="space-y-4">
                            <h4 className="text-xl font-bold text-biocharBrown text-center animate-fade-up duration-700 delay-100">{item.crop}</h4>
                            <div className="space-y-4">
                                <div className="bg-white p-4 rounded-lg shadow-lg">
                                    <img
                                        src={item.before}
                                        alt={`Before Biochar - ${item.crop}`}
                                        className="w-full h-48 object-cover rounded-md"
                                        loading="lazy"
                                    />
                                    <p className="mt-2 text-sm text-gray-600 text-center">Before Biochar</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-lg">
                                    <img
                                        src={item.after}
                                        alt={`After Biochar - ${item.crop}`}
                                        className="w-full h-48 object-cover rounded-md"
                                        loading="lazy"
                                    />
                                    <p className="mt-2 text-sm text-gray-600 text-center">After Biochar</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default ProductShowcase; 
