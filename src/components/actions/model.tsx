export interface Message {
  user: string;
  message: string;
}

export interface Chat {
  name: string;
  messages: Message[];
}

export interface User {
  name: string;
}
