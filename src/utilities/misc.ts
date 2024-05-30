import type { number } from "astro/zod";
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

export function getInputs(selector: string) {
  const selectInputs = $(selector)
  const data: Record<string, string | number | string[]> = {}

  selectInputs.each((_, ele) => {
    const thisEle = $(ele)
    const name = thisEle.data("key")
    const value = thisEle.val()

    if (!value) return 

    data[name] = value
  })

  return data
}

const _Alert = (message: string | number) => {
   const alertbox = document.querySelector(".alertbox")
   const msgEle = document.querySelector(".alertbox .msg")

   if (!msgEle || !alertbox)
      return 
   
   // @ts-ignore
   msgEle.textContent = message
   // @ts-ignore
   alertbox.style.display = "flex"
   const fiveSecs = 5000
   setTimeout(() => {
      msgEle.textContent = ""
      // @ts-ignore
      alertbox.style.display = "none"
   }, fiveSecs)
}