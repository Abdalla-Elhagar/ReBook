import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router";





export default function GoBack() {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/")
    }
    
  return (
    <button aria-label="Go back button" onClick={handleClick} className="bg-[#ccc!important] size-12 rounded-full text-black fixed top-20 right-6 flex justify-center items-center z-[9999]">
        <FaChevronRight className="text-xl" />
    </button>
  )
}
