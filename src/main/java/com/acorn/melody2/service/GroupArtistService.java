package com.acorn.melody2.service;

import com.acorn.melody2.entity.GroupArtist;
import com.acorn.melody2.repository.GroupArtistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GroupArtistService {

    private final GroupArtistRepository groupArtistRepository;

    @Autowired
    public GroupArtistService(GroupArtistRepository groupArtistRepository) {
        this.groupArtistRepository = groupArtistRepository;
    }

    public List<GroupArtist> getAllGroupArtist() {
        return groupArtistRepository.findAll();
    }

    public Optional<GroupArtist> getGroupArtistById(int id) {
        return groupArtistRepository.findById(id);
    }

    public GroupArtist saveGroupArtist(GroupArtist groupArtist) {
        return groupArtistRepository.save(groupArtist);
    }

    public GroupArtist createGroupArtist(GroupArtist groupArtist) {
        // Add validation or business logic if needed
        return groupArtistRepository.save(groupArtist);
    }

//    public SoloArtists updateSoloArtists(Long id, SoloArtists updatedSoloArtists) {
//        // Add validation or business logic if needed
//        updatedSoloArtists.setSoloArtistsId(id);
//        return soloArtistsRepository.save(updatedSoloArtists);
//    }

    public GroupArtist updateGroupArtist(int id, GroupArtist updatedGroupArtist) {
        // Add validation or business logic if needed
        return groupArtistRepository.save(updatedGroupArtist);
    }

    public void deleteGroupArtist(int id) {
        groupArtistRepository.deleteById(id);
    }

}
