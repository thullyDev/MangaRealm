export const trans1000 = "transition duration-1000 ease-in-out"
export const truncate = (input: string, length: number) => {
   if (input.length > length) {
      return input.substring(0, length) + '...';
   }
   return input;
};