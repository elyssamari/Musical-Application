// 3rd party library imports
import { Pdf24, RecentlyViewed32, RotateCounterclockwiseFilled32, Translate32 } from '@carbon/icons-react';
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';

let cloudLw: number = -800;
let cloudLh: number = 0;
let cloudRw: number = window.innerWidth;
let cloudRh: number = 400;
let cloud3Rw: number = window.innerWidth;
let cloud3Hw: number = 380;

export const anliao2Visualizer = new Visualizer(
  'anliao2',
  (p5: P5, analyzer: Tone.Analyser) => {

    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const values = analyzer.getValue();
    let lines = [];

    lines.length = 100;
    p5.angleMode(p5.DEGREES);
    p5.background(0, 255);

    let stroke = p5.stroke(255).noFill();

    class Lines {
      x: number;
      y: number;

      constructor() {
        this.x = p5.random(-width, width)
        this.y = p5.random(height, -height)
      }

      display() {
        p5.stroke(red, green, blue);
        p5.line(this.x, this.y, this.x, this.y + 20);
      }
    }

    p5.push()
    p5.translate(width / 2, height / 2);
    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;
      const x = width / 2 + amplitude * p5.cos(i);
      const y = height / 2 + amplitude * p5.sin(i);
      var red = p5.map(p5.sin(p5.frameCount), -1, 1, 50, 255);
      var green = p5.map(p5.cos(p5.frameCount / 2), -1, 1, 50, 255);
      var blue = p5.map(p5.sin(p5.frameCount / 4), -1, 1, 50, 255);
      stroke.stroke(red, green, blue);
      stroke.rotate(10);
      stroke.line(200, 0, p5.map(amplitude, 0, 1, -120, 120), 10);
      stroke.vertex(x, y);
    }
    p5.pop()

    p5.push()
    p5.rotate(15)
    for (let i = 0; i < 100; i++) {
      lines[i] = new Lines();
    }

    for (let i = 0; i < 100; i++) {
      lines[i].display();
    }
    p5.pop()

    cloud(cloudLw - 200, cloudLh + 100)
    cloud(cloudLw + 500, cloudLh + 30)
    cloud(cloudRw, cloudRh)
    cloud2(cloudLw, cloudLh)
    cloud2(cloudRw + 400, cloudRh - 100)
    cloud3(cloud3Rw + 1100, cloud3Hw - 40)

    if (cloudRw == -600) {
      cloudRw = window.innerWidth;
    } else {
      cloudRw--;
    }

    if (cloud3Rw == -800) {
      cloud3Rw = window.innerWidth;
    } else {
      cloud3Rw--;
    }

    if (cloudLw == window.innerWidth) {
      cloudLw = -800;
    } else {
      cloudLw++;
    }

    function cloud(cloudLw: number, cloudLh: number) {
      p5.fill(250)
      p5.noStroke()
      p5.ellipse(cloudLw, cloudLh, 300, 70);
      p5.ellipse(cloudLw + 10, cloudLh + 10, 400, 50)
      p5.ellipse(cloudLw - 20, cloudLh + 15, 500, 50)
      p5.ellipse(cloudLw - 100, cloudLh + 20, 200, 50)
    }

    function cloud2(cloudLw: number, cloudLh: number) {
      p5.fill(250)
      p5.noStroke()
      p5.ellipse(cloudLw, cloudLh, 150, 50);
      p5.ellipse(cloudLw - 60, cloudLh + 5, 100, 30)
      p5.ellipse(cloudLw + 20, cloudLh + 10, 200, 50)
      p5.ellipse(cloudLw - 20, cloudLh + 15, 100, 50)
      p5.ellipse(cloudLw - 60, cloudLh + 20, 150, 40)
    }

    function cloud3(cloudLw: number, cloudLh: number) {
      p5.fill(250)
      p5.noStroke()
      p5.ellipse(cloudLw + 30, cloudLh + 30, 150, 75);
      p5.ellipse(cloudLw + 75, cloudLh + 50, 100, 30);
      p5.ellipse(cloudLw - 120, cloudLh + 30, 150, 75);
      p5.ellipse(cloudLw - 50, cloudLh + 15, 200, 100)
      p5.ellipse(cloudLw - 60, cloudLh + 40, 300, 50)
      p5.ellipse(cloudLw - 200, cloudLh + 50, 70, 30)
      p5.ellipse(cloudLw - 235, cloudLh + 55, 20, 10)
      p5.ellipse(cloudLw - 60, cloudLh + 60, 400, 20)
      p5.ellipse(cloudLw + 140, cloudLh + 90, 30, 10);
    }
  },
);

