package com.acorn.melody2.controller;

import com.acorn.melody2.dto.UpdatePlaylistRequest;
import com.acorn.melody2.entity.Playlist;
import com.acorn.melody2.entity.SongPlaylist;
import com.acorn.melody2.service.PlaylistService;
import com.acorn.melody2.service.SongPlaylistService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/playlist")
public class PlaylistController {
    private static final Logger logger = LoggerFactory.getLogger(PlaylistController.class);

    private final PlaylistService playlistService;
    private final SongPlaylistService songPlaylistService;

    @Autowired
    public PlaylistController(PlaylistService playlistService, SongPlaylistService songPlaylistService) {
        this.playlistService = playlistService;
        this.songPlaylistService = songPlaylistService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Playlist> getPlaylistById(@PathVariable int id) {
        System.out.println("Received ID: " + id);
        Optional<Playlist> playlist = playlistService.getPlaylistById(id);
        return playlist.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/playlist/{id}")
    public ResponseEntity<List<Playlist>> getPlaylistsByuserAccountId(@PathVariable int id) {
        logger.warn(String.valueOf(id));
        List<Playlist> playlists = playlistService.getPlaylistsByuserAccountId(id);
        if(playlists.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(playlists, HttpStatus.OK);
        }
    }

    @PostMapping
    public ResponseEntity<Playlist> createPlaylist(@RequestBody Playlist playlist) {
        logger.warn("playlist: {}", playlist);
        Playlist savePlaylist = playlistService.savePlaylist(playlist);
        return new ResponseEntity<>(savePlaylist, HttpStatus.CREATED);
    }
    @PutMapping
    public Playlist updatePlaylist(@RequestBody UpdatePlaylistRequest updatedPlaylistRequest) {
        logger.warn(String.valueOf(updatedPlaylistRequest));
        int playlistId = Math.toIntExact(updatedPlaylistRequest.getPlaylist().getPlaylistId());
        Playlist playlist = updatedPlaylistRequest.getPlaylist();
        logger.warn(playlist.toString());
        return playlistService.updatePlaylist(playlistId,playlist);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePlaylist(@PathVariable int id) {
        logger.warn("플레이르스트 삭제"+ id);
        playlistService.deletePlaylist(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/addSong")
    public SongPlaylist addSongToPlaylist(@RequestBody SongPlaylist songPlaylist) {
        logger.warn(songPlaylist.toString());
        int playlistId = songPlaylist.getPlaylistId();
        int songId = songPlaylist.getSongId();
        return songPlaylistService.addSongToPlaylist(playlistId, songId);
    }
}