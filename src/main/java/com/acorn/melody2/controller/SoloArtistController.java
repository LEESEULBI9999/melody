package com.acorn.melody2.controller;

import com.acorn.melody2.entity.SoloArtist;
import com.acorn.melody2.service.SoloArtistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/SoloArtist")
public class SoloArtistController {
    private final SoloArtistService soloArtistService;

    @Autowired
    public SoloArtistController(SoloArtistService soloArtistService) {
        this.soloArtistService = soloArtistService;
    }

    @GetMapping
    public ResponseEntity<List<SoloArtist>> getAllSoloArtist() {
        List<SoloArtist> soloArtist = soloArtistService.getAllSoloArtist();
        return ResponseEntity.ok(soloArtist);
    }

    @GetMapping("/{id}")
    public ResponseEntity<SoloArtist> getSoloArtistsById(@PathVariable int id) {
        Optional<SoloArtist> soloArtist = soloArtistService.getSoloArtistById(id);
        return soloArtist.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Object> createSoloArtist(@RequestBody SoloArtist soloArtist) {
        SoloArtist createdSoloArtist = soloArtistService.createSoloArtist(soloArtist);
        return new ResponseEntity<>(createdSoloArtist, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateSoloArtist(@PathVariable int id, @RequestBody SoloArtist updatedSoloArtist) {
        SoloArtist updatedSolo = soloArtistService.updateSoloArtist(id, updatedSoloArtist);
        return ResponseEntity.ok(updatedSolo);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSoloArtist(@PathVariable int id) {
        soloArtistService.deleteSoloArtist(id);
        return ResponseEntity.noContent().build();
    }
}