// script.js

document.getElementById('sendButton').addEventListener('click', async () => {
  const userInput = document.getElementById('userInput').value;
  const responseElement = document.getElementById('response');

  // APIキーをここに貼り付けます（セキュリティのため、実際のプロジェクトではサーバーサイドで管理するのが推奨されます）
  const apiKey = 'xxxxxxxxxx';

  const apiEndpoint = 'https://api.openai.com/v1/chat/completions';
  const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
  };

  const data = {
      model: 'gpt-4',
      messages: [{ role: 'user', content: userInput }],
  };

  try {
      const response = await fetch(apiEndpoint, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(data)
      });

      const result = await response.json();
      responseElement.textContent = result.choices[0].message.content;
  } catch (error) {
      console.error('Error:', error);
      responseElement.textContent = 'An error occurred. Please try again.';
  }
});
