import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="page">
      <h1>Acerca de 📖</h1>
      <p>Esta app fue creada con Angular 21.</p>
    </section>
  `,
  styles: [`
    .page { padding: 3rem 2rem; }
    h1 { font-size: 2rem; margin-bottom: 1rem; }
    p { color: #555; }
  `]
})
export class About {}