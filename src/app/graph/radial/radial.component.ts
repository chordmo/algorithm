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
    ctx.beginPath();
    ctx.arc(x, y, 1, 0, 2 * Math.PI);
    ctx.stroke();


    for (let a = 0; a <= 350; a += 10) {
      console.log(a);
      const ax = x + r * Math.cos(a * Math.PI / 180);

      const ay = y + r * Math.sin(a * Math.PI / 180);

      ctx.arc(ax, ay, 1, 0, 2 * Math.PI);
      ctx.stroke();
    }








    console.log(this.girth(100, 90));
    console.log(this.radius(157.07963267948966, 90));
    console.log(this.angle(157.07963267948966, 100));


  }
  /**
   * 求一个角度的周长
   * @param r 圆的半径
   * @param a 角的大小
   */
  girth(r, a) {
    return 2 * Math.PI * r * (a / 360);
  }

  /**
   * 求圆的半径
   * @param g 圆的周长
   * @param a 角的大小
   */
  radius(g, a) {
    return g / (2 * Math.PI * (a / 360));
  }

  /**
   * 求角度的大小
   * @param g 圆的周长
   * @param r 圆的半径
   */
  angle(g, r) {
    return g / (2 * Math.PI * r) * 360;
  }

}
