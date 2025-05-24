//src/pages/Contact.tsx
import { Nav } from "../shared/layout";
import SocialMedia from "../shared/social-media-icons/SocialMedia";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 max-w-3xl mx-auto">
      <Nav />
      <h1 className="text-4xl font-bold my-8">Contact Me</h1>
      <p className="text-lg text-gray-700 mb-4">
        I would love to hear from you!
      </p>

      <div className="text-lg text-gray-800 space-y-2 mb-8">
       <SocialMedia />
      </div>
    </div>
  );
};

export default Contact;
