// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';
import { couldStartTrivia } from 'typescript';

// project imports
import { Visualizer } from '../Visualizers';

/* sources:
- Circular perlin noise in p5.js | Coding Project #12 by Colorful Coding
  https://www.youtube.com/watch?v=0YvPgYDR1oM 
- Complex sine waves & polar coordinates in p5js | Coding Project #16 by Colorful Coding
  https://www.youtube.com/watch?v=MzhBizCmpi8
- Snowflakes
  https://p5js.org/examples/simulate-snowflakes.html
*/

export const elyssamariVisualizer = new Visualizer(
  'elyssamari',
  (p5: P5, analyzer: Tone.Analyser) => { 
    p5.background(0, 0, 0, 225); //background -> black
    p5.noStroke();
    p5.translate(p5.width/2 - 120, p5.height /2 ) //placement for the flower
    var space = 0.1 //changes gradient

    const width = window.innerWidth;
    const height = window.innerHeight / 2;

    const values = analyzer.getValue();
    p5.beginShape();

    for (let i = 0; i < values.length; i++) {
        const amplitude = values[i] as number;
        //flower -> blue and pink
        var xoff= p5.map(p5.cos(i), -1, 1, 0, 3)* amplitude
        var yoff= p5.map(p5.sin(i), -1, 1, 0, 3)* amplitude
        var n = p5.noise(xoff, yoff) * amplitude + 1
        var h = p5.map(n, 0, 1, -150, 150) 

        var r= p5.map(p5.sin(i), -1, 1, 100, 255)
        var g= p5.map(h, -150, 150, 0, 150)
        var b= p5.map(n, 0, 1, 150, 255) 

        p5.rotate(space)
        p5.fill(r,g,b)
        p5.rect(20, 0, h-20, 2)

        //pollen -> yellow
        p5.fill(255,202,0) 
        let posX = 0;
        let posY = p5.random(-100, 0);
        let size = p5.random(50, 50)*amplitude;
        p5.ellipse(posX,posY, size);

        //petals falling -> pink, blue, purple
        p5.fill(r,g,b)

        for (let i = 0; i < p5.random(1); i++){
            let x = 0;
            let y = p5.random(-50, 0);
            let initialangle = p5.random(0, 2 * p5.PI);
            let si = p5.random(10, 10);

            let radius = p5.sqrt(p5.random(p5.pow(width / 2, 2)));
            
            let w = 0.01 
            let angle = w *0.01+ initialangle;
            x = width / 2 + radius * p5.sin(angle);
            y += p5.pow(si, 0.01);
            p5.ellipse(x, y, si);
        }
    }
    p5.endShape();
  },
);