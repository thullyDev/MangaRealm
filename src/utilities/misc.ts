export const trans1000 = "transition duration-1000 ease-in-out"
export const trans500 = "transition duration-500 ease-in-out"
export const truncate = (input: string, length: number) => {
   if (input.length > length) {
      return input.substring(0, length) + '...';
   }
   return input;
};

export const formatKey = (key: string) => key.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
