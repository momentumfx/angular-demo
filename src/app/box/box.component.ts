import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  template: `
    <header>{{ title }}</header>
    <div class="content" [class.open]="open">
      <div class="inner">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display:block;
      border:5px solid black;
      width:500px;
    }
    header {
      padding:10px;
      font-size:2em;
      cursor:pointer;
    }
    .content {
      overflow:hidden;
      background:#eee;
    }
    .content:not(.open) {
      height:0px;
    }
    .inner {
      padding:10px;
    }
  `]
})
export class BoxComponent {
  @Input('title')
  title = 'hello';
  open = false;

  @HostListener('click')
  clickOnBox() {
    this.open = !this.open;
  }
}
