from flask import Flask, request, jsonify
from flask_cors import CORS
from cipher import caesar_cipher

app = Flask(__name__)
CORS(app)

@app.route('/encrypt', methods=['POST'])
def encrypt():
    data = request.get_json()
    message = data.get('message', '')
    shift = int(data.get('shift', 0))
    result = caesar_cipher(message, shift, mode='encrypt')
    return jsonify({'result': result})

@app.route('/decrypt', methods=['POST'])
def decrypt():
    data = request.get_json()
    message = data.get('message', '')
    shift = int(data.get('shift', 0))
    result = caesar_cipher(message, shift, mode='decrypt')
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)