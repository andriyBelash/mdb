import { create } from 'zustand';
import { ACCOUNT_ID } from '@/utils/constants/tmdb';
import { fetchWrapper } from '@/utils/fetchWrapper';
import { IProfile } from '@/types/profile';

type State = {
  profile: IProfile;
};

type Action = {
  getProfile: () => Promise<IProfile | undefined>;
};

export const useProfileStore = create<State & Action>((set) => ({
  profile: {} as IProfile,
  getProfile: async () => {
    try {
      const response = await fetchWrapper<IProfile>(`account/${ACCOUNT_ID}`);
      if (!response.id) {
        throw new Error(`HTTP error! Status: ${response.id}`);
      }
      set({ profile: response });
      if(response) {
        return response
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  },
}));
