export const trim = (str: string) => {
  return str.trim().toLowerCase().replaceAll(" ", "-")
}
