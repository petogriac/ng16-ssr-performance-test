import { ChangeDetectionStrategy, Component, Input, OnInit, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as data from '../../../data.json';
import { ArticleItemComponent } from '../../components/article-item/article-item.component';
import { RouterLink } from '@angular/router';
import { HistoryComponent } from '../../components/history/history.component';
import { FilterComponent } from '../../components/filter/filter.component';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule, ArticleItemComponent, RouterLink, HistoryComponent, FilterComponent],
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListingComponent implements OnInit {
  @Input({required: true}) listDelay!: number;
  protected data = signal<any | undefined>(undefined);

  ngOnInit() {
    getData(this.listDelay, this.data);
  }
}

async function getData(sleep: number, dataSignal: WritableSignal<any>) {
  await new Promise(resolve => setTimeout(resolve, sleep));
  dataSignal.set(data);
}
