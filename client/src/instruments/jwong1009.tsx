// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React, { useState } from 'react';

// project imports
import { Instrument, InstrumentProps } from '../Instruments';

// css
import './kalimba.css';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Piano.
 ** ------------------------------------------------------------------------ */

interface KalimbaKeyProps {
  note: string; // C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B
  duration?: string;
  synth?: Tone.Synth; // Contains library code for making sound
  minor?: boolean; // True if minor key, false if major key
  // octave: number;
  index: number; // octave + index together give a location for the piano key
}

export function KalimbaKey({
  note,
  synth,
  // minor,
  index,
}: KalimbaKeyProps): JSX.Element {
  /**
   * This React component corresponds to either a major or minor key in the piano.
   * See `PianoKeyWithoutJSX` for the React component without JSX.
   */
  console.log({ index });
  const leftPos = index + 1;
  return (
    // Observations:
    // 1. The JSX refers to the HTML-looking syntax within TypeScript.
    // 2. The JSX will be **transpiled** into the corresponding `React.createElement` library call.
    // 3. The curly braces `{` and `}` should remind you of string interpolation.
    <div
      onMouseDown={() => synth?.triggerAttack(`${note}`)} // Question: what is `onMouseDown`?
      onMouseUp={() => synth?.triggerRelease('+0.25')} // Question: what is `onMouseUp`?
      className={classNames('ba pointer absolute dim tine', {
        // 'bg-black black h3': minor, // minor keys are black
        // 'black bg-white h4': !minor, // major keys are white
      })}
      // className="tine"
      style={{
        // CSS
        top: 0,
        left: `${leftPos}rem`,
        // zIndex: minor ? 1 : 0,
        // width: minor ? '1.5rem' : '2rem',
        // marginLeft: minor ? '0.25rem' : 0,
      }}
    ></div>
  );
}

// eslint-disable-next-line
function PianoKeyWithoutJSX({
  note,
  synth,
  minor,
  index,
}: KalimbaKeyProps): JSX.Element {
  /**
   * This React component for pedagogical purposes.
   * See `PianoKey` for the React component with JSX (JavaScript XML).
   */
  return React.createElement(
    'div',
    {
      onMouseDown: () => synth?.triggerAttack(`${note}`),
      onMouseUp: () => synth?.triggerRelease('+0.25'),
      className: classNames('ba pointer absolute dim', {
        'bg-black black h3': minor,
        'black bg-white h4': !minor,
      }),
      style: {
        top: 0,
        left: `${index * 2}rem`,
        zIndex: minor ? 1 : 0,
        width: minor ? '1.5rem' : '2rem',
        marginLeft: minor ? '0.25rem' : 0,
      },
    },
    [],
  );
}

function KalimbaType({ title, onClick, active }: any): JSX.Element {
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

function Kalimba({ synth, setSynth }: InstrumentProps): JSX.Element {
  const keys = List([
    { note: 'D6', idx: 0 },
    { note: 'B5', idx: 1 },
    { note: 'G5', idx: 2 },
    { note: 'E5', idx: 3 },
    { note: 'C5', idx: 4 },
    { note: 'A4', idx: 5 },
    { note: 'F4', idx: 6 },
    { note: 'D4', idx: 7 },
    { note: 'C4', idx: 8 },
    { note: 'E4', idx: 9 },
    { note: 'G4', idx: 10 },
    { note: 'B4', idx: 11 },
    { note: 'D5', idx: 12 },
    { note: 'F5', idx: 13 },
    { note: 'A5', idx: 14 },
    { note: 'C6', idx: 15 },
    { note: 'E6', idx: 16 },
  ]);

  const [kalSam, setKalSam] = useState(
    new Tone.Sampler({
      urls: {
        C4: "C4.wav"
      },
      baseUrl: "http://localhost:3000/",
    }).toDestination()
  );



  const setOscillator = (newType: Tone.ToneOscillatorType) => {
    setSynth(oldSynth => {
      oldSynth.dispose();

      return new Tone.Synth({
        oscillator: { type: newType } as Tone.OmniOscillatorOptions,
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
      <div className="relative dib h4 w-100 ml4">
        {/* {Range(4, 7).map(octave => */}
        {keys.map(key => {
          // const isMinor = key.note.indexOf('b') !== -1;
          const note = `${key.note}`;
          return (
            <KalimbaKey
              key={note} //react key
              note={note}
              synth={synth}
              // minor={isMinor}
              // octave={octave}
              // index={(octave - 4) * 7 + key.idx}
              index={key.idx}
            />
          );
        })}
        {/* )} */}
      </div>
      <div className={'pl4 pt4 flex'}>
        {oscillators.map(o => (
          <KalimbaType
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

export const KalimbaInstrument = new Instrument('jwong1009', Kalimba);
