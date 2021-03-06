import { Observable } from 'rxjs';

export interface BaseSDK {
  get isReady(): Promise<boolean>;
  get isReady$(): Observable<boolean>;
}

export const enum ChainType {
  'SETHEUM' = 'SETHEUM'
}
