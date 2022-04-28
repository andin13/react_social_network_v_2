import { useDispatch } from 'react-redux';

import { AppDispatch } from '../redux/store';

export const useActionsAndThunks = () => useDispatch<AppDispatch>();
