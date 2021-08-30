import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']

})
export class DisplayComponent implements OnInit {
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
    currentNumber = '0';
    firstOperand = null;
    secondOperand = null;
    waitForSecondOperand = false;
  }