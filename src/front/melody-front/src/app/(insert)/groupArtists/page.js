"use client"

import React, { useState } from 'react';

function GroupArtists() {
    // Define state variables for form fields
    //const [soloArtistsId, setSoloArtistsId] = useState('');
    //const [singerId, setSingerId] = useState(null); // 초기값은 null로 설정
    const [groupName, setGroupName] = useState('');
    const [groupPhoto, setGroupPhoto] = useState('');
    const [groupInfo, setGroupInfo] = useState('');
    const [groupHashtags, setGroupHashtags] = useState('');

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a user object with the form data
        const groupArtists = {
            //soloArtistsId,
            groupName,
            groupPhoto,
            groupInfo,
            groupHashtags,
        };

        try {
            // Send a POST request to the backend API
            const response = await fetch('/api/GroupArtist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(groupArtists),
            });

            if (response.ok) {
                // Registration successful, you can redirect the user to a success page
                alert('Registration successful!');
                // Optionally, redirect to a success page or perform other actions
            } else {
                // Registration failed, display an error message
                alert('Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle any network or other errors here
        }
    };

    return (
        <div className="container mx-auto p-8">
            <section className="signup" id="signup">
                <div className="section-inner">
                    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                        <h1 className="text-2xl font-bold mb-4">GROUP ARTISTS</h1>
                        <div className="space-y-4">
                            <div>
                                <label className="block">GROUP NAME</label>
                                <input type="text" value={groupName} onChange={(e) => setGroupName(e.target.value)} required className="w-full rounded border px-3 py-2" />
                                {/* Add error message div */}
                            </div>

                            <div>
                                <label className="block">GROUP PHOTO</label>
                                <input type="text" value={groupPhoto} onChange={(e) => setGroupPhoto(e.target.value)} required className="w-full rounded border px-3 py-2" />
                                {/* Add error message div */}
                            </div>


                            <div>
                                <label className="block">GROUP INFO</label>
                                <input type="text" value={groupInfo} onChange={(e) => setGroupInfo(e.target.value)} required className="w-full rounded border px-3 py-2" />
                                {/* Add error message div */}
                            </div>

                            <div>
                                <label className="block">GROUP HASHTAGS</label>
                                <input type="text" value={groupHashtags} onChange={(e) => setGroupHashtags(e.target.value)} required className="w-full rounded border px-3 py-2" />
                                {/* Add error message div */}
                            </div>

                            <div>
                                <input type="submit" value="CREATE" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer" />
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default GroupArtists;