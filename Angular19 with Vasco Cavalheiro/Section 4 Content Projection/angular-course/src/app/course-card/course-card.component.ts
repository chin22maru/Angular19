import { AfterViewInit, Component, ContentChild, Input, Output, ViewChild } from '@angular/core';
import { Course } from '../model/course';
import { EventEmitter } from '@angular/core';
import { NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'course-card',
  imports: [NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements AfterViewInit {
  @Input({required: true})
  course: Course
  
  @Output()
  courseSelected = new EventEmitter<Course>()

  @ContentChild('courseImage')
  image;

  ngAfterViewInit() {
    console.log(this.image)
  }

  onClickViewCourse(){
    console.log("clicked")
    this.courseSelected.emit(this.course)
  }
}
