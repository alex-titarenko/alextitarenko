export default class Converter {
  public static formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
  }
}
