import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// compares currentime with createdtime and gives difference in time
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

// convert large numbers to more readable
export const formatNumber = (number: number): string => {
  if (number >= 1000000) {
    // If the number is in millions (1,000,000 or more)
    const millions = (number / 1000000).toFixed(2);
    return `${millions}M`;
  } else if (number >= 1000) {
    // If the number is in thousands (1,000 or more)
    const thousands = (number / 1000).toFixed(2);
    return `${thousands}K`;
  } else {
    // If the number is less than 1,000, simply return the number as is
    return `${number}`;
  }
};
