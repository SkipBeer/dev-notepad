package ru.muctr.model.mappers;

import ru.muctr.model.course.Course;
import ru.muctr.model.course.dto.CourseCreationDto;
import ru.muctr.model.course.dto.CourseDto;
import ru.muctr.model.course.dto.CourseToListDto;

import java.util.ArrayList;

public class CourseMapper {

    public static Course fromCreationDto(CourseCreationDto creationDto) {
        return new Course(null, creationDto.getTitle(), creationDto.getDescription(), null);
    }

    public static CourseToListDto toDtoList(Course course) {
        return new CourseToListDto(course.getId(), course.getTitle(), course.getDescription());
    }

    public static CourseDto toDto(Course course) {
        return new CourseDto(course.getId(), course.getTitle(), course.getDescription(), new ArrayList<>());
    }
}
