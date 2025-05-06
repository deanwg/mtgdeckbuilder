import React, { useEffect, useState } from "react";

const styles = {
  error: "bg-red-600 text-white",
  success: "bg-green-600 text-white",
};

const Toast = ({ message, clearMessage, toastStyle }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(() => clearMessage(), 1000);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [message, clearMessage]);

  const style = styles[toastStyle];

  return (
    <div
      className={`fixed pointer-events-none z-50 ${style} px-4 py-2 rounded transition-opacity duration-1000 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {message}
    </div>
  );
};

export default Toast;
