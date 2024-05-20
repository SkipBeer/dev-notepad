package ru.muctr.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.muctr.exception.exceptions.CourseNotFoundException;
import ru.muctr.model.course.Comment;
import ru.muctr.model.course.Course;
import ru.muctr.model.course.dto.*;
import ru.muctr.model.mappers.CommentMapper;
import ru.muctr.model.mappers.CourseMapper;
import ru.muctr.repository.CommentRepository;
import ru.muctr.repository.CourseRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CourseService {

    private final CourseRepository courseRepository;

    private final CommentRepository commentRepository;

    public CourseToListDto add(CourseCreationDto creationDto) {
        Course course = CourseMapper.fromCreationDto(creationDto);
        return CourseMapper.toDtoList(courseRepository.save(course));
    }

    public void delete(long id) {
        courseRepository.deleteById(id);
    }

    public CourseDto getById(Long id) {
        Course course = courseRepository.findById(id).orElseThrow(()
                -> {
            throw new CourseNotFoundException("Пользователь с id " + id + " не найден"); });
        CourseDto dto = CourseMapper.toDto(course);
        dto.setComments(commentRepository.findAllByCourseId(id).stream()
                .map(CommentMapper::toDto).collect(Collectors.toList()));
        return dto;
    }

    public List<CourseToListDto> getAll() {
        return courseRepository.findAll().stream().map(CourseMapper::toDtoList).collect(Collectors.toList());
    }

    public CommentDto addComment(CommentCreationDto creationDto, long courseId) {
        Comment comment = CommentMapper.fromCreationDto(creationDto);
        comment.setCourse(courseRepository.getReferenceById(courseId));
        return CommentMapper.toDto(commentRepository.save(comment));
    }

    public void deleteComment(long courseId, long commentId) {
        commentRepository.deleteById(commentId);
    }


}
