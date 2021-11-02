// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import {} from './instruments/tdwlop'
import { WaveformVisualizer } from './visualizers/Waveform';
import { WaveformVisualizer2 } from './visualizers/tdwlop';
//import {} from '../../server/src/Database';
/** ------------------------------------------------------------------------ **
 * The entire application state is stored in AppState.
 ** ------------------------------------------------------------------------ */

/**
 * Observation: pure map (compare and contrast with impure map)
 *
 * 'instrument': Instrument
 * 'visualizer': Visualizer
 */
export type AppState = Map<string, any>;

const instruments = List([PianoInstrument]);
const visualizers = List([WaveformVisualizer,WaveformVisualizer2]);
const songs = List();
export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers,
  songs,
});
