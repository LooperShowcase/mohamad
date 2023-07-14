let key = "sk - cgkrXELI2NvlXuTZPWNyT3BlbkFJtZ7ECqStt8WJKc5daXBY";
let open_ai_response;

let conversation = [
  { role: "user", content: "hi" },
  { role: "assint", content: "hello" },
];
async function conversationUserAdd(question, sentiment) {
  conversation.push({
    role: user,
    content:
      "my happinessout of 10:" + sentiment + "my question is:" + question,
  });
}

async function conversationAssistantAdd(respones) {
  conversation.push({ role: "assistant,content:respone" });
}

async function openai_test() {
  let url = "https://api.openai.com/v1/chat/completions";

  let apikey1 = "sk";
  let apikey2 = "-ARmBYmBgE69LcWHYknguT3";
  let apikey3 = "BlbkFJIiaAPCEWCdgVyodtMBuc";  
  let apikey = apikey1 + apikey2 +apikey3;
  let date = { model: "gpt-3.5-turbo", messages: conversation };
}
try {
  const respone = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/qson",
      Authorization: `Bearer ${apikey}`,
    },
    body: JSONson.stringify(date),
  });
} catch (error) {
  console.log("there is an error:", error);
}
if (response.ok) {
  const responseData = await response.json();
  const message = responseData.choices[0].message.content;
  conversationAssistantAdd(message);
  const utterance = new SpeechSynthesisUtterance(message);
  speechSynthesis.speak(utterance);
  return message;
}
