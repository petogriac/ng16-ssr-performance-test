import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkComponent } from '../bookmark/bookmark.component';

@Component({
  selector: '[app-article-item]',
  standalone: true,
  imports: [CommonModule, BookmarkComponent],
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleItemComponent {
  @Input({required: true}) id!: number;
  @Input({required: true}) title!: string;
  @Input({required: true}) description!: string;
  @Input({required: true}) image!: string;
  @Input({required: true}) isFirst!: boolean;
}
