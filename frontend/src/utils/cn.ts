type ClassValue = string | undefined | null | false | { [key: string]: boolean };

export function cn(...inputs: ClassValue[]): string {
  return inputs
    .flat()
    .filter((input): input is Exclude<ClassValue, false | null | undefined> => 
      input !== null && input !== undefined && input !== false
    )
    .map((input) => {
      if (typeof input === 'string') return input;
      if (typeof input === 'object') {
        return Object.entries(input)
          .filter(([_, value]) => Boolean(value))
          .map(([key]) => key)
          .join(' ');
      }
      return '';
    })
    .join(' ')
    .trim();
} 