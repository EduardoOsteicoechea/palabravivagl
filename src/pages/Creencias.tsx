import { useState, useEffect } from 'react';
import Card001 from '../components/Card/Card001/Card001';
import "./Creencias.css";

interface Belief {
  Title: string;
  Category: string;
  Subcategory: string;
  Synthesis: string;
  BiblicalReferences: string[];
}

interface DocumentData {
  DocumentTitle: string;
  DocumentCompositionPrinciples: string[];
  BeliefsCategories: string[];
  Beliefs: Belief[];
}

function BeliefsPage001() {
  const [documentData, setDocumentData] = useState<DocumentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getApiResponse = async () => {
      try {
        const response = await fetch('data/creencias/TheHeartOfMyFaith.json', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: DocumentData = await response.json();
        setDocumentData(data);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred.");
        }
        setLoading(false);
        console.error('Fetch Error:', err);
      }
    };

    getApiResponse();
  }, []); // Empty dependency array ensures this runs only once on mount

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  if (!documentData) {
    return <h1>No data loaded.</h1>;
  }

  return (
    <div className='BeliefsPage001-OuterContainer'>
      <h1>{documentData.DocumentTitle}</h1>
      {documentData.Beliefs.map((belief, index) => (
         <Card001 belief={belief} key={index} />
      ))}
    </div>
  );
}

export default BeliefsPage001;