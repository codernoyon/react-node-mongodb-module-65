import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/user")
            .then(res => res.json())
            .then(data => setUsers(data));

    }, []);


    const handleUserDelete = id => {
        const proceed = window.confirm("Are you sure you want delete?");
        if (proceed) {
            console.log('deleting user id', id);
            const url = `http://localhost:5000/user/${id}`;
            fetch(url, {
                'method': 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deletd');
                        const remaining = users.filter(user => user._id !== id);
                        setUsers(remaining);
                    }
                })
        } else {
            console.log("you cancle the popup");
        }
    }

    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-6 md:flex-row flex-col items-center ">
                <div className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 space-y-2 overflow-y-scroll text-white h-[500px]">
                    {
                        users.map(user => <div key={user._id} className='bg-indigo-500 p-3 rounded shadow flex items-center justify-between'>
                            <div>
                                <h3 className="text-xl">{user?.name}</h3>
                                <p>{user?.email}</p>
                            </div>
                            <div className='space-x-2'>
                                <Link to={`/update/${user._id}`} className='bg-orange-500 hover:bg-orange-600 text-white py-1 px-3 rounded'>Update</Link>
                                <button onClick={() => handleUserDelete(user._id)} className='bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded'>Delete</button>
                            </div>
                        </div>)
                    }
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
                        <br className="hidden lg:inline-block" />readymade gluten
                    </h1>
                    <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;