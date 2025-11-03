import { METHODS } from "http";
import { User } from "../types/user";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.mwrecipewebsite.csproject.org"
    : "http://localhost:3001";

async function checkResponse(res: Response): Promise<any> {
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const text = await res.text();
  return text ? JSON.parse(text) : null;
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

export async function createUser({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) {
  return request<User>(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });
}

export async function loginUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return request<User>(`${baseUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
}
