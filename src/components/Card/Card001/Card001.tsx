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
  key: number;
}

export default function ({ belief, key}: BeliefProps, )
{
   return (
      <div className="Card001-OuterContainer" key={key}>
         <h3 className="Card001-Heading">{belief.Title}</h3>
         <p className="Card001-Paragraph">{belief.Synthesis}</p>
         <p className="Card001-BiblicalReferences">{belief.BiblicalReferences.join(', ')}</p>
      </div>
   );
};
