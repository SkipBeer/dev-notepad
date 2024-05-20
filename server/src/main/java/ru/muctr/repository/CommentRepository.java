package ru.muctr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.muctr.model.course.Comment;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    List<Comment> findAllByCourseId(Long courseId);
}
