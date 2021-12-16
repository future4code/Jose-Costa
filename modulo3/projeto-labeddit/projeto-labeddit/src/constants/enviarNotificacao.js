import { notification } from "antd";

export const enviarNotificacao = (type, msg, desc) => {
    notification[type]({
      message: msg,
      description: desc,
    });
  };