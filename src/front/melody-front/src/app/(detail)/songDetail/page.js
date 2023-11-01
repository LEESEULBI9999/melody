"use client"

import React, {useEffect, useState} from "react";
import axios from "axios";

const SongDetail = ({songId}) => {
    const [songs, setSongs] = useState([]);
    const [genres, setGenres] = useState([]);
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        axios.get(`/api/song`)
            .then((res) => {
                setSongs(res.data);
                console.log("Songs:", res.data);
            })
            .catch((err) => {
                console.error("Failed to fetch songs:", err);
            });
        axios.get('/api/genres')
            .then((res) => {
                setGenres(res.data)
                console.log("Genres:", res.data);
            })
            .catch((err) => {
                console.error("Failed to fetch Genres:", err);
            });
        axios.get('/api/albumas')
            .then((res) => {
                setAlbums(res.data)
                console.log("Albums:", res.data);
            })
            .catch((err) => {
                console.error("Failed to fetch Albums:", err);
            });
    }, []);

    if (songs.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="main_container">
            {songs.map((song) => (
                <div className="container" key={song.id}>
                    <div className="summary_section">
                        <div className="summary_area">
                            <div className="summary_thumb">
                                <img src={albums.find(album => album.albumId === song.albumId)?.coverPhoto}
                                     alt={song.albumTitle}/>
                            </div>
                            <div className="summary">
                                <div className="text_area">
                                    <h1 className="text_area">
                                        {song.title}
                                    </h1>
                                </div>
                            </div>
                            <h2> {song.artistType === "Solo" ? song.soloArtist.singerName : song.groupArtist.groupName} 재생시간: {song.duration} </h2>
                            <div className="song_info">{song.songInfo}</div>
                            <div className="play_with_me">
                                <div className="play_option">재생버튼</div>
                                <div className="more_option">더보기 버튼
                                    <p>
                                        <strong>좋아요 수: </strong>{song.likes}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="section_lyrics">
                            <h3>
                                <span className="section_title"><h2><strong>가사</strong></h2></span>
                            </h3>
                            <div className="lyrics">
                                <p>{song.lyrics}</p>
                            </div>
                            <a href="#" className="btn_more">더보기</a>
                        </div>
                        <div className="section_album">
                            <h3>
                                <span className="section_title">수록앨범</span>
                            </h3>
                            <div className="album_info_area">

                            </div>
                        </div>
                        <p>
                            <strong>플레댓글 수: </strong>{song.playlistCount}
                        </p>
                        <p>
                            <strong>해시태그: </strong>{song.albumHashtags}
                        </p>
                        <p>
                            <strong>뮤직 비디오: </strong><a href={song.url}>링크</a>
                        </p>
                        <p>
                            <strong>장르: </strong>{genres.find((genre) => genre.genreId === song.genreId)?.genreName}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SongDetail;