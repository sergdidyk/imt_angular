import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'calculator';
 
  operand_1: number;
  operand_2: number;
  operator: string = "+";
  res: number;
  mainValidationMsg: string = '';
  validationMsg: string = '';
  showResult: boolean = false;

  onInputOperand_1(e) {
    this.operand_1 = +e.target.value;
  }

  onInputOperand_2(e) {
    this.operand_2 = +e.target.value;
  }

  onSelectedOperator(e) {
    this.operator = e.target.value;
  }

  onCalculate() {
   if(this. operand_1 === undefined || this.operand_2 === undefined) {
      this.mainValidationMsg = 'Input fields should not be empty!';
      this.validationMsg = 'Not valid!';
    } else {
      this.mainValidationMsg = '';
      this.showResult = true;
        switch(this.operator) {
          case "+":
            this.res = this.operand_1 + this.operand_2;
            break;
          case "-":
            this.res = this.operand_1 - this.operand_2;
            break;
          case "*":
            this.res = this.operand_1 * this.operand_2;
            break;
          case "/":
            this.res = this.operand_1 / this.operand_2;
            break;
        }
    }  
  }
}
