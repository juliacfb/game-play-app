const pad = (value: number) => String(value).padStart(2, '0');

/** "2026-06-18T21:00:00" → "18/06 às 21:00h" */
export function formatAppointmentDate(iso: string): string {
  const date = new Date(iso);
  return `${pad(date.getDate())}/${pad(date.getMonth() + 1)} às ${pad(
    date.getHours(),
  )}:${pad(date.getMinutes())}h`;
}
