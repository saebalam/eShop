import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setError } from "../../../redux/errorSlice";

const ErrorPopup: React.FC = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state: any) => state.error.message);
  console.log("mmm", errorMessage);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setError(""));
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [errorMessage]);

  return (
    <>
      {errorMessage && (
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-black text-white p-2 ">
          <p>{errorMessage}</p>
        </div>
      )}
    </>
  );
};

export default ErrorPopup;
