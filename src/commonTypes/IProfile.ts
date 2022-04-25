export interface IProfile {
    aboutMe: string | null;
    contacts: {
      facebook: string | null;
      website: string | null;
      vk: string | null;
      twitter: string | null;
      instagram: string | null;
      youtube: string | null;
      github: string | null;
      mainLink: string | null
    },
    lookingForAJob: boolean;
    lookingForAJobDescription: string | null;
    fullName: string | null;
    userId: number | null;
    photos: {
      small: string | null;
      large: string | null
    }
}
