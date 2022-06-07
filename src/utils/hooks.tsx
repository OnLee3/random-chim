import { useEffect } from "react";

export function useOnMounted(callback: () => void) {
  return useEffect(callback, []);
}
