from flask import Flask, jsonify, request
from flask_cors import CORS
import os, json

app = Flask(__name__)
CORS(app)

db = "db.json"

def save_data_to_db(data):
    with open(db, "w") as file:
        json.dump(data, file, indent=4)

def load_data_from_db():
    if os.path.exists(db):
        with open(db, "r") as file:
            return json.load(file)
    return {"users": {}}

@app.route("/api/users", methods=["GET", "POST"])
def users():
    try:
        gotten_data = request.get_json()
        print(f"Got data: {gotten_data}")

        data = load_data_from_db()
        if data["users"]["email"]:
            return jsonify({"message": "Successfully fetched data!", "code": "user exists", "gotten_data": data}), 200

        data["users"]["email"] = {gotten_data["email"]}
        
    except Exception as e:
        return jsonify({"error": f"Error: {e}"}), 500

if __name__ == "__main__":
    app.run(debug=True)