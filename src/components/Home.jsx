// src/App.js
import React,{useState} from 'react';
import Cover from '../assets/cover.jpg'
import { useNavigate } from 'react-router';

const categories = [
    { name: 'Electronics', image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { name: 'Fashion', image: 'https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { name: 'Jewelery', image: 'https://images.pexels.com/photos/1395306/pexels-photo-1395306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { name: 'Accessories', image: 'https://images.pexels.com/photos/1460838/pexels-photo-1460838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
];

const bestSellers = [
    { name: 'Ancient Wall Clock', image: 'https://images.pexels.com/photos/2182727/pexels-photo-2182727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', price: '$29.99' },
    { name: 'Wooden Chair', image: 'https://images.pexels.com/photos/20621909/pexels-photo-20621909/free-photo-of-chair-near-table-and-window-in-cafe.jpeg?auto=compress&cs=tinysrgb&w=600', price: '$39.99' },
    { name: "Men's Leather Jacket", image: 'https://images.pexels.com/photos/2766298/pexels-photo-2766298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', price: '$19.99' },
    { name: 'BasketBall Shoes', image: 'https://images.pexels.com/photos/1192043/pexels-photo-1192043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', price: '$49.99' },
];

const testimonials = [
    {
        name: 'John',
        testimonial: 'Great products and excellent customer service!',
        image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        name: 'Mike',
        testimonial: 'I love shopping here. The quality is always top-notch.',
        image: 'https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        name: 'Jane',
        testimonial: 'Fast shipping and the products are exactly as described.',
        image: 'https://images.pexels.com/photos/2804282/pexels-photo-2804282.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
];

function App() {
    const navigate = useNavigate();
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const handleNext = () => {
        setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentTestimonial((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };
    return (
        <div className="bg-gray-100">
            
            <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://marketplace.canva.com/EAFdM-eiEug/1/0/1600w/canva-pink-aesthetic-minimalist-mood-board-photo-collage-facebook-cover-GnKPq9yRKg8.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-6">
                    <h1 className="text-5xl font-bold mb-4">Welcome to Our Store</h1>
                    <p className="text-xl mb-8">Discover our exclusive collection</p>
                    <button
                    onClick={()=>{
                        navigate('/shop')
                    }}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Shop Now
                    </button>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8 text-center">Featured Categories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories.map((category, index) => (
                            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                                <img src={category.image} alt={category.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                                </div>
                                <button 
                                onClick={()=>{
                                    navigate('/shop')
                                }}
                                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    Explore
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

           
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8 text-center">Best Sellers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {bestSellers.map((product, index) => (
                            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-lg text-center">
                                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
                                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                                <p className="text-lg font-semibold text-gray-700 mb-4">{product.price}</p>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Buy Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8 text-center">Customer Testimonials</h2>
                    <div className="relative max-w-3xl mx-auto">
                        <div className="flex justify-center items-center">
                            <button onClick={handlePrev} className="bg-gray-500 text-white p-2 rounded-full mr-4 focus:outline-none">
                                &lt;
                            </button>
                            <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full">
                                <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                                <p className="text-lg italic mb-4">"{testimonials[currentTestimonial].testimonial}"</p>
                                <h3 className="text-xl font-bold">{testimonials[currentTestimonial].name}</h3>
                            </div>
                            <button onClick={handleNext} className="bg-gray-500 text-white p-2 rounded-full ml-4 focus:outline-none">
                                &gt;
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;