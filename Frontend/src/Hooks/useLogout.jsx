import { useAuthContext } from './useAuthContext'
import { useWorkoutsContext } from './useWorkoutsContext';
import api from '../api';

export function useLogout() {
    const { dispatch } = useAuthContext();
    const { dispatch: workoutDispatch } = useWorkoutsContext();
    const logout = () => {
        api.post('/users/logout', {}, { withCredentials: true });
        dispatch({ type: 'LOGOUT' });
        workoutDispatch({ type: 'CLEAR_WORKOUT' });
    }
    return { logout };
}