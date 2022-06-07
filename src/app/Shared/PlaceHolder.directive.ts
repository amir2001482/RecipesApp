import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector : "[appPlaceHolder]"
})
export class PlaceHolderDirective{

  constructor(public viewConteinerRef : ViewContainerRef){}

}
