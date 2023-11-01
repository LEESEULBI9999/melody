package com.acorn.melody2.service;

import com.acorn.melody2.entity.Album;
import com.acorn.melody2.entity.Playlist;
import com.acorn.melody2.entity.UserAccount;
import com.acorn.melody2.repository.PlaylistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlaylistService {

    private final PlaylistRepository playlistRepository;

    @Autowired
    public PlaylistService(PlaylistRepository playlistRepository) {
        this.playlistRepository = playlistRepository;
    }

    public List<Playlist> getAllPlaylists() {
        return playlistRepository.findAll();
    }

    public Optional<Playlist> getPlaylistById(int id) {
        return playlistRepository.findById(id);
    }

    public List<Playlist> getPlaylistsByuserAccountId(int id) {
        return playlistRepository.findByUserAccountId(id);
    }

    public Playlist savePlaylist(Playlist playlist) {
        return playlistRepository.save(playlist);
    }

    public void deletePlaylist(int id) {
        playlistRepository.deleteById(id);
    }

    public List<Playlist> getAllPlaylist() {
        return playlistRepository.findAll();
    }

    public Playlist createPlaylist(Playlist playlist) {
        // Add validation or business logic if needed
        return playlistRepository.save(playlist);
    }

    public Playlist updatePlaylist(int id, Playlist updatedPlaylist) {
        Optional<Playlist> existingPlaylist = playlistRepository.findById(id);
        if (existingPlaylist.isPresent()) {
            Playlist playlistToUpdate = existingPlaylist.get();
            playlistToUpdate.setPlaylistId((long) id);
            playlistToUpdate.setPlaylistName(updatedPlaylist.getPlaylistName());
            playlistToUpdate.setDescription(updatedPlaylist.getDescription());
            playlistToUpdate.setPlaylistHashtags(updatedPlaylist.getPlaylistHashtags());
            return playlistRepository.save(playlistToUpdate);
        } else {
            return null;
        }

    }

    public List<Playlist> getAllPlaylistsByUserAccount(int userAccountId) {
        return playlistRepository.findByUserAccountId(userAccountId);
    }

}
