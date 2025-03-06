import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [NgIf, FormsModule, NgFor, NgClass, NgStyle],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  isDivVisiable: boolean = true;
  isDiv2Visiable = true;

  showDiv(){
    this.isDivVisiable = true;
  }

  hideDiv(){
    this.isDivVisiable = false;
  }

  showhideDiv2(isVisiable: boolean){
    this.isDiv2Visiable = isVisiable;
  }

  selectedCaste: string = "Other";

  cityList = ['bhavnagar', 'gandhinagar', 'surat', 'ahemdabad'];

  students: any[] = [
    {name: 'chin', city: 'bhavnagar', isPresent: true},
    {name: 'dds', city: 'dfssdf', isPresent: true},
    {name: 'chsdfin', city: 'sfs', isPresent: false},
  ]




  isDiv3Visiable: boolean = true;
  isDiv4Visiable = true;

  showDiv3(){
    this.isDiv3Visiable = true;
  }

  hideDiv3(){
    this.isDiv3Visiable = false;
  }

  showhideDiv4(isVisiable: boolean){
    this.isDiv4Visiable = isVisiable;
  }

  selectedCaste2: string = "Other";



  studentClass:string = "bg-success";
  empClass = "bg-primary";
  isOrderActive = false;
  productClass = "";

  addProductClass(color:string){
    this.productClass = color;
  }
}
