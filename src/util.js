export const currentPageParam = (location) => {
    return location.pathname.split('/')[location.pathname.split('/').length - 1]
}

export const formatDate = (date) => {
    // Create a new Date object with the given date string
    const unformattedDate = new Date(date);

    // Extract the month, day, and year from the date object
    const month = unformattedDate.getMonth() + 1; // getMonth() returns a zero-based index, so add 1 to get the actual month number
    const day = unformattedDate.getDate();
    const year = unformattedDate.getFullYear();

    // Format the date as "mm/dd/yyyy"
    return `${month}/${day}/${year}`;
}