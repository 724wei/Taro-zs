import { useUserStore} from "./userPinia";

const useStore = () => ({
  user: useUserStore(),
});

export default useStore;
