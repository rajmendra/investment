import React, { useContext } from 'react'
import { DarkModeContext } from '../context';
import MarketPlaceCard from '../components/MarketPlaceCard';
import PromptBox from '../components/PromptBox';

const marketPlaceData = [
  {
    id: 1,
    title:"RFP Response Auto-Complete",
    description: "Automate the completion of RFP/DDQ's within the app which offers ye approved draft responses from Loopio and the flexibility to personalize answers with ease, using Large Language Models (LLM). Please note the output of the solution requires thorough human",
    ratingLength: 4
  },
  {
    id: 2,
    title:"Flowriter",
    description: "Flowriter is a generative Al solution, which assists macroeconomic content draft generation and acts as a writing assistant (copilot) to the economists from the iFlow tear (Markets), who publish iFlow Morning Briefings and Short Thoughts and other economic analysis content",
    ratingLength: 3
  },
  {
    id: 3,
    title:"Code Modernization- COBOL to Microservice (C2M)",
    description: "Moderize Code using Al/ML to remediate Mainframe dependency",
    ratingLength: 4
  },
  {
    id: 4,
    title:"Email Classification",
    description: "Email classification service classifies client service emeils into one of cight services cutegories. The solution supports operations tears, treasury teurns, etc. and is being expanded to other LOB service teams. It also encompusses user feedback through the app.",
    ratingLength: 4
  },
  
  {
    id: 5,
    title:"Investor Relations Assistant",
    description: "Investor Relations Assistant enables Investor Relations and leaders to keep pulse of trends and target messaging to",
    ratingLength: 4
  },
  {
    id: 6,
    title:"CEO Copilot",
    description: "CEO Copilot capability enables BNYM Leadership to better engage with executive reports, beginning with key weekly updates across the globe",
    ratingLength: 3
  },
  {
    id: 7,
    title:"Ownership Verification",
    description: "Automate entity extraction, annotation and reconciliation for bank loan ownership verification within Trust and Dependency",
    ratingLength: 4
  },
  {
    id: 8,
    title:"Al Ops - Ground Truth",
    description: "The Ground Truth system is a foundation for artificial intelligence model assessment, tracking, and monitoring. The system is integrated with all relevant data for each project",
    ratingLength: 3
  },
  {
    id: 9,
    title:"Al Ops - ModelOp",
    description: "ModelOp Center ModelOp Center (MOC) is composed of a set of flexible and extensible micro services that enable the consistent Deployment, Monitoring, and Governance of all analytical models, regardless of the model factory from which they were developed",
    ratingLength: 4
  },

]


const MarketPlace = () => {
    const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <div className=" py-0 px-2 md:py-6 md:px-8 relative h-[60vh] overflow-scroll">
        <div className='flex flex-wrap gap-4'>
          {marketPlaceData.map((item) =>(
            <MarketPlaceCard title={item.title} description={item.description} ratingLength={item.ratingLength}  />
          ))}
        
        
        </div>
        
          <div>
        <PromptBox full={true} />

          </div>
    </div>
  )
}

export default MarketPlace