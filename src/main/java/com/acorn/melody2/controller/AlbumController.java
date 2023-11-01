package com.acorn.melody2.controller;

import com.acorn.melody2.dto.LikeRequest;
import com.acorn.melody2.entity.Album;
import com.acorn.melody2.service.AlbumService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.data.relational.core.sql.Like;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/albums")
public class AlbumController {

    private static final Logger logger = LoggerFactory.getLogger(AlbumController.class);

    private final AlbumService albumService;

    @Autowired
    public AlbumController(AlbumService albumService) {
        this.albumService = albumService;
    }

    @GetMapping
    public List<Album> getAllAlbums() {
        return albumService.getAllAlbums();
    }

    @GetMapping("/{id}")
    public Album getAlbumById(@PathVariable int id) {
        return albumService.getAlbumById(id).orElse(null);
    }

    @PostMapping
    public Album createAlbum(@RequestBody Album album) {
        return albumService.saveAlbum(album);
    }

    @PutMapping("/{id}")
    public Album updateAlbum(@PathVariable int id, @RequestBody Album album) throws ChangeSetPersister.NotFoundException {
        return albumService.updateAlbum(id, album);
    }

    @DeleteMapping("/{id}")
    public void deleteAlbum(@PathVariable int id) {
        albumService.deleteAlbum(id);
    }

    // Update the number of likes for an album
    @PostMapping ("/{albumId}/likes")
    public ResponseEntity<Album> updateAlbumLikes(@PathVariable(value = "albumId", required = false) int albumId, @RequestBody LikeRequest likeRequest) throws ChangeSetPersister.NotFoundException {
        Optional<Album> optionalAlbum = albumService.getAlbumById(albumId);

        Album album = optionalAlbum.orElseThrow(ChangeSetPersister.NotFoundException::new);

        logger.warn(String.valueOf(album));

        album.setLikes(Math.max(likeRequest.getLikes(),0));
        Album updateAlbumLikes = albumService.saveAlbum(album);

        return ResponseEntity.ok(album);
    }

    // Get the number of likes for an album
    @GetMapping( "/{albumId}/likes")
    public ResponseEntity<Integer> getAlbumLikes(@PathVariable("albumId") int albumId) {
        Optional<Album> optionalAlbum = albumService.getAlbumById(albumId);

        if (optionalAlbum.isPresent()) {
            Album album = optionalAlbum.get();
            int likes = album.getLikes();
            return ResponseEntity.ok(likes);
        } else {
            // 앨범이 존재하지 않는 경우 처리
            return ResponseEntity.notFound().build();
        }
//        int likes = albumService.getAlbumLikes(id);
//        return ResponseEntity.ok(likes);
    }

    @GetMapping("/search")
    public List<Album> searchAlbumsByTitle(@RequestParam String title) {
        List<Album> albums = albumService.searchAlbumsByTitle(title);
        logger.warn("Albums found: {}", albums); // Log the list as a string
        return albums;
    }

}
