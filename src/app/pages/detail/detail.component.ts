import { ChangeDetectionStrategy, Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent implements OnInit {
  @Input({required: true}) articleId!: number;
  protected historyService = inject(HistoryService);

  ngOnInit() {
    this.historyService.history.push(this.articleId);
  }
}
