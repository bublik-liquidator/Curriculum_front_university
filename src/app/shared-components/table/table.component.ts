import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITableData } from '../../models/table';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { CurriculumService } from '../../services/curriculum.service';

@Component({
  selector: 'tablec',
  standalone: true,
  providers: [CurriculumService],
  imports: [
    CommonModule,
    NzSkeletonModule,
    FontAwesomeModule,
    NzPaginationModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit {
  constructor() {}

  fields!: string[];
  dataLoaded = false;
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;

  @Input() data: any[] = [];
  @Input() totalCount!: number;
  @Input() pageIndex!: number;

  @Output() delete = new EventEmitter<number>();
  @Output() downloadCallback = new EventEmitter<number>();
  @Output() pageChange = new EventEmitter<number>();
  @Output() edit = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.extractUserNames();
    }
  }

  ngOnInit(): void {
    this.extractUserNames();
  }

  extractUserNames() {
    setTimeout(() => {
      if (this.data.length > 0) {
        this.fields = Object.keys(this.data[0]).filter(
          (key) => key !== 'id' && key !== 'filePath'
        );
        this.dataLoaded = true;
      }
    }, 500);
  }

  isExpiringSoon(item: any): boolean {
    const [day, month, year] = item.split('.');
    const formattedDate = `${year}-${month}-${day}`;
    const expiry = new Date(formattedDate);
    const now = new Date();
    const diffInDays = Math.ceil(
      (expiry.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
    );

    return diffInDays <= 30;
  }

  onDelete(id: number) {
    this.delete.emit(id);
  }

  onEdit(id: number) {
    this.edit.emit(id);
  }
  onDownload(id: number) {
    this.downloadCallback.emit(id);
  }
}
