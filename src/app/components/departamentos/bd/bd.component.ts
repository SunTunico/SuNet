import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { FooterComponent } from '../../../shared/footer/footer.component';

@Component({
  selector: 'app-bd',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './bd.component.html',
  styleUrl: './bd.component.scss'
})
export class BDComponent {

}
