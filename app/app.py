#!/data/data/com.termux/files/home/storage/web/env/bin/python3
from flask import Flask, render_template
app = Flask(__name__)
@app.route("/")
def index ():
  return render_template("index.html")
  
if __name__ == "__main__":
  app.run(debug=True,port=8000)