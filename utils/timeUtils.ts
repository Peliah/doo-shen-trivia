/**
 * Formats seconds into MM:SS format
 * @param seconds - Number of seconds to format
 * @returns Formatted time string (e.g., "1:30", "0:05")
 */
export function formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Formats milliseconds into MM:SS format
 * @param milliseconds - Number of milliseconds to format
 * @returns Formatted time string (e.g., "1:30", "0:05")
 */
export function formatTimeFromMs(milliseconds: number): string {
    const seconds = Math.floor(milliseconds / 1000);
    return formatTime(seconds);
}

/**
 * Formats seconds into a more readable format
 * @param seconds - Number of seconds to format
 * @returns Formatted time string (e.g., "1m 30s", "45s")
 */
export function formatTimeReadable(seconds: number): string {
    if (seconds < 60) {
        return `${seconds}s`;
    }

    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    if (secs === 0) {
        return `${mins}m`;
    }

    return `${mins}m ${secs}s`;
}
