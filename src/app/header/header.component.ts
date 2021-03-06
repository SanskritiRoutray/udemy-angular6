import  { Component } from '@angular/core';
import { Output } from "@angular/core";
import { EventEmitter } from "@angular/core";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    @Output() navigate = new EventEmitter<string>();

    nav(data: string) {
        this.navigate.emit(data);
    }
}