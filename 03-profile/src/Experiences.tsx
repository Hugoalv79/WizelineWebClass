import Experience from "./Experience";
import Placa from "./Placa";
function Experiences(){
    return (
        <>
            <Placa />
            <h1 className="bg-secondary text-white">WORK</h1>
            <Experience title="Natural Language Processing (NLP)" description="Fine-tuning of an LLM Model to aligned with bussiness needs, used AWS Sage Maker and PyTorch." date="Nov 2023 - Dec 2023"/>
            <Experience title="Artificial Intelligence Research Assistant" description="Academic research, developed web interface for user interaction with LLM using react." date="Aug 2023 - Present"/>
            <h1 className="bg-secondary text-white">PERSONAL PROJECTS</h1>
            <Experience title="Image Face Recognition Platform" description="Full-stack web application from scrath, allowed to register new users and log in using e-mail credentials." date="Jul 2023 - Sep 2023" />
       </>
    );
};

export default Experiences;