package com.acorn.melody2.dto;

import lombok.Data;

@Data
public class LikeRequest {
    private int Likes;
    private int albumId;
    private int songId;
}

