import { useDispatch } from "react-redux"
import { closeAndShowEditWindows } from "../slices/dataControl";
import { IoCloseCircleSharp } from "react-icons/io5";
import EditNameAndPhone from "./editUserData/EditNameAndPhone";
import ChangePass from "./editUserData/ChangePass";
import { useEffect } from "react";




export default function EditUserDataWindow() {
    const dispatch = useDispatch();


useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        
        document.body.style.overflow = 'hidden';
        
        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, []);


    const handleClose = ()=> {
        dispatch(closeAndShowEditWindows(false))
    }
  return (
    <section onClick={handleClose} className="fixed top-0 left-0 w-full h-lvh bg-black/50 flex justify-center items-center z-50">
        <div onClick={(e) => e.stopPropagation()} className="bg-stone-200 w-[800px] min-h-[400px] max-w-[calc(100%-60px)] rounded-2xl p-4 relative">
        <IoCloseCircleSharp className="text-2xl absolute top-1 right-1 text-red-600 cursor-pointer" onClick={handleClose} />

        <h2 className="text-2xl font-bold">Edit Your Profile</h2>

        <EditNameAndPhone />

        <h2 className="text-xl font-semibold">Change your password</h2>

        <ChangePass />

        </div>
    </section>
  )
}
