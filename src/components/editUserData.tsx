import { CiLock, CiUser } from "react-icons/ci";
import { useState } from "react";
import { UserTypes } from "../pages/signUp/signUp";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineEmail } from "react-icons/md";
import { loginR } from "../slices/logInAnSignUp";
import { closeAndShowEditWindows } from "../slices/dataControl";

export default function EditUserData() {
  const dispatch = useDispatch();
  const logInUser = useSelector((state: any) => state.userData.loginUser);

  const users: UserTypes[] = useSelector(
    (state: any) => state.userData.arrOfUsers
  );
  const [user, setUser] = useState<UserTypes>({
    id: logInUser.id,
    name: logInUser.name,
    email: logInUser.email,
    password: logInUser.password,
    phone: logInUser.phone,
    confirmPassword: logInUser.password,
    books: logInUser.books,
  });
  const [fUserError, setFUserError] = useState<number>();
  const [error, setError] = useState<boolean>(false);
  function isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  function handleEdit() {
    const filterdUser: UserTypes[] =
      users.filter(
        (storedUser: UserTypes) => storedUser.email === user.email
      ) || [];

    filterdUser.length !== 0 ? setError(true) : null;
    setFUserError(filterdUser.length);

    if (
      user.name.length >= 3 &&
      user.password.length >= 6 &&
      user.confirmPassword === user.password &&
      isValidEmail(user.email)
    ) {
      setError(false);

      const userWithOutLoginUser = users.filter(
        (userFromUsers: UserTypes) => userFromUsers.id !== user.id
      );
      userWithOutLoginUser.push(user);

      localStorage.setItem(
        "garduationProjectUsers",
        JSON.stringify(userWithOutLoginUser)
      );

      dispatch(loginR(user));

      dispatch(closeAndShowEditWindows(false))
    } else {
      setError(true);
    }
  }
  return (
    <form onSubmit={(e) => e.preventDefault()} className="contentBox mt-10">
      <label htmlFor="name">Name</label>
      <div className="input">
        <CiUser className="icon" />
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          required
          value={user.name}
          onChange={(e: any) => setUser({ ...user, name: e.target.value })}
        />
      </div>
      {error && user.name.length < 3 && (
        <p className="ERROR">{user.name} is not a name</p>
      )}

      <label htmlFor="name">Phone</label>
      <div className="input">
        <CiUser className="icon" />
        <input
          type="text"
          id="phone"
          placeholder="Enter your phone"
          required
          value={user.phone}
          onChange={(e: any) => setUser({ ...user, phone: e.target.value })}
        />
      </div>
      {error && user.phone.length < 11 && (
        <p className="ERROR">Phone number must be more than 10 letters</p>
      )}

      <label htmlFor="email">Email</label>
      <div className="input">
        <MdOutlineEmail className="icon" />
        <input type="email" id="email" readOnly value={user.email} />
      </div>
      {<p className="ERROR">you can't change your Email</p>}
      {error && fUserError !== 0 && (
        <p className="ERROR">This email has been used before</p>
      )}

      <label htmlFor="newPassword">New Password</label>
      <div className="input">
        <CiLock className="icon" />
        <input
          type="password"
          id="newPassword"
          placeholder="Enter the new password"
          required
          value={user.password}
          onChange={(e: any) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      {error && user.password.length < 6 && (
        <p className="ERROR">The new password must be more than 6 letters</p>
      )}

      <label htmlFor="confirmPassword">Confirm password</label>
      <div className="input">
        <CiLock className="icon" />
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm password"
          required
          value={user.confirmPassword}
          onChange={(e: any) =>
            setUser({ ...user, confirmPassword: e.target.value })
          }
        />
      </div>
      {error && user.confirmPassword !== user.password && (
        <p className="ERROR">
          The confirm password must be like than the password
        </p>
      )}

      <div className="editButton">
        <button
          onClick={() => {
            handleEdit();
          }}
        >
          Edit
        </button>
      </div>
    </form>
  );
}
