import os
from flask import Flask, jsonify, session, redirect, url_for, render_template, request
from flask_cors import CORS, cross_origin
from werkzeug.utils import secure_filename
from services.search import search_images
import numpy as np

UPLOAD_FOLDER = '/path/to/the/uploads'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app = Flask(__name__)
CORS(app, supports_credentials=True)


class Result:
    def __init__(self):
        self.data = []
        self.total = 0
        self.page_size=0
        self.page_number=0


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/upload', methods=["POST"])
@cross_origin()
def up_pic():
    file = request.files['file']
    page_size = request.form.get('pageSize', default=1)
    page_number = request.form.get('pageNumber', default=20)
    base_path = os.path.dirname(__file__)  # 当前文件所在路径
    upload_path = os.path.join(base_path, "static/uploads", secure_filename(file.filename))
    file.save(upload_path)
    images = search_images(upload_path,int(page_number),int(page_size))
    images = np.array([s.decode('UTF-8') for s in images])
    return jsonify(images.tolist())


if __name__ == '__main__':
    app.run()
