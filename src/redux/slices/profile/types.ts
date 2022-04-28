import { IPost } from '../../../commonTypes/IPost';
import { IProfile } from '../../../commonTypes/IProfile';

export interface ProfileState {
    posts: Array<IPost>;
    profile: IProfile;
    status: string;
}
