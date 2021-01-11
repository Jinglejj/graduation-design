import os
from flask import Flask, session, redirect, url_for, render_template, request
from werkzeug.utils import secure_filename
from services.search import search_images
import numpy as np
UPLOAD_FOLDER = '/path/to/the/uploads'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app = Flask(__name__)


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/upload', methods=["POST"])
def up_pic():
    f = request.files['files']
    basepath = os.path.dirname(__file__)  # 当前文件所在路径
    upload_path = os.path.join(basepath, "static/uploads", secure_filename(f.filename))  # 注意：没有的文件夹一定要先创建，不然会提示没有该路径
    f.save(upload_path)
    images = search_images(upload_path)
    images= np.array([s.decode('UTF-8') for s in images])
    return images.__str__()


if __name__ == '__main__':
    app.run()
