import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'bauer-accordion',
  standalone:true,
  imports: [MatExpansionModule,BrowserAnimationsModule,NoopAnimationsModule],
  template: `
    <mat-accordion>
        <mat-expansion-panel [expanded]="isOpen" [ngClass]="activeTheme">
            <mat-expansion-panel-header>
                <mat-panel-title>
                    {{ label }}
                </mat-panel-title>
                <!-- <mat-panel-description>
                    Currently I am {{panelOpenState ? 'open' : 'closed'}}
                </mat-panel-description> -->
            </mat-expansion-panel-header>
            <p>I'm visible because I am open</p>
        </mat-expansion-panel>
    </mat-accordion>
  `,
  styleUrls: ['./accordion.css'],
  
})


export default class AccordionComponent {
    @Input()
    panelOpenState = true;

    @Input()
    theme: 'blue' | 'dark' | 'light'= 'blue';

    @Input()
    label = 'Accordion';

    public get isOpen(): boolean {
        const mode = this.panelOpenState ? true : false;
        return mode;
    }

    public get activeTheme(): string {
        const thisTheme = this.theme;
        return thisTheme;
    }
}
