import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'storybook-button',
  // template: ` <button type="button">
  //   {{ label }}
  // </button>`,
  template: `<div class="datatable-container">
  <table class="datatable">
    <thead>
      <tr><th colspan="4">{{ label }}</th></tr>
      <tr>
        <th>Number</th>
        <th>Name</th>
        <th>Weight</th>
        <th>Symbol</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>1</td>
        <td>Hydrogen</td>
        <td>1.0079</td>
        <td>H</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Hydrogen</td>
        <td>1.0079</td>
        <td>H</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Hydrogen</td>
        <td>1.0079</td>
        <td>H</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Hydrogen</td>
        <td>1.0079</td>
        <td>H</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Hydrogen</td>
        <td>1.0079</td>
        <td>H</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Hydrogen</td>
        <td>1.0079</td>
        <td>H</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Hydrogen</td>
        <td>1.0079</td>
        <td>H</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Hydrogen</td>
        <td>1.0079</td>
        <td>H</td>
      </tr>
    </tbody>
  </table>
</div>`,
  styleUrls: ['./button.css'],
  // [ngClass]="classes" [ngStyle]="{ 'background-color': backgroundColor } (click)="onClick.emit($event)""
})



// const tableValue = {
//   value1: {
//     id: 1,
//     name: 'Hydrogen',
//     weight:  1.0079,
//     symbol: 'H'
//   },
//   value2: {
//     id: 2,
//     name: 'Helium',
//     weight:  4.0026,
//     symbol: 'He'
//   },
//   value3: {
//     id: 3,
//     name: 'Lithium',
//     weight:  6.941,
//     symbol: 'Li'
//   },
//   value4: {
//     id: 4,
//     name: 'Beryllium',
//     weight:  9.0122,
//     symbol: 'Be'
//   },
//   value5: {
//     id: 5,
//     name: 'Boron',
//     weight:  10.811,
//     symbol: 'B'
//   },
//   value6: {
//     id: 6,
//     name: 'Carbon',
//     weight:  12.0107,
//     symbol: 'C'
//   },
// }



export default class ButtonComponent {
  /**
   * Is this the principal call to action on the page?
   */
  // @Input()
  // primary = false;

  /**
   * What background color to use
   */
  // @Input()
  // backgroundColor?: string;

  /**
   * How large should the button be?
   */
  // @Input()
  // size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Basic Table';

  /**
   * Optional click handler
   */
  // @Output()
  // onClick = new EventEmitter<Event>();

  // public get classes(): string[] {
  //   const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  //   return ['storybook-button', `storybook-button--${this.size}`, mode];
  // }
}
