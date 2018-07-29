import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-operand',
  templateUrl: './operand.component.html',
  styleUrls: ['./operand.component.css']
})
export class OperandComponent implements OnInit, OnChanges {
  @Input() title: string
  @Input() value: number
  @Output('valueChange') valueEmitter = new EventEmitter<number>()

  constructor() {
    // console.log('constructor')
   }

  ngOnInit() {
    // console.log('init')
  }

  ngOnChanges(changes: SimpleChanges){
    // console.log('changes', changes)
  }

  onInputInput(e){
    const value = Number(e.target.value);
    
    this.valueEmitter.emit(value);
  }

}
