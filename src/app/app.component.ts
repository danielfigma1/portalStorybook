import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
// import { MatDialog } from '@angular/material/dialog';
// import { SampleDialogComponent } from './sample-dialog/sample-dialog.component';
// import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./app.component.scss'],
})

export class AppComponent implements OnInit {
  // @HostBinding('class') className = '';
  className = '';
  classTheme = ['blue','darkMode','light'];
  activeTheme: number = 0;
  sideNav = true;
  toggleControl = new FormControl(false);

  // constructor(private dialog: MatDialog, private overlay: OverlayContainer) { }

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
      // if (darkMode) {
      //   this.overlay.getContainerElement().classList.add(darkClassName);
      // } else {
      //   this.overlay.getContainerElement().classList.remove(darkClassName);
      // }
    });
  }

  activateTheme(){
    this.activeTheme += 1;
    if(this.activeTheme > 3){
      this.activeTheme = 0;
    }
    this.className = this.classTheme[this.activeTheme]
    // console.log(this.classTheme[this.activeTheme]);
    console.log(this.activeTheme);
  }

  showDialog(): void {
    // this.dialog.open(SampleDialogComponent,
    //   {
    //     width: '500px'
    //   });
  }
  
  sideNavOpen = true;
  mainContent = 270;
  disableRipple = true;


  sideNavMenu(){
    console.log(this.sideNavOpen);
    this.sideNavOpen = !this.sideNavOpen;

    if(this.sideNavOpen){
      this.mainContent =  270
    } else {
      this.mainContent = 90
    }
  }

  

}