from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import JSONResponse
import openai
import os
import time

app = FastAPI()

# Shared secret key for API authentication - for local testing
#LM_API_KEY = "LMFake123456"
# Uncomment below line when deploying to use GitHub Secrets
LM_API_KEY = os.environ.get("LM_API_KEY")

# Uncomment this block for local testing
# Statically set the OpenAI API Key for testing
#openai_api_key = "add key here for testing"
# Set as an environment variable for local testing
#os.environ['OPENAI_API_KEY'] = openai_api_key

# Access the API key from an environment variable
openai_api_key = os.environ.get("OPENAI_API_KEY")
if not openai_api_key:
    raise ValueError("No OPENAI_API_KEY found in environment variables")

openai.api_key = openai_api_key

# Assistant ID for 'Long Memoire'
ASSISTANT_ID = "asst_f7mrk4xGPGcFWzJEePkJ6KQa"

# Initialize the OpenAI client
client = openai.OpenAI()

def authenticate_api_key(received_key: str):
    if received_key != LM_API_KEY:
        raise HTTPException(status_code=401, detail="Unauthorized")

def interact_with_assistant(prompt):
    # Create a Thread
    thread_response = client.beta.threads.create()
    if not thread_response:
        raise Exception("Failed to create a thread")

    # Add Message to Thread
    message_response = client.beta.threads.messages.create(
        thread_id=thread_response.id,
        role="user",
        content=prompt
    )
    if not message_response:
        raise Exception("Failed to create a message")

    # Create a Run
    run_response = client.beta.threads.runs.create(
        thread_id=thread_response.id,
        assistant_id=ASSISTANT_ID
    )
    if not run_response:
        raise Exception("Failed to create a run")

    # Polling for run completion
    while True:
        run_response = client.beta.threads.runs.retrieve(thread_id=thread_response.id, run_id=run_response.id)
        if run_response.status in ["completed", "failed"]:
            break
        time.sleep(1)

    # Retrieve Messages
    messages_response = client.beta.threads.messages.list(thread_id=thread_response.id)
    if not messages_response.data:
        raise Exception("Failed to retrieve messages or no messages found")

    return messages_response.data

@app.post("/chat")
async def chat(request: Request):
    received_key = request.headers.get("Authorization")
    if not received_key:
        raise HTTPException(status_code=401, detail="API key required")
    
    # Remove 'Bearer ' prefix if present
    received_key = received_key.replace("Bearer ", "")

    # Authenticate the request
    authenticate_api_key(received_key)

    data = await request.json()
    prompt = data.get("prompt")
    if not prompt:
        raise HTTPException(status_code=400, detail="Prompt is required")

    try:
        messages = interact_with_assistant(prompt)
        return {"messages": [{"role": message.role, "content": message.content[0].text.value} for message in messages]}
    except Exception as e:
        return JSONResponse(status_code=500, content={"message": str(e)})

# Run with: uvicorn app:app --reload