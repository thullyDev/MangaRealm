import { showCloseEle } from "../../../utilities/misc";

export const MenuBtn = () => {
  return (
    <button onClick={showCloseEle} data-element="nav.menu-nav" data-animate="slide" className="menu-button">
      <i className="fas fa-bars text-xl"></i>
    </button>
  );
};
