import ReferenceViewer001 from "../../ReferenceViewer/ReferenceViewer001/ReferenceViewer001";
import "./Card001.css";

interface Belief
{
   Title: string;
   Category: string;
   Subcategory: string;
   Synthesis: string;
   BiblicalReferences: string[];
}

interface BeliefProps {
  belief: Belief;

}

export default function ({ belief}: BeliefProps, )
{
   return (
      <div className="Card001-OuterContainer">
         <h3 className="Card001-Heading">{belief.Title}</h3>
         <p className="Card001-Paragraph">{belief.Synthesis}</p>
         <ReferenceViewer001 reference={{covenant:"newTestament",book:"1Timothy"}}/>
         {/* <p className="Card001-BiblicalReferences">{belief.BiblicalReferences.join(', ')}</p> */}
      </div>
   );
};
