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
        p5.strokeWeight(dim * 0.008);
        p5.noFill();
        
        p5.stroke('#A7C7E7');
        // p5.noiseDetail(6, 1);

        const values = analyzer.getValue();
        for (let i = 0; i < values.length; i++) {
            const amplitude = values[i] as number;

            p5.push();
            p5.beginShape();
            for (let j = 0; j < p5.TWO_PI; j += 0.1) {
                let xoff = 1;
                let yoff = 1;
                let offset = p5.map(p5.sin(j * 5 + p5.frameCount * 0.08), 0, 1, 70, 100);
                // let offset1 = p5.map(p5.noise(xoff, yoff) * amplitude, 0, 1, 75, 100);
                let offset1 = p5.map(amplitude, 0, 1, 20, 150);

                let r = offset + offset1;
                let x = r * p5.cos(j) + (width/3) + 80;
                let y = r * p5.sin(j) + (height/2);
                p5.vertex(x, y);
                xoff += 0.5;
                yoff += 0.5;
            }
            p5.endShape(p5.CLOSE);

            p5.pop();

            p5.push();
            p5.translate(width / 2, height / 2);
            // p5.fill(204, 101, 192, 127);
            // for (let k = 0; k < 10; k++) {
            //     p5.ellipse(0, 30, 20, 80);
            //     p5.rotate(p5.PI / 5);
            // }
            // p5.fill();
            p5.strokeWeight(0.05);

            //Robot: DAVE
            p5.ellipse(-690, 100, 20);
            p5.ellipse(-650, 100, 20);
            p5.rect(-695, 127, 50, 10);

            //ROBOT: BOB
            p5.ellipse(380, 100, 20);
            p5.ellipse(420, 100, 20);
            p5.rect(375, 127, 50, 10);
            p5.pop();


            // p5.push();
            // p5.stroke('#36A3FF');
            // p5.beginShape();
            // for (let j = 0; j < p5.TWO_PI; j += 0.1) {
            //     let xoff = 1;
            //     let yoff = 1;
            //     let offset = p5.map(p5.sin(j * 4 + p5.frameCount * 0.5), 0, 1, 85, 100);
            //     // let offset1 = p5.map(p5.noise(xoff, yoff) * amplitude, 0, 1, 10, 40);

            //     // let r = offset - offset1;
            //     let x = offset * p5.cos(j) + (width / 6);
            //     let y = offset * p5.sin(j) + (height / 2);
            //     p5.vertex(x, y);
            //     xoff += 0.01;
            //     yoff += 0.01;
            // }
            // p5.endShape(p5.CLOSE);
            // p5.pop();


            // p5.push();
            // p5.stroke('#36A3FF');
            // p5.beginShape();
            // for (let j = 0; j < p5.TWO_PI; j += 0.1) {
            //     let xoff = 1;
            //     let yoff = 1;
            //     let offset = p5.map(p5.sin(j * 4 + p5.frameCount * -0.5), 0, 1, 85, 100);
            //     // let offset1 = p5.map(p5.noise(xoff, yoff) * amplitude, 0, 1, 10, 40);

            //     let r = offset;
            //     let x = offset * p5.cos(j) + (width /2);
            //     let y = offset * p5.sin(j) + (height / 2);
            //     p5.vertex(x, y);
            //     xoff += 0.01;
            //     yoff += 0.01;
            // }
            // p5.endShape(p5.CLOSE);
            // p5.pop();

            //random dots for background
            p5.push();
            p5.strokeWeight(1.5);
             const colors = ['#B3D28D', '#EBE6CA', '#E1C49A', '#EED7A8', '#EBB891', '#D98D88'];
            p5.stroke(p5.random(colors));
            // p5.point(p5.random(width), p5.random(height));
            p5.pop();


        // //     for (let j = 0; j < 360; j+= space) {
        // //         xoff = p5.map(p5.cos(j), -1, 1, 0, 3);
        // //         yoff = p5.map(p5.sin(j), -1, 1, 0, 3);

        // //         let val = p5.map(p5.noise(xoff, yoff), 0, 1, 100, 200);
        // //         p5.rotate(space);
        // //         const x = p5.map(i, 0, values.length - 1, 0, width) * val;
        // //         const y = (height / 2 + amplitude * height) * val;
        // //         // p5.vertex()
        // //         p5.rect(x, y, val, 1);
        // //     }


        //     //RIGHT CIRCLE noFILL
        //     p5.push();
        //     p5.beginShape();
        //     for (let j = 0; j < p5.TWO_PI; j += 0.1) {
        //         let xoff = p5.cos(j) + 2;
        //         let yoff = p5.sin(j) + 2;
        //         let r = p5.noise(xoff, yoff) * amplitude;
        //         let val = p5.map(r, 0, 1, 100, 200);

        //         let x = val * p5.cos(j) + width/2;
        //         let y = val * p5.sin(j) + height/2;
        //         p5.vertex(x, y);
        //     }
        //     p5.endShape(p5.CLOSE);
        //     p5.pop();

        //     // //RIGHT EYEBALL 
        //     // p5.push();
        //     // p5.fill('white');
        //     // p5.noStroke();
        //     // p5.ellipse(730, 200, 160);
        //     // p5.pop();

        //     // //RIGHT IRIS
        //     // p5.push();
        //     // p5.fill('black');
        //     // p5.stroke('white');
        //     // p5.ellipse(495, 200, 75);
        //     // p5.pop();

        //     //LEFT CIRCLE noFILL
        //     p5.push();
        //     p5.beginShape();
        //     for (let j = 0; j < p5.TWO_PI; j += 0.1) {
        //         let xoff = p5.cos(j) + 2;
        //         let yoff = p5.sin(j) + 2;
        //         let r = p5.noise(xoff, yoff) * amplitude;
        //         let val = p5.map(r, 0, 1, 100, 200);

        //         let x = val * p5.cos(j) + width/3;
        //         let y = val * p5.sin(j) + height/2;
        //         p5.vertex(x, y);
        //     }
        //     p5.endShape(p5.CLOSE);
        //     p5.pop();

        //     // //LEFT EYEBALL 
        //     // p5.push();
        //     // p5.fill('white');
        //     // p5.noStroke();
        //     // p5.ellipse(490, 200, 160);
        //     // p5.pop();

        //     //MOUTH
        //     p5.push();
        //     p5.strokeWeight(2);
        //     p5.noFill();
        //     // p5.rect(move, 320, 200, 25);
        //     if (move > width/2) {
        //         hitSide = false;
        //     }

        //     if (move < width/6) {
        //         hitSide = true;
        //     }

        //     if (hitSide) {
        //         move++;
        //     }

        //     if (!hitSide) {
        //         move--;
        //     }

        //     console.log({ width });
        //     p5.pop();
        }
        },
);
