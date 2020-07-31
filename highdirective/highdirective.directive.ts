import { Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
    selector: '[high]'
})
export class highdirective implements OnInit{
    constructor(private elementref: ElementRef){
    }

    ngOnInit(){
        this.elementref.nativeElement.style.backgroundColor = 'red';
    }
}