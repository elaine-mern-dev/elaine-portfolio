//src/components/AboutMeCTA.tsx
import Button from "../shared/ui/Button"
import { IoMdCloudDownload } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const AboutMeCTA = () => {
    const navigate = useNavigate();
    const handleResumeDownload = () => {
      window.open(
        "https://github.com/elaine-mern-dev/elaine-mern-dev/blob/main/resume_Elaine_Muhombe.pdf",
        "_blank"
      );
    };
    return (
      <div className="flex mt-4">
        <Button
          text={"Contact Me"}
          className="mr-4 bg-orange-500 text-white hover:bg-orange-600 transition duration-300"
          onClick={() => navigate("/contacts")}
        />

        <button
          className="border border-orange-500 rounded-full py-3 px-4 flex items-center gap-2"
          onClick={handleResumeDownload}
        >
          Download my resume{" "}
          <span>
            <IoMdCloudDownload />
          </span>
        </button>
      </div>
    );
}

export default AboutMeCTA