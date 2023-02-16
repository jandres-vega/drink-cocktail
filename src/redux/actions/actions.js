import {typesInitialState} from '../types'
export const clearInitialState = () => {
    return {
        type: typesInitialState.clearState,
        payload: null
    }
}