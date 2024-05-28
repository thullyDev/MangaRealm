import { showCloseEle } from "../../../utilities/misc";

export const OpenSearchBtn = () => {
  return (
    <button
      data-element=".mobile-search"
      data-animate="slide"
      onClick={showCloseEle} 
      type="button" 
      className="search-account-btn h-full "
      >
      <i className="fas fa-search"></i>
    </button> 
  )
}