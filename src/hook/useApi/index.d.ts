import { AnyObject } from "constants/type";

export interface IApiProps {
  url: string;
  method?: "get" | "post" | "put" | "patch" | "delete";
  params?: AnyObject | string | undefined;
  data?: string;
}
export interface IUseApiProps {
  url: string;
  method: "get" | "post" | "put" | "patch" | "delete";
  loadInitialState?: boolean;
  params?: AnyObject | string | undefined;
}
