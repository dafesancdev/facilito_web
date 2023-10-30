import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  @Input() screeWidth = 0;
  @Input() collapsed = false;

  getBodyClass(): string{
    let styleClass= '';
    if (this.collapsed && this.screeWidth >768 ){
      styleClass = 'body-trimmed';
    } else if(this.collapsed && this.screeWidth<=768 && this.screeWidth<0){
      styleClass='body-md-screen'
    }
    return styleClass;

  }

}
