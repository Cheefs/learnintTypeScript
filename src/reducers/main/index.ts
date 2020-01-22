import { IAction } from "../../interfaces";

export const mainInitialState: object = {
    
}

export default function( state: object = mainInitialState, action: IAction ): object {
    const { type, payload } = action;

    switch ( type ) {
      default:
        return state;
    }
};