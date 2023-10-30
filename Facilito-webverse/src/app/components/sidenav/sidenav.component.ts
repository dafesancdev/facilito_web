import { Component, EventEmitter, Output, OnInit, HostListener } from '@angular/core';
import { navbarData } from './navbarData';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations:[
    
  ]
})
export class SidenavComponent implements OnInit {

  @HostListener('window:resize',['$event'])
  onResize(event:any){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768){
      this.collapsed=false;
      this.OnToggleSideNav.emit({collapsed:this.collapsed, screenWidth:this.screenWidth})

    }
  }


  @Output() OnToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed=false;
  navData=navbarData;
  screenWidth=0;
  collapsedLogoUrl = '../../../assets/img/logo.png';
  expandedLogoUrl = '../../../assets/img/minilogo.png';
  constructor(){

  }
  ngOnInit(): void {
      this.screenWidth = window.innerWidth;
  }
  toggleCollapse():void{
    this.collapsed = !this.collapsed;
    this.OnToggleSideNav.emit({collapsed:this.collapsed, screenWidth:this.screenWidth})

  }
  closeSideNav(): void {
    this.collapsed=false;
    this.OnToggleSideNav.emit({collapsed:this.collapsed, screenWidth:this.screenWidth})
  
  }
  getLogoUrl() {
    return this.collapsed ? this.collapsedLogoUrl : this.expandedLogoUrl;
  }

}
