import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { OperandComponent } from './operand/operand.component';
import { ValidationDirective } from './validation.directive';
import { FormatResultPipe } from './format-result.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CalculatorComponent],
  declarations: [CalculatorComponent, OperandComponent, ValidationDirective, FormatResultPipe]
})
export class CalculatorModule { }
