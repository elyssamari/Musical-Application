// 3rd party library imports
import { Translate16 } from '@carbon/icons-react';
import P5 from 'p5';
import * as Tone from 'tone';
//import Particles from "react-tsparticles";
import { couldStartTrivia } from 'typescript';


//Sources 
//https://www.npmjs.com/package/react-tsparticles
//https://nishanc.medium.com/audio-visualization-in-javascript-with-p5-js-cf3bc7f1be07
//https://p5js.org/examples/3d-geometries.html

// project imports
import { Visualizer } from '../Visualizers';


 export const WaveformVisualizer2 = new Visualizer(
  'tdwlop',
  (p5: P5, analyzer: Tone.Analyser) => {
   let Y_AXIS = 2;
   let X_AXIS = 1;
    function star(x: number, y: number, radius1: number, radius2: number, npoints: number) {
      let angle = p5.TWO_PI / npoints;
      let halfAngle = angle / 2.0;
      p5.beginShape();
      for (let a = 0; a < p5.TWO_PI; a += angle) {
        let sx = x + p5.cos(a) * radius2;
        let sy = y + p5.sin(a) * radius2;
        p5.vertex(sx, sy);
        sx = x + p5.cos(a + halfAngle) * radius1;
        sy = y + p5.sin(a + halfAngle) * radius1;
        p5.vertex(sx, sy);
      }
      p5.endShape(p5.CLOSE);
    }
    
    function setGradient(x: number, y: number, w: any, h: any, c1: P5.Color, c2: P5.Color, axis: number) {
      p5.noFill();
    
      if (axis === Y_AXIS) {
        // Top to bottom gradient
        for (let i = y; i <= y + h; i++) {
          let inter = p5.map(i, y, y + h, 0, 1);
          let c = p5.lerpColor(c1, c2, inter);
          p5.stroke(c);
          p5.line(x, i, x + w, i);
        }
      } else if (axis === X_AXIS) {
        // Left to right gradient
        for (let i = x; i <= x + w; i++) {
          let inter = p5.map(i, x, x + w, 0, 1);
          let c = p5.lerpColor(c1, c2, inter);
          p5.stroke(c);
          p5.line(i, y, i, y + h);
        }
      }
    }
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);
    /*let bg=p5.loadImage('https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80');
    bg.height = height;
    bg.width=width;
    
    p5.background(bg);*/
    setGradient(0, 0, width / 2, height, p5.color(35,17,97), p5.color(0), X_AXIS);
    setGradient(width / 2, 0, width / 2, height, p5.color(0), p5.color(35,17,97), X_AXIS);
    //p5.background(35,17,97,225);
    p5.strokeWeight(dim * 0.01);
    p5.stroke(255, 255, 255, 255); 
    p5.translate(width/2.5, height/2);
    p5.noFill();
   
    const values = analyzer.getValue();
    p5.push();
    p5.translate(-300,0);
    p5.rotate(p5.frameCount / 50.0);
    star(-50, -50, 80, 100, 30);
    p5.pop();

    p5.push();
    

    p5.stroke(153,255,153,225)
    //for (let i = 0; i < 360; i++) {
      //const amplitude = values[i] as number;
       p5.rect(-50,-50,100, 100);
       p5.pop();

       p5.push();p5.rotate(p5.frameCount / 50.0);
       p5.ellipse(100, -80,72, 72);
       
       p5.pop();

       //p5.rect(100,-80, 100, 100);
       p5.push();
       p5.arc(0,150, 1000, 200, p5.PI, p5.TWO_PI);
      //p5.scale(amplitude);

    //}
  
    p5.pop();


    p5.beginShape();
    for (let i = 0; i < 360; i++) {
        
      const amplitude = values[i] as number;
     // p5.strokeWeight(amplitude*250);
      let r = p5.map(amplitude,0,1,70,300);
      let x = r * p5.cos(i);
      let y = r * p5.sin(i);
      //p5.strokeCap('round');
     
      //const x = p5.map(i, 0, values.length - 1, 0, width);
      //const y = height / 2 + amplitude * height;
      // Place vertex
      p5.vertex(x,y);
    }
    p5.endShape();
   
  },
);


