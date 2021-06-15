import { useEffect } from "react";

const handleOutsideClick = (ref, handler, eventType = "click") => {
  useEffect(() => {
    const clicklistener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler();
    };

    const esclistener = (event) => {
      if (event.key === "Escape") {
        handler();
      }
    };

    document.addEventListener("keyup", esclistener);
    document.addEventListener(eventType, clicklistener);

    return () => {
      document.removeEventListener("keyup", esclistener);
      document.removeEventListener(eventType, clicklistener);
    };
  }, []);
};

export default handleOutsideClick;
