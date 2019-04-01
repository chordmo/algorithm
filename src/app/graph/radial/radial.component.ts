import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-radial',
  templateUrl: './radial.component.html',
  styleUrls: ['./radial.component.scss']
})
export class RadialComponent implements OnInit {
  @ViewChild('radial') canvasRef: ElementRef;

  constructor() { }

  ngOnInit() {



    const r = 150;
    const x = 400;
    const y = 400;


    const ctx: CanvasRenderingContext2D =
      this.canvasRef.nativeElement.getContext('2d');
    //  .getContext('2d');
    ctx.beginPath();
    ctx.arc(x, y, 1, 0, 2 * Math.PI);
    ctx.stroke();


    for (let a = 0; a <= 360; a += 10) {
      console.log(a);
      const ax = x + r * Math.cos(a * Math.PI / 180);

      const ay = y + r * Math.sin(a * Math.PI / 180);

      ctx.arc(ax, ay, 1, 0, 2 * Math.PI);
      ctx.stroke();
    }




  }

}
