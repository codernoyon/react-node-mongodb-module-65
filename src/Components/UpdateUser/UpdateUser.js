import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/user/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data));
    }, [id]);


    const handleUpdateUser = event => {
        event.preventDefault();
        const name = event.target.fullName.value;
        const email = event.target.email.value;
        const updatedUser = {name, email};
        
        

        // send data to the server
        const url = `http://localhost:5000/user/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log('update success', data);
            event.target.reset();
        })
    };

    return (
        <section className='py-5'>
            <div className="container mx-auto">
            <form onSubmit={handleUpdateUser} className=" bg-gray-100 rounded-lg p-8 flex flex-col md:w-2/6 mx-auto">
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Update {user.name} details</h2>
                    <div className="relative mb-4">
                        <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
                        <input type="text" id="full-name" name="fullName" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <button type='submit' className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Update User</button>
                    <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                </form>
            </div>
        </section>
    );
};

export default UpdateUser;