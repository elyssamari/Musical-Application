// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';

export const jWongVisualizer = new Visualizer(
    'jwong1009', //name: string
    //draw: VisualizerDrawer
    (p5: P5, analyzer: Tone.Analyser) => {
        const width = window.innerWidth;
        const height = window.innerHeight / 2;
        const dim = Math.min(width, height);

        p5.background('black');
        p5.noFill(); 
        // const space = 10;
        p5.strokeWeight(dim * 0.002);
        const values = analyzer.getValue();

        p5.push();
        p5.translate((width/2) + 100 , height / 2);
        p5.beginShape();
        p5.stroke('#A7C7E7');
        for (let i = 0; i < values.length; i++) {
            const amplitude = values[i] as number;
            const x = p5.map(p5.cos(i* (height/2)) * width/3, 0, values.length - 1, 0, height/5);
            const y = p5.sin(i*(width/2)) + (amplitude * 2) * height;
            p5.vertex(y, x);
        }
        p5.endShape();
        p5.pop();

        p5.push();
        p5.translate((width / 5), height / 2);
        p5.beginShape();
        p5.stroke('#d2b2e5');
        for (let i = 0; i < values.length; i++) {
            const amplitude = values[i] as number;
            const x = p5.map(p5.cos(i * (height / 2)) * width / 3, 0, values.length - 1, 0, height / 5);
            const y = p5.sin(i * (width * 2)) + (amplitude * 2) * height;
            p5.vertex(y, x);

        }
        p5.endShape();
        p5.pop();



        p5.push();
        p5.translate(width / 2, height / 2);
        p5.stroke('white');
        p5.strokeWeight(0.6);


        //Robot: DAVE
        p5.rect(-704, 80, 70, 70);
        p5.line(-670, 80, -702, 50);
        p5.line(-670, 80, -638, 50);
        p5.fill('white');
        p5.ellipse(-702, 50, 10);
        p5.ellipse(-638, 50, 10);
        p5.noFill();
        p5.ellipse(-690, 100, 20);
        p5.ellipse(-650, 100, 20);
        p5.rect(-695, 127, 50, 10);
        p5.rect(-693, 150, 45, 20);

        //ROBOT: BOB
        p5.rect(366, 80, 70, 70);
        p5.line(400, 80, 368, 50);
        p5.line(400, 80, 432, 50);
        p5.fill('white');
        p5.ellipse(368, 50, 10);
        p5.ellipse(432, 50, 10);
        p5.noFill();
        p5.ellipse(380, 100, 20);
        p5.ellipse(420, 100, 20);
        p5.rect(375, 127, 50, 10);
        p5.rect(378, 150, 45, 20);
        p5.pop();

        p5.push();
        p5.strokeWeight(5);
        const colors = ['#B3D28D', '#EBE6CA', '#E1C49A', '#EED7A8', '#EBB891', '#D98D88'];
        p5.stroke(p5.random(colors));
        p5.point(p5.random(width), p5.random(height));
        p5.pop();
        },
);
