import { useState, createContext } from "react";

const Notification = ({ message, severity }) => {
  const notificationStyle = {
    position: "absolute",
    top: 650,
    right: 120,
    width: "auto",
    height: "auto",
    backgroundColor: severity === "error" ? "red" : "green",
    color: "white",
    padding: "10px 20px 10px 20px",
    borderRadius: "10px",
  };

  if (message === "") return;

  return <div style={notificationStyle}>{message}</div>;
};

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [msgConfig, setMsgConfig] = useState({
    severity: "success",
    message: "",
  });

  const setNotification = (sev, msg) => {
    setMsgConfig({ severity: sev, message: msg });
    setTimeout(() => {
      setMsgConfig({ ...msgConfig });
    }, 2000);
  };

  return (
    <NotificationContext.Provider value={setNotification}>
      <Notification message={msgConfig.message} severity={msgConfig.severity} />
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
