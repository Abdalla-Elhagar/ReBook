import { useState } from "react";
import { InputField } from "../common/InputField";
import { CiUser } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";
import { useSelector } from "react-redux";
import { UserTypes } from "../../types/dataTypes";

export default function EditNameAndPhone() {
  const loginUser: UserTypes = useSelector(
    (state: any) => state.userData.logedInUser
  );
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<{ name: string; phone: string }>({
    name: loginUser.name,
    phone: loginUser.phone,
  });

  const handleEditUserData = async () => {

    if(data.name.length < 3 || data.phone.length < 11) {
      setError(true)
      return
    }
    try{
      setLoading(true)

      const res = await fetch("https://rebook-backend-0.vercel.app/users/change-user-data" , {
        method:"PUT",
        body:JSON.stringify({ name: data.name, phone: data.phone }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token") || "null")}`,
        },
      })

      if(!res.ok) {
        console.log("couldent edit user data")
        return
      }

      return await res.json()

    }
    catch(err) {
      console.log(err)
    }
    finally{
      setLoading(false)
      location.reload()
    }
  }
  return (
    <form className="" onSubmit={(e) => e.preventDefault()}>
      <div className="flex w-full flex-col items-start justify-center py-5 gap-4">
        <div className="w-full flex flex-col md:flex-row md:gap-5 mt-2">
          <InputField
            title="Name"
            icon={<CiUser className="icon" />}
            type="text"
            placeholder="Enter your name"
            value={data.name}
            onChange={(e: any) => setData({ ...data, name: e.target.value })}
            errorMessage={
              error &&
              data.name.length < 3 && (
                <p className="text-red-600 -mt-3">Name must be more than 2 letters</p>
              )
            }
          />

          <InputField
            title="Phone"
            icon={<MdOutlineLocalPhone className="icon" />}
            type="number"
            placeholder="Enter your phone"
            value={data.phone}
            onChange={(e: any) => setData({ ...data, phone: e.target.value })}
            errorMessage={
              error &&
              data.phone.length < 11 && (
                <p className="text-red-600 -mt-3">
                  Phone number must be more than 10 letters
                </p>
              )
            }
          />
        </div>

        <div className="w-full text-xl">
          <button
          className="w-full relative left-1/2 -translate-x-1/2 md:w-[150px] text-white bg-[#0b7db7!important] py-2 rounded-lg disabled:bg-[#6e9bb1!important] "
          disabled={loading}
          aria-label="edit data"
          onClick={handleEditUserData}
        >
          {loading ? <span>Uploading...</span> : <span>Edit</span>}
        </button>
        </div>

        
      </div>
    </form>
  );
}
