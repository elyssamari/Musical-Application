// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';


export const jWongVisualizer = new Visualizer(
    'jwong1009', //name: string
    //draw: VisualizerDrawer
    (p5: P5, analyzer: Tone.Analyser) => {
        //setup() function of a typical p5.js 
        //equivalent to createCanvas(width, height);
        const width = window.innerWidth;
        const height = window.innerHeight / 2;
        const dim = Math.min(width, height);

        p5.background(0, 0, 0, 255);
        // const x = p5.random(width);
        // const y = p5.random(height);
        const x = width/2.5;
        const y = height/2;

        const values = analyzer.getValue();
        p5.beginShape();
        for (let i = 0; i < values.length; i++) {
            const val = values[i] as number;
            // const diam = 300;
            // const colors = ['#F4F0D9', '#F5DCBF', '#CFBBA8', '#7C918F', '9FB5A3'];
            // const ranCol = p5.random(colors);
            p5.stroke('#7C918F');
            // p5.stroke(ranCol);
            p5.strokeWeight(dim * 0.01);
            p5.noFill();
            // p5.ellipse(x, y, diam * val);
            
            p5.rect(width - (width / 1.5), height / 2, 100, 100);
            p5.scale((val * 5)+1);
        }
        p5.endShape();
    },
);
