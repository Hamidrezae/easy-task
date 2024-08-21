import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  // when use signals angular
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() =>'users/' + this.avatar());
  // select = output<string>();

  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar?: string;
  // @Input({ required: true }) name?: string;

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  @Output() select = new EventEmitter<string>();

  get imagePath(): string {
    return 'users/' + this.user.avatar;
  }

  onSelectUser(): void {
    this.select.emit(this.user.id);
  }
}
