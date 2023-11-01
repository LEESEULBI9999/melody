"use client"
import React, { useState } from 'react';

function Album() {
    // Define state variables for form fields
    const [albumTitle, setAlbumTitle] = useState('');
    const [coverPhoto, setCoverPhoto] = useState('');
    const [releaseDate, setReleaseDate] = useState(new Date());
    const [albumInfo, setAlbumInfo] = useState('');
    const [rating, setRating] = useState(0);
    const [replyCount, setReplyCount] = useState(0);
    const [likes, setLikes] = useState(0);
    const [musicVideoLink, setMusicVideoLink] = useState('');
    const [albumHashtags, setAlbumHashtags] = useState('');

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a user object with the form data
        const album = {
            albumTitle,
            coverPhoto,
            releaseDate,
            albumInfo,
            rating,
            replyCount,
            likes,
            musicVideoLink,
            albumHashtags
        };

        try {
            // Send a POST request to the backend API
            const response = await fetch('/api/albums', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(album),
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
                        <h1 className="text-2xl font-bold mb-4">ALBUM</h1>
                        <div className="space-y-4">
                            <div>
                                <label className="block">ALBUM TITLE</label>
                                <input type="text" value={albumTitle} onChange={(e) => setAlbumTitle(e.target.value)} required className="w-full rounded border px-3 py-2" />
                                {/* Add error message div */}
                            </div>

                            <div>
                                <label className="block">COVER PHOTO</label>
                                <input type="text" value={coverPhoto} onChange={(e) => setCoverPhoto(e.target.value)} required className="w-full rounded border px-3 py-2" />
                                {/* Add error message div */}
                            </div>


                            <div>
                                <label className="block">RELEASE DATE</label>
                                <input type="date" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} required className="w-full rounded border px-3 py-2" />
                                {/* Add error message div */}
                            </div>

                            <div>
                                <label className="block">ALBUM INFO</label>
                                <input type="text" value={albumInfo} onChange={(e) => setAlbumInfo(e.target.value)} required className="w-full rounded border px-3 py-2" />
                                {/* Add error message div */}
                            </div>

                            <div>
                                <label className="block">RATING</label>
                                <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} required className="w-full rounded border px-3 py-2" />
                                {/* Add error message div */}
                            </div>

                            <div>
                                <label className="block">REPLY COUNT</label>
                                <input type="number" value={replyCount} onChange={(e) => setReplyCount(e.target.value)} required className="w-full rounded border px-3 py-2" />
                                {/* Add error message div */}
                            </div>

                            <div>
                                <label className="block">LIKES</label>
                                <input type="number" value={likes} onChange={(e) => setLikes(e.target.value)} required className="w-full rounded border px-3 py-2" />
                                {/* Add error message div */}
                            </div>

                            <div>
                                <label className="block">MUSIC VIDEO LINK</label>
                                <input type="text" value={musicVideoLink} onChange={(e) => setMusicVideoLink(e.target.value)} required className="w-full rounded border px-3 py-2" />
                                {/* Add error message div */}
                            </div>

                            <div>
                                <label className="block">ALBUM HASHTAGS</label>
                                <input type="text" value={albumHashtags} onChange={(e) => setAlbumHashtags(e.target.value)} required className="w-full rounded border px-3 py-2" />
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

export default Album;