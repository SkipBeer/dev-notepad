package ru.muctr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.muctr.model.course.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {
}
