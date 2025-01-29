export function getCurrentTimeInChile(): Date {
    const now = new Date();

    const offsetChile = -3;  // Chile está UTC -3 (hora estándar)
    now.setHours(now.getUTCHours() + offsetChile);

    return now;
}

export function formatTimeForChile(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "America/Santiago", // Zona horaria de Chile
    };

    let formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);
    formattedTime += " CLT"; // CLT (Chile Standard Time)
    return formattedTime;
}