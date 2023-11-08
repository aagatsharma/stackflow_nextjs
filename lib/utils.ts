import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const timeDifference = now.getTime() - createdAt.getTime();
  const secondsDifference = Math.floor(timeDifference / 1000);
  const minutesDifference = Math.floor(secondsDifference / 60);
  const hoursDifference = Math.floor(minutesDifference / 60);
  const daysDifference = Math.floor(hoursDifference / 24);
  const monthsDifference = Math.floor(daysDifference / 30);
  const yearsDifference = Math.floor(monthsDifference / 12);

  if (yearsDifference >= 1) {
    return (
      yearsDifference + (yearsDifference === 1 ? " year ago" : " years ago")
    );
  } else if (monthsDifference >= 1) {
    return (
      monthsDifference + (monthsDifference === 1 ? " month ago" : " months ago")
    );
  } else if (daysDifference >= 1) {
    return daysDifference + (daysDifference === 1 ? " day ago" : " days ago");
  } else if (hoursDifference >= 1) {
    return (
      hoursDifference + (hoursDifference === 1 ? " hours ago" : " hours ago")
    );
  } else if (minutesDifference >= 1) {
    return (
      minutesDifference +
      (minutesDifference === 1 ? " minute ago" : " minutes ago")
    );
  } else {
    return (
      secondsDifference +
      (secondsDifference === 1 ? " second ago" : " seconds ago")
    );
  }
};

// utils.js
export function formatNumber(number: number): string {
  const suffixes = ["", "K", "M", "B", "T"];

  let magnitude = 0;
  while (Math.abs(number) >= 1000 && magnitude < suffixes.length - 1) {
    number /= 1000;
    magnitude++;
  }

  const formattedNumber = Number.isInteger(number)
    ? number.toString()
    : number.toFixed(2);

  return `${formattedNumber} ${suffixes[magnitude]}`;
}
