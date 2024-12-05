import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { HeaderComponent } from '../../../shared/header/header.component';

@Component({
  selector: 'app-comercial',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './comercial.component.html',
  styleUrl: './comercial.component.scss'
})
export class ComercialComponent {

}
