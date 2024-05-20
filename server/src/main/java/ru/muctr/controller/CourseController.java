package ru.muctr.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import ru.muctr.model.course.dto.*;
import ru.muctr.service.CourseService;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173", maxAge = 3600)
@RestController
@RequestMapping("/courses")
@RequiredArgsConstructor
@Slf4j
public class CourseController {

    private final CourseService courseService;

    @PostMapping
    public CourseToListDto addCourse(@RequestBody @Valid CourseCreationDto creationDto) {
        log.info("Запрос на добавление курса {}", creationDto);
        return courseService.add(creationDto);
    }

    @DeleteMapping("/{id}")
    public void deleteCourse(@PathVariable long id) {
        log.info("Запрос на удаление курса с id={}", id);
        courseService.delete(id);
    }

    @GetMapping("/{id}")
    public CourseDto getById(@PathVariable long id) {
        log.info("Запрос на получение Курса с id={}", id);
        return courseService.getById(id);
    }

    @GetMapping
    public List<CourseToListDto> getAll() {
        log.info("Запрос на получение всех курсов");
        return courseService.getAll();
    }

    @PostMapping("/{courseId}")
    public CommentDto addComment(@RequestBody CommentCreationDto creationDto, @PathVariable long courseId) {
        log.info("Запрос на добавление комментария {} к курсу с id={}", creationDto, courseId);
        return courseService.addComment(creationDto, courseId);
    }

    @DeleteMapping("/{courseId}/{commentId}")
    public void deleteComment(@PathVariable long courseId, @PathVariable long commentId) {
        log.info("Запрос на удаление комментария с id={} у курса с id={}", commentId, courseId);
        courseService.deleteComment(courseId, commentId);
    }
}
