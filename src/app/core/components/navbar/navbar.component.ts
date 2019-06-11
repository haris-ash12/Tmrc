import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';

declare const window: any;

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('searchbox') el;
  isHide: boolean = false;

  ngAfterViewInit() {}

  iconClick() {
    this.isHide = true;
    setTimeout(() => {
      // This will make the execution after the above boolean has changed
      this.el.nativeElement.focus();
    }, 0);
  }
  searchbox_keyUp(searchBox) {
    this.isHide = false;
    // Do the search work from searchBox value here.
  }
  searchbox_focusout() {
    this.isHide = false;
  }

  navDropdownActive: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = window.pageYOffset;
    if (number >= 150) {
      this.navDropdownActive = true;
    } else {
      this.navDropdownActive = false;
    }
  }
}
