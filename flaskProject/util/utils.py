import matplotlib.pyplot as plt
import matplotlib.image as mpimg
import math


def show_images(query_image, images):
    ncols = 5
    nrows = math.ceil((len(images) + 1) / ncols)
    plt.subplot(nrows, ncols, 1)
    plt.title("Query")
    plt.imshow(query_image)
    for i, img in enumerate(images):
        image = mpimg.imread(str(img, 'utf-8'))
        plt.subplot(nrows, ncols, i + 2)
        plt.title("output %d" % (i + 1))
        plt.imshow(image)
    plt.show()
