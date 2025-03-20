import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
    courses = [...COURSES]


    bubbledUpClickButton(){
        console.log('button clicked event bubble up to parent as normal browser event')
    }

    onCourseSelected(course: Course){
        console.log('button clicked event bubble up to parent as normal browser event2', course)
    }
}
