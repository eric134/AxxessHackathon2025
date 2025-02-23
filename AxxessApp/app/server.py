from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
from dotenv import load_dotenv
import os


load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for your React app

# Configure the Gemini API
GEMINI_API_KEY =  os.getenv('API_KEY')  # Replace with your actual Gemini API key
genai.configure(api_key=GEMINI_API_KEY)

# Initialize the Gemini model
model = genai.GenerativeModel('gemini-pro')

# Introductory message and prompt
INTRO_MESSAGE = "Hello! I'm Healthcare Harry 🩺\n\nI'm here to provide friendly, clear health advice in bullet points.\n\nYou can ask me about:\n• Symptoms\n• Medications\n• Healthy habits\n• Medical conditions\n• General health questions\n\nI'll do my best to help!"
PROMPT = ("Your name is Healthcare Harry. Give short, clear, and friendly answers about health in bullet points. "
          "If the question is not about health, reply with: "
          "'I'm here to help with your health questions. Please ask me about that.'"
          "Use '•' to represent bullet points."
          "If the user asks for a personalized health care pla, provide then a formatted list with a clear header."
          "If the user's prompt includes ANY word related to healthcare, answer it.")

def chatbot_response(user_message):
    try:
        # Generate a response using the Gemini model
        response = model.generate_content(PROMPT + user_message)
        return response.text
    except Exception as e:
        return f"Sorry, I encountered an error: {str(e)}"

@app.route('/api/intro', methods=['GET'])
def get_intro():
    return jsonify({'response': INTRO_MESSAGE})

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data.get('message', '')
    # Get the chatbot's response
    response_text = chatbot_response(user_message)
    return jsonify({'response': response_text})

if __name__ == '__main__':
    app.run(port=5000, debug=True)