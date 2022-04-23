import { IPost } from '../../../commonTypes/IPost';

export interface ProfileState {
    posts: Array<IPost>;
    profile: any;
    status: string;
}
