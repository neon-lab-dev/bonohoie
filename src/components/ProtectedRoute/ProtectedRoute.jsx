import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useCurrentUser, setRedirectPath } from "../../redux/Features/Auth/authSlice";
import { setModalType, setOpenModal } from "../../redux/Features/Modal/ModalSlice";

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const user = useSelector(useCurrentUser);
  const location = useLocation();

  if (!user) {
    dispatch(setRedirectPath(location.pathname));
    dispatch(setModalType("login"));
    dispatch(setOpenModal(true));
    
    return null;
  }

  return children;
};

export default ProtectedRoute;
