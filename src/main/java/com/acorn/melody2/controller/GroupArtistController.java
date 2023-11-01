package com.acorn.melody2.controller;

import com.acorn.melody2.entity.GroupArtist;
import com.acorn.melody2.service.GroupArtistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/GroupArtist")
public class GroupArtistController {
    private final GroupArtistService groupArtistService;

    @Autowired
    public GroupArtistController(GroupArtistService groupArtistService) {
        this.groupArtistService = groupArtistService;
    }

    @GetMapping
    public ResponseEntity<List<GroupArtist>> getAllGroupArtist() {
        List<GroupArtist> groupArtist = groupArtistService.getAllGroupArtist();
        return ResponseEntity.ok(groupArtist);
    }

    @GetMapping("/{id}")
    public ResponseEntity<GroupArtist> getGroupArtistById(@PathVariable int id) {
        Optional<GroupArtist> groupArtist = groupArtistService.getGroupArtistById(id);
        return groupArtist.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Object> createGroupArtist(@RequestBody GroupArtist groupArtist) {
        GroupArtist createdGroupArtist = groupArtistService.createGroupArtist(groupArtist);
        return new ResponseEntity<>(createdGroupArtist, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateGroup(@PathVariable int id, @RequestBody GroupArtist updatedGroup) {
        GroupArtist updated = groupArtistService.updateGroupArtist(id, updatedGroup);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGroupArtist(@PathVariable int id) {
        groupArtistService.deleteGroupArtist(id);
        return ResponseEntity.noContent().build();
    }
}