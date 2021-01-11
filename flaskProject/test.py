from models.extract_cnn_vgg16_keras import VGGNet
from util.utils import show_images
import numpy as np
import h5py
import matplotlib.image as mpimg

query = './static/picture/test.jpg'
index = 'vgg_featureCNN.h5'
h5f = h5py.File(index, 'r')
feats = h5f['dataset_1'][:]
imgNames = h5f['dataset_2'][:]
h5f.close()

queryImg = mpimg.imread(query)
# 实例化VGGNet16 对象
model = VGGNet()

# 提取要查询图片的特征向量
queryVec = model.vgg_extract_feat(query)  # 修改此处改变提取特征的网络
scores = np.dot(queryVec, feats.T)
rank_ID = np.argsort(scores)[::-1]
rank_score = scores[rank_ID]

maxres = 10  # 检索出10张相似度最高的图片
imlist = []
for i, index in enumerate(rank_ID[0:maxres]):
    imlist.append(imgNames[index])
#     print("image names: " + str(imgNames[index]) + " scores: %f" % rank_score[i])
# print("top %d images in order are: " % maxres, imlist)

show_images(queryImg, imlist)  # 展示结果
