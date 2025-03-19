import { Component, Input, Output } from '@angular/core';
import { Course } from '../model/course';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input({required: true})
  course: Course

  @Input({required: true})
  Index: number 
  
  @Output()
  courseSelected = new EventEmitter<Course>()

  onClickViewCourse(){
    console.log("clicked")
    this.courseSelected.emit(this.course)
  }
}
