// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { KalimbaInstrument } from './instruments/jwong1009';
import { jWongVisualizer } from './visualizers/jwong1009';
import { WaveformVisualizer } from './visualizers/Waveform';

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

const instruments = List([PianoInstrument, KalimbaInstrument]);
const visualizers = List([WaveformVisualizer, jWongVisualizer]);
export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers,
});
