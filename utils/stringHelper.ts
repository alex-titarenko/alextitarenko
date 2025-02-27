export class StringHelper {
  private static readonly punctuations: string = '.,:;?';
  private static readonly htmlTagRegex: RegExp = /<.*?>\s*/g;

  public static extractTextFromHtml(html: string): string {
    return (html != null) ? html.replace(this.htmlTagRegex, ' ').trim() : '';
  }

  public static cut(source: string, length: number, addEllipsis: boolean = false): string {
    if (length < 0) {
      throw new Error('Length must be equal or greater than zero.');
    }

    if (!source || length >= source.length) {
      return source;
    }

    let result: string = '';
    if (this.isPunctuation(source[length])) {
      result = source.substring(0, length);
    }
    else {
      let removeIndex: number;

      for (removeIndex = length; removeIndex >= 0; removeIndex--) {
        if (this.isWhiteSpace(source[removeIndex])) {
          break;
        }
      }
      result = this.trimCharEnd(source.substring(0, removeIndex + 1).trim(), ',');
    }

    return (result.length < source.length && addEllipsis) ? result + " ..." : result;
  }

  public static isPunctuation(char: string): boolean {
    return this.punctuations.includes(char[0]);
  }

  public static isWhiteSpace(char: string): boolean {
    return /\s/.test(char);
  }

  public static trimCharStart(string: string, charToRemove: string): string {
    while(string.charAt(0) == charToRemove) {
      string = string.substring(1);
    }

    return string;
  }

  public static trimCharEnd(string: string, charToRemove: string): string {
    while(string.charAt(string.length - 1) == charToRemove) {
      string = string.substring(0, string.length - 1);
    }

    return string;
  }

  public static trimChar(string: string, charToRemove: string): string {
    string = this.trimCharStart(string, charToRemove);
    string = this.trimCharEnd(string, charToRemove);

    return string;
  }
}
