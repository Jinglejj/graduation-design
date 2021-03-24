# encoding=utf8
import os

import h5py
import numpy as np
from models.extract_cnn_vgg16_keras import VGGNet


# 获取图片路径
def get_imlist(path):
    result = []
    for maindir, subdir, file_name_list in os.walk(path):
        for filename in file_name_list:
            apath = os.path.join(maindir, filename)
            if apath.endswith(".jpg"):
                result.append(os.path.normpath(apath))
    return result
database = '../static/picture'
print(get_imlist(database))




#
# # 提取图片特征向量
# database = '../static/picture'
# index = '../vgg_featureCNN.h5'
# img_list = get_imlist(database)
# print(img_list)
# print("--------------------------------------------------")
# print("         开始提取图片特征向量")
# print("--------------------------------------------------")
# feats = []
# names = []
# model = VGGNet()
# for i, img_path in enumerate(img_list):
#     # norm_feat = model.vgg_extract_feat(img_path)
#     # img_name = os.path.split(img_path)[1]
#     # feats.append(norm_feat)
#     names.append(img_path[3:])
#     print(img_path)
#     print("第 %d 张, 共 %d 张" % ((i + 1), len(img_list)))
# # feats = np.array(feats)
# # directory for storing extracted features
# output = index
# print("--------------------------------------------------")
# print("     等待保存结果 ...")
# print("--------------------------------------------------")
# # h5f.create_dataset('dataset_1', data=feats)
# h5f = h5py.File(output, 'a')
# del h5f['dataset_2']
# h5f.create_dataset('dataset_2', data=np.string_(names))
# h5f.close()
# print("--------------------------------------------------")
# print("      结果已保存")
# print("--------------------------------------------------")
