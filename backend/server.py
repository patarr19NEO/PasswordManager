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
    if request.method == "GET":
        try:
            data = load_data_from_db()
            return jsonify({"message": "Successfully fetched data!", "data": data}), 200
        except Exception as e:
            return jsonify({"error": f"Error: {e}"}), 500
    
    elif request.method == "POST":
        try:
            # Force JSON parsing with explicit force parameter
            gotten_data = request.get_json(force=True)
            print(f"Got data: {gotten_data}")
            
            if not gotten_data or "email" not in gotten_data:
                return jsonify({"error": "Email is required"}), 400

            data = load_data_from_db()
            
            # Check if users key exists, if not create it
            if "users" not in data:
                data["users"] = {}
            
            # Check if user already exists
            if gotten_data["email"] in data["users"]:
                return jsonify({"message": "User already exists! Try to change your mail", "code": "user exists"}), 200

            # Add new user
            data["users"][gotten_data["email"]] = {
                "email": gotten_data["email"],
                "password": gotten_data["password"]  # Store password if provided
            }
            
            save_data_to_db(data)
            return jsonify({"message": "User created successfully!", "code": "user created"}), 201
            
        except Exception as e:
            return jsonify({"error": f"Error: {e}"}), 500

if __name__ == "__main__":
    app.run(debug=True)