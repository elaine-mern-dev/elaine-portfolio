import { Nav } from "../shared/layout";

//src/pages/Contact.tsx
const Contact:React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center px-4 max-w-3xl mx-auto"> 
        <Nav />                   
            <h1 className="text-4xl font-bold my-8">Contact Me</h1>
            <p className="text-lg text-gray-700">
               I would love to hear from you! Please reach out to me at:
            </p>
            </div>
                        
    )

}
export default Contact;
