// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range, Repeat } from 'immutable';

// project imports
import { Instrument3, InstrumentProps3 } from '../Instruments';

interface MachineProps {
  note: string; 
  duration?: string;
  synth?: Tone.MembraneSynth; 
  minor?: boolean; 
  octave: number;
  index: number; 
}

export function MachineKey({
  note,
  synth,
  minor,
  index,
}: MachineProps): JSX.Element {

  return (
    <div className="fl w-20 pa3"
      style={{
        position: 'relative',
        top: 0,
      }}>
      <div
        onMouseDown={() => synth?.triggerAttack(`${note}`)} 
        onMouseUp={() => synth?.triggerRelease('+0.25')} 
        className={classNames('ba pointer absolute dim', {
          'black bg-white h4': !minor, 
        })}
        style={{
          //CSS
          top: 0,
          width: '1.3rem',
          height: '1.3rem',
          borderRadius: '0.2rem',
          backgroundColor: minor ? '#8ECDDA' : '#8ECDDA',
        }}
      ></div>
    </div>
  );
}

function MachineType({ title, onClick, active }: any): JSX.Element {
  return (
    <div
      onClick={onClick}
      className={classNames('dim pointer ph2 pv1 ba mr2 br1 fw7 bw1', {
        'gray b--light-gray': !active,
      })}
      style={{
        backgroundColor: 'white',
        position: 'relative',
        bottom: 15,
        borderColor: '#898888',
        borderRadius: '0.2rem'
      }}
    >
      {title}
    </div>
  );
}

function Machine({ synth, setSynth }: InstrumentProps3): JSX.Element {
  const keys = List([
    { note: 'C', idx: 0 },
    { note: 'D', idx: 1 },
    { note: 'E', idx: 2 },
    { note: 'F', idx: 3 },
    { note: 'G', idx: 4 },
    { note: 'A', idx: 5 },
    { note: 'B', idx: 6 },
  ]);

  const setOscillator = (newType: Tone.ToneOscillatorType) => {
    setSynth(oldSynth => {
      oldSynth.dispose();

      return new Tone.MembraneSynth({
        oscillator: { type: newType } as Tone.OmniOscillatorOptions,
        envelope: {
          attack: 0.01,
          decay: 0.8,
          release: 0.1,
          sustain: 0.8,
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
      <div className="relative dib h4 w-20 ml6">
        {Range(2, 7).map(octave =>
          keys.map(key => {
            const isMinor = key.note.indexOf('b') !== -1;
            const note = `${key.note}${octave}`;
            return (
              <MachineKey
                key={note} //react key
                note={note}
                synth={synth}
                minor={isMinor}
                octave={octave}
                index={(octave - 2) * 7 + key.idx}
              />
            );
          }),
        )}
      </div>
      <div className={'pl4 pt4 flex'}
        style={{
          position: 'relative',
          top: 120
        }}>
        {oscillators.map(o => (
          <MachineType
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

export const anliao2Instrument = new Instrument3('anliao2', Machine);