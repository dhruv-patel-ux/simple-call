import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { ApiService } from '../../common/api-service/api-service.service';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-search-list',
  standalone: true,
  imports: [ReactiveFormsModule,MatCardModule,FormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatListModule, TitleCasePipe],
  templateUrl: './search-list.component.html',
  styleUrl: './search-list.component.scss'
})
export class SearchListComponent {
  searchInput = new FormControl();
  apiService = inject(ApiService);
  users:Array<any> = []
  ngOnInit(){
        this.searchInput.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((value: any) => {
      this.GetAllUsers(value);

    })
  }
  GetAllUsers(value: any) {
    this.apiService.GetAllUsers(value).subscribe((users: any) => {
      console.log(users);
      
      this.users = users
    })
  }
}
