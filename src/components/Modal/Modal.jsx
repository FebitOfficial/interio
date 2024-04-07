import React, { useEffect } from "react";

const Modal = ({ children, isOpen, onCllose }) => {
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  if (!isOpen) return null;
  return (
    <div className="fixed w-screen bg-white min-h-screen overflow-y-auto z-[999999999] top-0 left-0">
      <div className="relative">{children}</div>
    </div>
  );
};

export default Modal;
