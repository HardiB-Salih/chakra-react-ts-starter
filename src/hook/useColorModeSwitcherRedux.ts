import { useCallback, useEffect } from "react";
import { useColorMode } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store"; // Ensure RootState is imported

import { updateMode } from "../redux/slices/appSlice"; // Adjust the import path accordingly

const useColorModeSwitcherRedux = () => {
  const dispatch = useDispatch();
  const { setColorMode } = useColorMode();
  const mode = useSelector((state: RootState) => state.app.mode); // Use RootState here

  const setModeAndColor = useCallback(
    (newMode: "light" | "dark" | "system") => {
      dispatch(updateMode({ mode: newMode })); // Pass newMode as { mode: newMode }
      if (newMode === "system") {
        const systemPreferenceQuery = window.matchMedia(
          "(prefers-color-scheme: dark)"
        );
        setColorMode(systemPreferenceQuery.matches ? "dark" : "light");
      } else {
        setColorMode(newMode);
      }
    },
    [dispatch, setColorMode]
  );

  // Sync Chakra UI's color mode with Redux state on initial load
  useEffect(() => {
    if (mode === "system") {
      const systemPreferenceQuery = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );
      setColorMode(systemPreferenceQuery.matches ? "dark" : "light");
    } else {
      setColorMode(mode);
    }
  }, [mode, setColorMode]);

  return { mode, setModeAndColor };
};

export default useColorModeSwitcherRedux;
