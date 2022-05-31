import { Component, EventEmitter, Output } from '@angular/core';
import { dataStorgeService } from '../Shared/data-storge.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'

})
export class HeaderComponent {
    constructor(private storgeSrvice : dataStorgeService){}
    @Output() featureSelected = new EventEmitter<string>();

    onSelect(feature: string) {
      this.featureSelected.emit(feature);
    }

    onSaveData(){

        this.storgeSrvice.storRecipe();
    }

    onFetchData(){
      this.storgeSrvice.fetchRecipes().subscribe();
    }

}
