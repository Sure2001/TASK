import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Input() names:string=""
@Output() trigger=new EventEmitter()

  mytitle=""
  constructor() { }

  ngOnInit(): void {
    this.mytitle=this.names
  }
fnc(){
  this.trigger.emit("surendar")
}
}
