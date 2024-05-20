package ru.muctr.model.course.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CourseDto {

    private long id;

    private String title;

    private String description;

    private List<CommentDto> comments;
}
