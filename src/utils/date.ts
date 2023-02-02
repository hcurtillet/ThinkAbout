export const dateToString = (date: Date): string => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${hours}:${minutes} ${day}.${month}.${year}`;
};

export const formatDate = (date: string): string => {
    const dateObj = new Date(date);
    return dateToString(dateObj);
};
