// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';

export const jWongVisualizer = new Visualizer(
    'jwong1009', //name: string
    //draw: VisualizerDrawer
    (p5: P5, analyzer: Tone.Analyser) => {
        // p5.background('#BAE3F2');
        // p5.background('#99D4FA');
        p5.background('black');
        const width = window.innerWidth;
        const height = window.innerHeight / 2;
        const dim = Math.min(width, height);
        let ranCol, x, y, diam;
        let circlesArr = [];
        const values = analyzer.getValue();

        class Circles {
            x: number;
            y: number;
            diam: number;

            constructor() {
                this.x = p5.random(width);
                this.y = p5.random(height);
                this.diam = p5.random(75, 200);
            }

            display() {
                const colors = ['#B3D28D', '#EBE6CA', '#E1C49A', '#EED7A8', '#EBB891', '#D98D88'];
                ranCol = p5.random(colors);
                p5.stroke(ranCol);
                p5.strokeWeight(dim * 0.01);
                p5.noFill();

                // p5.ellipse(this.x, this.y, this.diam);
            }
        }


        p5.push();
        for (let j = 0; j < 5; j++) {
            circlesArr[j] = new Circles();
        }
        for (let k = 0; k < circlesArr.length; k++) {
            circlesArr[k].display();
        }
        p5.pop();

    



        p5.beginShape();
        let val = [];
            for (let i = 0; i < values.length; i++) {
                val.push(values[i] as number);
                // const diam = 300;
                // p5.stroke('#7C918F');
                // p5.strokeWeight(dim * 0.01);
                // p5.noFill();
                // p5.rect(x, y, diam * val,diam * val);
                // p5.rect(width - (width / 1.5), height / 2, 100, 100);
                // p5.scale((val * 5) + 1);
            }
        // p5.push();
        // // const colors = ['#8B9216', '#A79F0F', '#EDA421', '#E98604', '#DF3908', '#C91E0A'];
        // const colors = ['#B3D28D', '#EBE6CA', '#E1C49A', '#EED7A8', '#EBB891', '#D98D88'];

        // ranCol = p5.random(colors);
        // x = p5.random(width);
        // y = p5.random(height);
        // diam = p5.random(75, 200);
        // p5.stroke(ranCol);
        // // p5.ellipse(x, y, diam * val[val.length-1]);
        // p5.pop();
        p5.endShape();
        },
);
