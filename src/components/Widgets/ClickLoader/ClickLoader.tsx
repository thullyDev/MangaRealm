import { showCloseEle } from "../../../utilities/misc"
import { Loader } from "../Loader/Loader"

export const ClickLoader = ({ buttonId, loaderId }: { buttonId: string, loaderId: string }) => {
  return (
      <span data-open="false"  className={ `${loaderId} hidden w-full h-full absolute top-0` }>
        <span className="w-full h-full flex justify-center items-center bg-black bg-opacity-60 rounded-full">
           <Loader />
        </span>
        <span className={ `${buttonId} hidden` } onClick={showCloseEle} data-element={`.${loaderId}`} data-animate="fade" ></span>
      </span>
  )
} 