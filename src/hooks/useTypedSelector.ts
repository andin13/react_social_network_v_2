import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootState } from '../toolkitRedux/store';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
