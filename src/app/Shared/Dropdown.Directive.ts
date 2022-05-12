import { HostBinding, HostListener, Directive } from "@angular/core";
@Directive({
  selector: "[dropDownDirective]"
})
export class dropDownDirective
{
 
  constructor()
  {
    
  }
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleOpen()
  {
    this.isOpen = !this.isOpen;
  }

}
