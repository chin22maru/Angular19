import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements AfterViewInit {
    courses = [...COURSES]

    // @ViewChild(CourseCardComponent)
    // card: CourseCardComponent
    // @ViewChild('card2')
    // card2: CourseCardComponent
    // @ViewChild('card3', {read: ElementRef})
    // card3: CourseCardComponent                                                                                                                                                              

    // @ViewChild('container')
    // container: ElementRef

    @ViewChildren(CourseCardComponent, {read: ElementRef})
    cards: QueryList<CourseCardComponent>

    constructor(){
        // console.log(this.card2)
        // console.log(this.card2)
        // console.log(this.card3)
        // console.log(this.container)
    }

    ngAfterViewInit(){
        // console.log(this.card)
        // console.log(this.card2)
        // console.log(this.card3)
        // console.log(this.container)

        // console.log(this.cards.first)
        // console.log(this.cards.last)
        
        this.cards.changes.subscribe(
            cards => console.log(cards)
        )
    }

    onEditCourses(){
        this.courses.push(
            {
                id: 1,
                description: "Angular Core Deep Dive",
                iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
                longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
                category: 'INTERMEDIATE',
                lessonsCount: 10
            }
        )
    }

    bubbledUpClickButton(){
        console.log('button clicked event bubble up to parent as normal browser event')
    }

    onCourseSelected(course: Course){
        console.log('button clicked event bubble up to parent as normal browser event2', course)
    }

}
