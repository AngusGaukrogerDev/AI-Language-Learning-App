import { useState, ChangeEvent } from 'react';
import ClerkUserHeader from "@/components/clerkUserHeader";

const AITest: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [response, setResponse] = useState<string>('');

  const handlePromptChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  const handleFetchResponse = async () => {
    try {
      const res = await fetch(`/api/openAIRequests?prompt=${encodeURIComponent(prompt)}`);
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        setResponse(data.completion.message.content);
      } else {
        console.error('Error:', data.error);
        setResponse('Error fetching response.');
      }
    } catch (error) {
      console.error('Error fetching response:', error);
      setResponse('Error fetching response.');
    }
  };

  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-start sm:items-center gap-5 p-4 md:p-8'>
      <ClerkUserHeader />
      <h1 className='text-3xl font-bold mb-4'>OpenAI Project Template!</h1>
      <div className='w-full md:w-3/4 lg:w-1/2 flex flex-col gap-4'>
        <div className='w-full flex flex-col items-start sm:flex-row sm:justify-around sm:items-center gap-2'>
          <label className=''>
            Enter Prompt:
          </label>
          <input
            className='w-full md:w-64 border p-2 rounded'
            type="text"
            value={prompt}
            onChange={handlePromptChange}
          />
          <button
            className='bg-pitahaya-yellow text-white px-4 py-2 rounded hover:bg-pitahaya-yellow '
            onClick={handleFetchResponse}
          >
            Fetch Response
          </button>
        </div>
        
        <div className='col-span-2'>
          <h2 className='text-lg font-bold mb-2'>Response:</h2>
          <textarea
            className='w-full h-48 md:h-64 p-2 border rounded overflow-y-auto resize-none'
            value={response}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default AITest;
