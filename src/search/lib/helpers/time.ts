export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function formatTime(ms: number) {
  if (ms < 1000) {
    return `${ms.toFixed(1)}ms`
  }
  const seconds = ms / 1000
  if (seconds > 60) {
    return `${Math.round(seconds / 60)}m${Math.round(seconds % 60)}s`
  }
  return `${seconds.toFixed(1)}s`
}

// Return '20220719012012' if the current date is
// 2022-07-19T01:20:12.172Z. Note how the 6th month (July) becomes
// '07'. All numbers become 2 character zero-padding strings individually.
export function utcTimestamp() {
  const d = new Date()

  return (
    [
      `${d.getUTCFullYear()}`,
      d.getUTCMonth() + 1,
      d.getUTCDate(),
      d.getUTCHours(),
      d.getUTCMinutes(),
      d.getUTCSeconds(),
    ]
      // If it's a number make it a zero-padding 2 character string
      .map((x) => (typeof x === 'number' ? ('0' + x).slice(-2) : x))
      .join('')
  )
}

/**
 * Converts a given number of seconds into a formatted time string "HH:mm:ss".
 *
 * @param {number} seconds - The total number of seconds to format.
 * @returns {string} A string representing the time in "hours:minutes:seconds" format.
 *
 * @example
 * // returns "01:30:45"
 * formatSeconds(5445);
 */
export function formatSecondsToHHMMSS(seconds: number): string {
  return new Date(seconds * 1000).toISOString().substr(11, 8)
}

export function readableTimeMinAndSec(ms: number): string {
  if (ms < 1000) {
    return `${ms.toFixed(1)}ms`
  }
  const seconds = ms / 1000
  if (seconds > 60) {
    return `${Math.round(seconds / 60)}m${Math.round(seconds % 60)}s`
  }
  return `${seconds.toFixed(1)}s`
}
