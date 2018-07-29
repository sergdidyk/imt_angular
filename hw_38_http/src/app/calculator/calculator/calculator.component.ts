import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  operandA: number = 10
  operandB: number = 5
  result: number
  operator = '+'
  operators = ['+', '-', '/', '*']
  operatorFns = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '/': (a, b) => a / b,
    '*': (a, b) => a * b,
    'default': () => console.warn('operator not found')
  }

  constructor() { }

  ngOnInit() {
  }

  onCalculateBtnClick(){
    this.calculateResult()
  }

  onOperandValueChange(operandName: string, value: number){
    this[operandName] = value;
  }

  calculateResult(){
    const operatorFn = this.getOperatorFn(this.operator);
    
    this.result = operatorFn(this.operandA, this.operandB);
  }

  getOperatorFn(operator: string){
    return this.operatorFns[operator] || this.operatorFns['default']
  }

}
