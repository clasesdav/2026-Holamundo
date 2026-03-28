import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section class="page">
      <h1>Bienvenido 👋</h1>
      <p>Esta es la página de inicio.</p>
    </section>
  `,
  styles: [`
    .page { padding: 3rem 2rem; }
    h1 { font-size: 2rem; margin-bottom: 1rem; }
    p { color: #555; }
  `]
})
export class Home {}