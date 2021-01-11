from models.extract_cnn_vgg16_keras import VGGNet
from util.utils import show_images
import numpy as np
import h5py
import matplotlib.pyplot as plt
import matplotlib.image as mpimg

query = '../static/picture/test.jpg'
index = '../vgg_featureCNN.h5'
h5f = h5py.File(index, 'r')
feats = h5f['dataset_1'][:]
imgNames = h5f['dataset_2'][:]
h5f.close()

# 实例化VGGNet16 对象
model = VGGNet()


# 欧氏距离
def euclidean_distance(query, feats):
    scores = []
    for vec in feats:
        scores.append(np.sqrt(np.square(query - vec).sum()))
    scores = np.array(scores)
    rank_ID = np.argsort(scores)[::1]
    rank_score = scores[rank_ID]
    return scores, rank_ID, rank_score


# 曼哈顿距离
def manhattan_distance(query, feats):
    scores = []
    for vec in feats:
        scores.append(np.linalg.norm(query - vec, ord=1))
    scores = np.array(scores)
    rank_ID = np.argsort(scores)[::1]
    rank_score = scores[rank_ID]
    return scores, rank_ID, rank_score


# 切比雪夫距离
def chebyshev_distance(query, feats):
    scores = []
    for vec in feats:
        scores.append(np.linalg.norm(query - vec, ord=np.inf))
    scores = np.array(scores)
    rank_ID = np.argsort(scores)[::1]
    rank_score = scores[rank_ID]
    return scores, rank_ID, rank_score


# 夹角余弦距离
def cosine_distance(query, feats):
    scores = []
    for vec in feats:
        scores.append(np.dot(query, vec) / (np.linalg.norm(query) * (np.linalg.norm(vec))))
    scores = np.array(scores)
    rank_ID = np.argsort(scores)[::-1]
    rank_score = scores[rank_ID]
    return scores, rank_ID, rank_score


# 杰卡德距离
def jaccard_distance(query, feats):
    scores = []
    x = np.asarray(query, np.int32)
    for vec in feats:
        y = np.asarray(vec, np.int32)
        up = np.double(np.bitwise_and((x != y), np.bitwise_or(x != 0, y != 0)).sum())
        down = np.double(np.bitwise_or(x != 0, y != 0).sum())
        d = (up / down)
        scores.append(d)
    scores = np.array(scores)
    rank_ID = np.argsort(scores)[::-1]
    rank_score = scores[rank_ID]
    return scores, rank_ID, rank_score


# 最小值
def min_distance(query, feats):
    scores = np.dot(query, feats.T)
    rank_ID = np.argsort(scores)[::-1]
    rank_score = scores[rank_ID]
    return scores, rank_ID, rank_score


# 提取要查询图片的特征向量
queryImg = mpimg.imread(query)
queryVec = model.vgg_extract_feat(query)  # 修改此处改变提取特征的网络
scores, rank_ID, rank_score = cosine_distance(queryVec, feats)

maxres = 10  # 检索出10张相似度最高的图片
imlist = []
for i, index in enumerate(rank_ID[0:maxres]):
    imlist.append(imgNames[index])
    print("image names: " + str(imgNames[index]) + " scores: %f" % rank_score[i])
print("top %d images in order are: " % maxres, imlist)
show_images(queryImg, imlist)
