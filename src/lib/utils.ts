import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetcher = async <T>(url: string, init?: RequestInit) => {
  const res = await fetch(url, { ...init, credentials: 'include' });

  if (!res.ok) {
    const body = await res.json();

    throw new Error(body.message);
  }
  return res.json() as T;
};

export const p = <T>(promise: Promise<T>): Promise<[undefined, T] | [Error]> =>
  promise
    .then((data) => [undefined, data] as [undefined, T])
    .catch((error) => [error]);
