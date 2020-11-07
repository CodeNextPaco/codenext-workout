// Helper function that return the system date.
export function getDate() {
    const currentDate = new Date();
    return currentDate.getMonth() + 1 + "-" + currentDate.getDate() + "-" + currentDate.getFullYear();
}
