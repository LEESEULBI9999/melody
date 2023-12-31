"use client"

import Link from "next/link";
import ClientComponent from "../components/ClientComponent";
import {useContext} from "react";
import {UserContext} from "../contexts/UserContext";
import SeasonSlider from "../components/main/season/SeasonSlider";

const Home = () => {
    const { userState, userDispatch } = useContext(UserContext);

    return (

        <div className="px-4 py-8">
            <h1 className="text-3xl mb-4">Server Component</h1>
            <ClientComponent />
            <div className="mt-8"></div>
            <SeasonSlider/>
            <h1 className="text-2xl mt-8">
                <Link href="/login">Test</Link>
            </h1>
            <h1 className="text-2xl mt-4">
                <Link href="/addPlaylistTest">Playlist Create Test</Link>
            </h1>
            <h1 className="text-2xl mt-4">
                <Link href="/addSongTest">Add Song to Playlist Test</Link>
            </h1>
            <h1 className="text-2xl mt-4">
                <Link href="/playlistPrintTest">Playlist Print Test</Link>
            </h1>
            <h1 className="text-2xl mt-4">
                <Link href="/detailTest">Detail Print Test</Link>
            </h1>
            <h1 className="text-2xl mt-4">
                <Link href="/musicPlayer">music player test </Link>
            </h1>
            <h1> <Link href="/login"> login </Link></h1>

            {userState.isAuthenticated ? (
                <>
                    <p>Welcome, {userState.user.name}!</p>
                    <p>Welcome, {userState.user.email}!</p>
                    <p className="mt-8">Welcome, {userState.user.name}!</p>
                    <p className="mt-4">Welcome, {userState.user.email}!</p>
                </>
            ) : (
                <>
                    no login yet
                    <p className="mt-8">No login yet</p>
                </>
            )}

            <h1> <Link href="/song"> song </Link></h1>
            <h1> <Link href="/songSearch"> songSearch </Link></h1>
            <h1> <Link href="/songDetail"> songdetail </Link></h1>
            <h1> <Link href="/songId"> songId </Link></h1>
            ---------------------------------------------------------------------------------
            <h1> <Link href="/album"> album </Link></h1>
            <h1> <Link href="/albumSearch"> albumSearch </Link></h1>
            <h1> <Link href="/albumDetail"> albumDetail </Link></h1>
            ---------------------------------------------------------------------------------
            <h1> <Link href="/createPlaylist"> createPlaylist </Link></h1>
            <h1> <Link href="/addSong"> addSong </Link></h1>
            ---------------------------------------------------------------------------------
            <h1> <Link href="/groupArtists"> GroupArtists </Link></h1>
            <h1> <Link href="/soloArtists"> SoloArtists </Link></h1>
            ---------------------------------------------------------------------------------
            <h1> <Link href="/artistSearch"> ArtistSearch </Link></h1>

        </div>

    );
};

export default Home;