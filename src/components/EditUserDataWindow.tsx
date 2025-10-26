import { useDispatch } from "react-redux";
import { closeAndShowEditWindows } from "../slices/dataControl";
import { IoCloseCircleSharp } from "react-icons/io5";
import EditNameAndPhone from "./editUserData/EditNameAndPhone";
import ChangePass from "./editUserData/ChangePass";
import { useEffect } from "react";

export default function EditUserDataWindow() {
  const dispatch = useDispatch();

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalPosition = document.body.style.position;
    const originalTop = document.body.style.top;
    const originalWidth = document.body.style.width;
    const scrollY = window.scrollY;

    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.overflow = 'hidden';
    document.body.style.width = '100%';

    return () => {
      document.body.style.position = originalPosition;
      document.body.style.top = originalTop;
      document.body.style.overflow = originalOverflow;
      document.body.style.width = originalWidth;
      
      window.scrollTo(0, scrollY);
    };
  }, []);

  const handleClose = () => {
    dispatch(closeAndShowEditWindows(false));
  };
  return (
    <section
      onClick={handleClose}
      className="fixed top-0 left-0 w-full h-svh bg-black/50 flex justify-center items-center z-50 overflow-hidden"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-stone-200 w-[800px] min-h-[400px] max-h-[600px] max-w-[calc(100%-60px)] rounded-2xl p-4 relative overflow-y-auto modal-scrollbar touch-pan-y overscroll-contain"
      >
        <IoCloseCircleSharp
          className="text-2xl sticky -top-2 float-right right-2 text-red-600 cursor-pointer"
          onClick={handleClose}
        />

        <h2 className="text-2xl font-bold">Edit Your Profile</h2>

        <EditNameAndPhone />

        <h2 className="text-xl font-semibold">Change your password</h2>

        <ChangePass />
      </div>
    </section>
  );
}
