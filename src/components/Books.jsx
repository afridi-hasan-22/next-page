import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Books = () => {
    // const [boooks, setBooks] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.itbook.store/1.0/new')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // },[])
    const {books} = useLoaderData()
    console.log(books);
    return (
        <div className='px-4 py-5 sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto md:px-24 lg-px-8 lg:py-20'>
           <div className="grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2">
            {
                books.map(book => (
                    <div className='overflow-hidden transition duration-300 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl relative'>
                        <img src={book.image} alt="" className='object-cover w-full h-56 md:h-64 lg:h-80'/>
                        <div className='bg-black text-gray-300 bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-200  absolute inset-0 px-6 py-4 flex flex-col'>
                            <p>{book.title}</p>
                            <br />
                            <p>{book.subtitle.substring(0,45)}...</p>
                             <br />
                             <p className='mt-auto'>{book.price}</p>
                        </div>
                    </div>
                ))
            }
           </div>
        </div>
    );
};

export default Books;