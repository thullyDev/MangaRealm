import $ from "jquery";

export const trans1000 = "transition duration-1000 ease-in-out"
export const trans500 = "transition duration-500 ease-in-out"
export const truncate = (input: string, length: number) => {
   if (input.length > length) {
      return input.substring(0, length) + '...';
   }
   return input;
};

export const formatKey = (key: string) => key.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());

export const showCloseEle = (event: React.MouseEvent<HTMLButtonElement>) => {
   const eventEle = $(event.currentTarget);
   const element = eventEle.data("element");
   const animate = eventEle.data("animate");
   const showEle = $(element);
   const open = showEle.data("open");

   if (animate == "fade") {
      !open
         ? showEle.fadeIn().data("open", true)
         : showEle.fadeOut().data("open", false);
      return;
   }
   !open
      ? showEle.slideDown().data("open", true)
      : showEle.slideUp().data("open", false);
}
