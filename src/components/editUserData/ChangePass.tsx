import { useState } from "react";
import { InputField } from "../common/InputField";
import { CiLock } from "react-icons/ci";
import { MdOutlineErrorOutline } from "react-icons/md";

export default function ChangePass() {
  const [error, setError] = useState<boolean>(false);
  const [errorCurrintPass, setErrorCurrintPass] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<{
    currintPass: string;
    newPass: string;
    confirmNewPass: string;
  }>({
    currintPass: "",
    newPass: "",
    confirmNewPass: "",
  });

  const handleChangePass = async () => {
    if (data.newPass.length < 6 || data.confirmNewPass !== data.newPass) {
      setError(true);
      return;
    }
    try {
      setLoading(true);

      const res = await fetch(
        "https://rebook-backend-0.vercel.app/users/change-user-password",
        {
          method: "PUT",
          body: JSON.stringify({
            oldPass: data.currintPass,
            newPass: data.newPass,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token") || "null"
            )}`,
          },
        }
      );

      if (!res.ok) {
        setErrorCurrintPass(true);
        return;
      }
      setErrorCurrintPass(false);
      location.reload()
    } catch (err) {
      setErrorCurrintPass(true);

      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className="" onSubmit={(e) => e.preventDefault()}>
      {errorCurrintPass && (
        <div className="flex justify-start items-center w-full mt-2 p-2 gap-2 border border-red-600 bg-red-100 text-red-600 rounded-xl">
          <MdOutlineErrorOutline />
          <span> The currint password is wrong</span>
        </div>
      )}

      <div className="flex w-full flex-col items-start justify-center gap-4">
        <div className="w-full flex flex-col mt-2">
          <InputField
            title="Currint Password"
            icon={<CiLock className="icon" />}
            type="password"
            placeholder="Enter your Currint Password"
            value={data.currintPass}
            onChange={(e: any) =>
              setData({ ...data, currintPass: e.target.value })
            }
            errorMessage={<></>}
          />

          <InputField
            title="New Password"
            icon={<CiLock className="icon" />}
            type="password"
            placeholder="New Password"
            value={data.newPass}
            onChange={(e: any) => setData({ ...data, newPass: e.target.value })}
            errorMessage={
              error &&
              data.newPass.length < 6 && (
                <p className="text-red-500 -mt-3">
                  The new password must be more than 5 letters
                </p>
              )
            }
          />

          <InputField
            title="Confirm New Password"
            icon={<CiLock className="icon" />}
            type="password"
            placeholder="Confirm New Password"
            value={data.confirmNewPass}
            onChange={(e: any) =>
              setData({ ...data, confirmNewPass: e.target.value })
            }
            errorMessage={
              error &&
              data.confirmNewPass !== data.newPass && (
                <p className="text-red-500 -mt-3">
                  The confirm new password must be equal the new password
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
            onClick={handleChangePass}
          >
            {loading ? <span>Changing...</span> : <span>Change</span>}
          </button>
        </div>
      </div>
    </form>
  );
}
