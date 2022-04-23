import { useDispatch } from 'react-redux';

import { AppDispatch } from '../toolkitRedux/store';

export const useActionsAndThunks = () => useDispatch<AppDispatch>();
