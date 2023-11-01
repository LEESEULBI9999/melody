"use client"
import React, { useState } from 'react';

function Song() {
    // Define state variables for form fields
    const [albumId, setAlbumId] = useState(0);
    const [songTitle, setSongTitle] = useState('');
    const [songInfo, setSongInfo] = useState('');
    const [lyrics, setLyrics] = useState('');
    const [duration, setDuration] = useState(0);
    const [likes, setLikes] = useState(0);
    const [playlistCount, setPlaylistCount] = useState(0);
    const [artistType, setArtistType] = useState('');
    const [artistId, setArtistId] = useState(0);
    const [songHashtags, setSongHashtags] = useState('');
    const [url, setUrl] = useState('');
    const [genreId, setGenreId] = useState(0);

    const handleArtistTypeChange = (value) => {
        console.log('handleArtistTypeChange 호출됨:', value);
        if (value === 'Solo' || value === 'Group') {
            setArtistType(value);
        } else {
            console.error('유효하지 않은 값입니다.');
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a user object with the form data
        const song = {
            albumId,
            songTitle,
            songInfo,
            lyrics,
            duration,
            likes,
            playlistCount,
            artistType,
            artistId,
            songHashtags,
            url,
            genreId
        };



        try {
            // Send a POST request to the backend API
            const response = await fetch('/api/song', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(song),
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
                        <h1 className="text-2xl font-bold mb-4">SONG</h1>
                        <div className="space-y-4">
                            <div>
                                <label className="block">ALBUM ID</label>
                                <input type="number" value={albumId} onChange={(e) => setAlbumId(e.target.value)} required className="w-full rounded border px-3 py-2" />
                                {/* Add error message div */}
                            </div>

                            <div>
                                <label className="block">SONG TITLE</label>
                                <input type="text" value={songTitle} onChange={(e) => setSongTitle(e.target.value)} required className="w-full rounded border px-3 py-2" />
                                {/* Add error message div */}
                            </div>

                            <div>
                                <label className="block">SONG INFO</label>
                                <input type="text" value={songInfo} onChange={(e) => setSongInfo(e.target.value)} required className="w-full rounded border px-3 py-2" />
                                {/* Add error message div */}
                            </div>


                            <div>
                                <label className="block">LYRICS</label>
                                <input type="text" value={lyrics} onChange={(e) => setLyrics(e.target.value)} required className="w-full rounded border px-3 py-2" />
                                {/* Add error message div */}
                            </div>

                            <div>
                                <label className="block">DURATION</label>
                                <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} required className="w-full rounded border px-3 py-2" />
                                {/* Add error message div */}
                            </div>

                            <div>
                                <label className="block">LIKES</label>
                                <input type="number" value={likes} onChange={(e) => setLikes(e.target.value)} required className="w-full rounded border px-3 py-2" />
                                {/* Add error message div */}
                            </div>

                            <div>
                                <label className="block">PLAYLIST COUNT</label>
                                <input type="number" value={playlistCount} onChange={(e) => setPlaylistCount(e.target.value)} required className="w-full rounded border px-3 py-2" />
                                {/* Add error message div */}
                            </div>

                            <div>
                                <label className="block">ARTIST TYPE</label>
                                <select value={artistType} onChange={(e) => handleArtistTypeChange(e.target.value)} required className="w-full rounded border px-3 py-2">
                                    <option value="Solo">Solo</option>
                                    <option value="Group">Group</option>
                                    {/* Add error message div */}
                                </select>
                            </div>

                            <div>
                                <label className="block">ARTIST ID</label>
                                <input type="number" value={artistId} onChange={(e) => setArtistId(e.target.value)} required className="w-full rounded border px-3 py-2" />
                                {/* Add error message div */}
                            </div>

                            <div>
                                <label className="block">SONG HASHTAGS</label>
                                <input type="text" value={songHashtags} onChange={(e) => setSongHashtags(e.target.value)} required className="w-full rounded border px-3 py-2" />
                                {/* Add error message div */}
                            </div>

                            <div>
                                <label className="block">URL</label>
                                <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} required className="w-full rounded border px-3 py-2" />
                                {/* Add error message div */}
                            </div>

                            <div>
                                <label className="block">GENRELD ID</label>
                                <input type="number" value={genreId} onChange={(e) => setGenreId(e.target.value)} required className="w-full rounded border px-3 py-2" />
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

export default Song;