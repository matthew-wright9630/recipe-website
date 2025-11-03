import { User } from "../types/user";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.mwrecipewebsite.csproject.org"
    : "http://localhost:3001";

async function checkResponse(res: Response): Promise<any> {
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return res.json();
}

async function request<T = any>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(url, options);
  return checkResponse(res);
}

export async function getUsers(): Promise<User[]> {
  console.log("Test", baseUrl);
  return request<User[]>(`${baseUrl}/users`, { method: "GET" });
}
