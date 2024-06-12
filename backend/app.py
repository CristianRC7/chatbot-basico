import random
from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import codecs

app = Flask(__name__)
CORS(app)

with codecs.open('data.json', 'r', 'utf-8') as file:
    data = json.load(file)

def find_response(user_input):
    for item in data:
        if any(pattern in user_input.lower() for pattern in item['patterns']):
            if item['tag'] == 'broma':
                return random.choice(item['answer'])
            return item['answer']
    return "Lo siento, no entiendo tu mensaje."

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('message')
    response = find_response(user_input)
    return jsonify({"response": response})

if __name__ == '__main__':
    app.run(debug=True)
