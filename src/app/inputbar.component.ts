import { NgModule } from '@angular/core';
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
    selector: 'input-bar',
    templateUrl: './inputbar.component.html',
    styleUrls: ['./inputbar.component.scss']
})
export class InputComponent implements OnInit {
    message : string;

    @Output()
    onPublishData = new EventEmitter();
    constructor() { }

    ngOnInit() {
        this.message = "";
     }

    public publishData() 
    {
        this.onPublishData.emit(this.message);
    }
}
