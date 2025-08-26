export function somenteNumeros(str: string) {
  return str?.replace(/[^0-9]/g, "")
}