import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { FooterComponent } from '../../../shared/footer/footer.component';

@Component({
  selector: 'app-operacional',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './operacional.component.html',
  styleUrl: './operacional.component.scss'
})
export class OperacionalComponent {

}
