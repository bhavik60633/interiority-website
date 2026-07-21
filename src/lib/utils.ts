// Minimal class-name joiner (stand-in for shadcn's cn / clsx+tailwind-merge).
export function cn(...inputs: Array<string | number | false | null | undefined>) {
  return inputs.filter(Boolean).join(' ')
}
