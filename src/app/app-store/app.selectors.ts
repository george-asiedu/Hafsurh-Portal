import { createFeatureSelector } from '@ngrx/store';
import {AppStoreState} from './app.state';

export const selectAppStoreFeature = createFeatureSelector<AppStoreState>('AppStore');
