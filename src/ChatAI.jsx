import React, { useState } from 'react'
import ollama from 'ollama'

function ChatAI(){

  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userMessage, setUserMessage] = useState(''); // To capture the user's input

  // Function to handle input change
  const handleInputChange = (e) => {
    setUserMessage(e.target.value);
  };

  // Function to call the Ollama chat API
  const fetchResponse = async (message) => {
    setLoading(true);
    setError(null);  // Clear any previous errors

    try {
      // Make the API call (you might need to adjust this based on actual API method)
      const res = await ollama.chat({
        model: 'llama3.1',
        messages: [{ role: 'user', content: message }]
      });
      
      // Set the response content from API
      
      setResponse(res.message.content);

    } catch (err) {
      // Handle errors if the API call fails

      setError('Failed to fetch response.');

      console.error(err);

    } finally {
      setLoading(false);  // Set loading to false after the API call
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userMessage.trim()) {
      fetchResponse(userMessage);
    }
  };

  return (
    <div>
      <h1>Chat with Llama</h1>

      {/* Form for user input */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userMessage">Enter your question:</label>
          <input
            id="userMessage"
            type="text"
            value={userMessage}
            onChange={handleInputChange}
            placeholder="Ask something..."
          />
        </div>
        <button type="submit" disabled={loading}>Submit</button>
      </form>

      {/* Show loading state */}
      {loading && <p>Loading...</p>}

      {/* Show error if there's an issue */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Display the response from the API */}
      {response && <p><strong>Response:</strong> {response}</p>}
    </div>
  );

}

export default ChatAI