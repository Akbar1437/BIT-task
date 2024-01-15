export type CustomerType = {
  id: string;
  name: string;
  role: "user" | "admin";
  subscription: string;
  token: number;
  email: string;
};

export type HistoryType = {
  id: string;
  type: "plus" | "minus";
  total: string;
  date: string;
};
