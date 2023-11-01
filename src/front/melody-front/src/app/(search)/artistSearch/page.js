"use client"

// import styles from "./artist.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import {GoKebabHorizontal} from 'react-icons/go';
import Link from "next/link";

function SongList() {
    const [songs, setSongs] = useState([]);
    const [albums, setAlbums] = useState([]);

    useEffect(() => {

        axios.get('/api/song')
            .then((response) => {
                setSongs(response.data);
            })
            .catch((error) => {
                console.error(`Failed to fetch Songs: ${error}`);
            });
        axios.get('/api/albums')
            .then((response) => {
                setAlbums(response.data);
            })
            .catch((error) => {
                console.error(`Failed to fetch Albums: ${error}`);
            });
    }, []);

    return (
        <div>
            <h1>Song List</h1>
            <ul className="main_container">
                {songs.map((song) => (
                    <li key={song.songId}>
                        <div className="container">
                            <div className="content">
                                <div className="artist_summary_section">
                                    <div className="summary_wrap">
                                        <div className="summary_thumb">
                                            <img src={song.artist ? song.artist.singerPhoto || song.artist.groupPhoto : "N/A"}
                                                 alt="Artist Photo"
                                                 className="artist_photo"/>
                                        </div>
                                        <div className="summary_text">
                                            <h2 className="artist_name">
                                                {song.artist ? song.artist.singerName || song.artist.groupName : "N/A"}
                                            </h2>
                                            <div className="artist_info">
                                                ArtistInfo: {song.artist ? song.artist.singerInfo || song.artist.groupInfo : "N/A"}
                                            </div>
                                        </div>

                                    </div>
                                    <div className="end_section">
                                        <h3>
                                            <div className="section_title_more">
                                                <div className="section_title">노래</div>
                                                <div>
                                                    <a href="#" className="link_more">더보기</a>
                                                </div>
                                            </div>
                                        </h3>
                                        <div className="track_section">
                                            <div className="track_list">
                                                <table>
                                                    <caption></caption>
                                                    <thead>
                                                    <tr>
                                                        <th scope="col" className="thumb"></th>
                                                        <th scope="col" className="song"></th>
                                                        <th scope="col" className="artist"></th>
                                                        <th scope="col" className="album"></th>
                                                        <th scope="col" className="option"></th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {songs
                                                        .filter((song) => song.albumId === albums.albumId)
                                                        .map((song, index) => (
                                                            <tr key={index}>
                                                                <td className="thumb">
                                                                    <div className="inner">
                                                                        <img src={song.artist ? song.artist.singerPhoto || song.artist.groupPhoto : "N/A"}
                                                                             style={{
                                                                                 width:"50px",
                                                                                 height:"50px",
                                                                             }}/>
                                                                    </div>
                                                                </td>
                                                                <td className="song">
                                                                    <div className="title_badfe_wrap">
                                                                        <Link href={`/song/${song.songId}`}>{song.title}</Link>
                                                                    </div>
                                                                </td>
                                                                <td className="artist">
                                                                    <div className="artist_sub">
                                                                        <span className="artist_sub_inner">
                                                                            <span>
                                                                               {song.artist && (song.artist.singerName || song.artist.groupName)}
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td className="album">
                                                                    <a href="#">
                                                                        {albums.find((album) => album.albumId === song.albumId)?.albumTitle}
                                                                    </a>
                                                                </td>
                                                                <td className="option">
                                                                    <div className="inner">
                                                                        <div className="downdrop_wrap">
                                                                            <a href="#" role="button" className="btn_option">
                                                                                <GoKebabHorizontal />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="end_section">
                                        <h3 className="section_title_wrap">
                                            <div className="section_title_more">
                                                <div className="section_title">앨범</div>
                                                <a href="#" className="link_more">더보기</a>
                                            </div>
                                        </h3>
                                        <div className="list_wrap_album">
                                            <div>
                                                <ul className="scroll_list">
                                                    <li className="list_item">
                                                        <div className="thumb_area">
                                                            <a href="#" className="link">
                                                                <img src={albums.find((album) => album.albumId === song.albumId)?.coverPhoto}
                                                                     style={{
                                                                         width:"100px",
                                                                         height:"100px",
                                                                     }} />
                                                            </a>
                                                        </div>
                                                        <div className="info">
                                                        <span className="text_wrap">
                                                            <a href="#" className="title">
                                                                {albums.find((album) => album.albumId === song.albumId)?.albumTitle}
                                                            </a>
                                                        </span>
                                                            <div className="artist">
                                                            <span className="artist_sub_inner">
                                                                <span>
                                                                    <a href="#" className="link_artist">
                                                                        <span className="text">
                                                                            {song.artist ? song.artist.singerName || song.artist.groupName : "N/A"}
                                                                        </span>
                                                                    </a>
                                                                </span>
                                                            </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SongList;