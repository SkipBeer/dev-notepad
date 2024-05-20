package ru.muctr.model.mappers;

import ru.muctr.model.course.Comment;
import ru.muctr.model.course.dto.CommentCreationDto;
import ru.muctr.model.course.dto.CommentDto;

public class CommentMapper {

    public static Comment fromCreationDto(CommentCreationDto creationDto) {
        return new Comment(null, creationDto.getText(), null, null);
    }

    public static CommentDto toDto(Comment comment) {
        return new CommentDto(comment.getId(), "Аноним", comment.getText());
    }
}
