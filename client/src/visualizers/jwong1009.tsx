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

        // p5.background('#d6b67a');
        p5.background('black');
        const width = window.innerWidth;
        const height = window.innerHeight / 2;
        const dim = Math.min(width, height);
        let ranCol, x, y, diam;
            const values = analyzer.getValue();
            p5.beginShape();
            for (let i = 0; i < values.length; i++) {
                const val = values[i] as number;
                // const diam = 300;
                // p5.stroke('#7C918F');
                p5.strokeWeight(dim * 0.01);
                p5.noFill();

                const colors = ['#8B9216', '#A79F0F', '#EDA421', '#E98604', '#DF3908', '#C91E0A'];
                ranCol = p5.random(colors);
                x = p5.random(width);
                y = p5.random(height);
                diam = p5.random(75,200);
                p5.stroke(ranCol);
   
                p5.ellipse(x, y, diam * val);
                // p5.rect(x, y, diam * val,diam * val);
                // p5.rect(width - (width / 1.5), height / 2, 100, 100);
                // p5.scale((val * 5) + 1);
            }
            p5.endShape();
        },
);
