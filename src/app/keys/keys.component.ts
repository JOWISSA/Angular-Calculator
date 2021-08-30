import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.css']
})
export class KeysComponent {
@Output() 
private onInput: EventEmitter<string>= new EventEmitter()

  constructor() { }

  currentNumber = '0';
  secondNumber = false;

  handleInput(value : string) {
    this.onInput.emit(value)
  }
  

  getNumber(event : string) {
    console.log(eval(event))
  }
 
  getOperator(operator:string){
    console.log(eval(operator))
  }

  // clear() {
  //   this.num1 = undefined;
  //   this.num2 = undefined;
  //   this.operator = undefined;
  //   this.opFunc = undefined;
  //   this.result = undefined;
  // }

}
