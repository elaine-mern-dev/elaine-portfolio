import Button from "../shared/ui/Button"
import { IoMdCloudDownload } from "react-icons/io";

const AboutMeCTA = () => {
    return (
      <div className="flex mt-4">
        <Button
          text={"Contact Me"}
          className="mr-4 bg-orange-500 text-white hover:bg-orange-600 transition duration-300  <IoMdCloudDownload />ease-in-out"
        />
        <button className="border border-orange-500 rounded-full py-3 px-4 flex items-center gap-2">
          Download my resume{" "}
          <span>
            <IoMdCloudDownload />
          </span>
        </button>
      </div>
    );
}

export default AboutMeCTA