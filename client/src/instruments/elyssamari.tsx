// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React from 'react';


// project imports
import { Instrument4, InstrumentProps4 } from '../Instruments';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Piano.
 ** ------------------------------------------------------------------------ */

 interface UkuleleKeyProps {
  note: string; // C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B
  duration?: string;
  synth?: Tone.AMSynth; // Contains library code for making sound
  minor?: boolean; // True if minor key, false if major key
  octave: number;
  index: number; // octave + index together give a location for the piano key

}

export function UkuleleKey({
  note,
  synth,
  minor,
  index,
}: UkuleleKeyProps): JSX.Element {
  /**
   * This React component corresponds to either a major or minor key in the piano.
   * See `PianoKeyWithoutJSX` for the React component without JSX.
   */
  return (
    // Observations:
    // 1. The JSX refers to the HTML-looking syntax within TypeScript.
    // 2. The JSX will be **transpiled** into the corresponding `React.createElement` library call.
    // 3. The curly braces `{` and `}` should remind you of string interpolation.
    <div
      onMouseDown={() => synth?.triggerAttack(`${note}`)}
      onMouseUp={() => synth?.triggerRelease('+0.25')} 
      className={classNames('ba pointer absolute dim', {
        'bg-black black h3': minor, 
        'black bg-white h4': !minor, 
      })}
      style={{
        // CSS
        top: 0,
        left: `${index * 2}rem`,
        zIndex: minor ? 1 : 0,
        width: minor ? '1.5rem' : '2rem',
        marginLeft: minor ? '0.25rem' : 0,
      }}
    ></div>
  );
}

function UkuleleType({ title, onClick, active }: any): JSX.Element {
  return (
    <div
      onClick={onClick}
      className={classNames('dim pointer ph2 pv1 ba mr2 br1 fw7 bw1', {
        'b--black black': active,
        'gray b--light-gray': !active,
      })}
    >
      {title}
    </div>
  );
}

function Ukulele({ synth, setSynth }: InstrumentProps4): JSX.Element {
  const keys = List([
    { note: 'G', idx: 0 },
    { note: 'C', idx: 1 },
    { note: 'E', idx: 2 },
    { note: 'A', idx: 3 },
  ]);

  const setOscillator = (newType: Tone.ToneOscillatorType) => {
    setSynth(oldSynth => {
      oldSynth.dispose();

      return new Tone.AMSynth({
        oscillator: { type: newType } as Tone.OmniOscillatorOptions,
        envelope: {
          attack: 0.1,
          decay: 0.2,
          sustain: 1,
          release: 0.8,
        }
      }).toDestination();
    });
  };

  const oscillators: List<OscillatorType> = List([
    'sine',
    'sawtooth',
    'square',
    'triangle',
    'fmsine',
    'fmsawtooth',
    'fmtriangle',
    'amsine',
    'amsawtooth',
    'amtriangle',
  ]) as List<OscillatorType>;

  return (
    <div className="pv4">
      <div className="relative  h4">
      <svg width="2000" height="150" viewBox="396 200 1 225" fill="none" xmlns="http://www.w3.org/2000/svg">

      <rect fill="#35302B" x="-1055" y="0" width="2150" height="400"/> 

      <rect fill="#9C7A3C" x="-1055" y="0" width="25" height="400"/> 
      <rect fill="#9C7A3C" x=" -715" y="0" width="25" height="400"/> 
      <rect fill="#9C7A3C" x="-375" y="0" width="25" height="400"/> 
      <rect fill="#9C7A3C" x="-35" y="0" width="25" height="400"/> 
      <rect fill="#9C7A3C" x="305" y="0" width="25" height="400"/> 
      <rect fill="#9C7A3C" x="645" y="0" width="25" height="400"/> 

      <rect fill="#F2F1EE" x="1022" y="0" width="50" height="400"/> 

      <rect fill="white" x="-1055" y="220" width="2125" height="10"/> 
      <rect fill="white" x="-1055" y="270" width="2125" height="10"/> 
      <rect fill="white" x="-1055" y="320" width="2125" height="10"/> 
      <rect fill="white" x="-1055" y="370" width="2125" height="10"/> 

      <circle cx="-875" cy="300" r="10" fill="white"/>
</svg>

      <div //G String
      onMouseDown={() => synth?.triggerAttack(`G4`)} 
      onMouseUp={() => synth?.triggerRelease('+0.25')}
      className={classNames(' pointer absolute dim black  h4'
      )}
      style={{
        top: 13,
        left: 31, 
        width: '1450px',
        height: `8px`,
      }}
      ></div>

      <div //C String
      onMouseDown={() => synth?.triggerAttack(`C4`)} 
      onMouseUp={() => synth?.triggerRelease('+0.25')}
      className={classNames(' pointer absolute dim black  h4'
      )}
      style={{
        top: 46,
        left: 31, 
        width: '1450px',
        height: `8px`,
      }}
      ></div>

      <div //E String
      onMouseDown={() => synth?.triggerAttack(`E4`)} 
      onMouseUp={() => synth?.triggerRelease('+0.25')}
      className={classNames(' pointer absolute dim black  h4'
      )}
      style={{
        top: 80,
        width: '1450px',
        left: 31, 
        height: `8px`,
      }}
      ></div>

      <div //A String
      onMouseDown={() => synth?.triggerAttack(`A4`)} 
      onMouseUp={() => synth?.triggerRelease('+0.25')}
      className={classNames(' pointer absolute dim black  h4'
      )}
      style={{
        top: 113,
        width: '1450px',
        left: 31, 
        height: `8px`,
      }}
      ></div>

  </div>
      <div className={'pl4 pt4 flex'}>
        {oscillators.map(o => (
          <UkuleleType
            key={o}
            title={o}
            onClick={() => setOscillator(o)}
            active={synth?.oscillator.type === o}
          />
        ))}
      </div>
    </div>
  );
}

export const elyssamari = new Instrument4('elyssamari', Ukulele);