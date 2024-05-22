import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './to-do-list-component.component.html',
  styleUrl: './to-do-list-component.component.scss'
})
export class ToDoListComponent {

}
