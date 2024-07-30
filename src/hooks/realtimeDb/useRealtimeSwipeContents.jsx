import { useEffect } from "react";
import { useRealtimeDb } from "./useRealtimeDb";

export const useRealtimeSwipeContents = () => {
  const path = "swiperContent";
  const { subscribe, unsubscribe, data, error, state } = useRealtimeDb(path);

  useEffect(() => {
    subscribe();

    return () => unsubscribe();
  }, []);

  return { data: data ?? [], error, state };
};
