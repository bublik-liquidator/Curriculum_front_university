import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { Subject, debounceTime, takeUntil } from 'rxjs';
import { UserService } from '../../services/user.service';
import { CurriculumService } from '../../services/curriculum.service';
import { FormsModule } from '@angular/forms';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'search',
  standalone: true,
  providers: [CurriculumService, UserService],
  imports: [FormsModule, TableComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnDestroy {
  searchText!: string;
  destroySubject = new Subject<void>();

  constructor() {}

  @Output() searchEvent = new EventEmitter<string>();

  ngOnInit(): void {
    this.destroySubject
      .pipe(debounceTime(500), takeUntil(this.destroySubject))
      .subscribe(() => {
        this.onInput();
      });
  }

  onInput(): void {
    this.searchText = this.searchText.split(' ').filter(Boolean).join(' ');
    this.searchEvent.emit(this.searchText);
  }

  ngOnDestroy(): void {
    this.destroySubject.next();
    this.destroySubject.complete();
  }
}
