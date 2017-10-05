import {Component} from '@angular/core';
import {DataStorageService} from '../../Shared/data-storage.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
/*  @Output() featureSelected = new EventEmitter<string>();*/

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) { }


/*  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }*/

  onSaveData() {
    return this.dataStorageService.storeRecipes().subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

}
