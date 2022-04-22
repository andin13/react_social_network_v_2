import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionAndThunksCreators from '../redux/actionsAndThunks';

export const useActionsAndThunks = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionAndThunksCreators, dispatch);
};
