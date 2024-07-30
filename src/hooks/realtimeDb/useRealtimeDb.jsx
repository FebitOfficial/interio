import { ref, onValue } from "firebase/database";
import { useRef, useState } from "react";
import { db } from "../../firebase";

const FetchState = {
  idle: "idle",
  success: "success",
  error: "error",
  loading: "loading",
};

/**
 * Returns an object with methods to subscribe and unsubscribe to realtime updates from a Firebase Realtime Database.
 *
 * @param {string} path - The path to subscribe to.
 *
 * @typedef {Object} RealtimeDbHookReturn
 * @property {Function} subscribe - Subscribes to realtime updates from the specified path.
 * @property {Function} unsubscribe - Unsubscribes from realtime updates.
 * @property {any} data - The data retrieved from the specified path.
 * @property {Error} error - The error encountered during subscription, if any.
 * @property {'idle' | 'success' | 'error' | 'loading'} state - The state of the subscription.
 * @return {RealtimeDbHookReturn} An object with methods to subscribe and unsubscribe to realtime updates from a Firebase Realtime Database.
 */
export const useRealtimeDb = (path) => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [state, setState] = useState(FetchState.idle);

  const unsubscribeRef = useRef(null);

  const dataRef = ref(db, path);

  const subscribe = () => {
    setState(FetchState.loading);
    unsubscribeRef.current = onValue(
      dataRef,
      (snapshot) => {
        const d = snapshot.val();
        setData(d);
        setState(FetchState.success);
      },
      (err) => {
        setError(err);
        setState(FetchState.error);
      }
    );
  };

  const unsubscribe = () => {
    if (unsubscribeRef.current) {
      unsubscribeRef.current();
    }
  };

  return { subscribe, unsubscribe, data, error, state };
};
