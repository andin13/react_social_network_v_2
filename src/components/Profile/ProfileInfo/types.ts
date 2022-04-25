import { IProfile } from '../../../commonTypes/IProfile';

export interface ProfileInfoProps {
    profile: IProfile;
    status: string;
    isOwner: boolean;
}
