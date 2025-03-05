import { useEffect } from "react";

const useCloseMultipleModal = (refs, onClose) => {
  useEffect(() => {
    function handleClickOutside(event) {
      let isOutside = true;

      // Check if click is inside any of the dropdowns
      Object.values(refs.current).forEach((ref) => {
        if (ref && ref.contains(event.target)) {
          isOutside = false;
        }
      });

      if (isOutside) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs, onClose]);
};

export default useCloseMultipleModal;
