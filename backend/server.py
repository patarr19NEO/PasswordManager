from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/users", methods=["GET", "POST"])
def users():
    try:
        data = request.get_json()
        print(f"Got data: {data}")
        return jsonify({"message": "Successfully fetched data!", "gotten_data": data}), 200
    except Exception as e:
        return jsonify({"error": f"Error: {e}"}), 500

if __name__ == "__main__":
    app.run(debug=True)