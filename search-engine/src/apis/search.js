import request from "./request";
const IMAGE_API = process.env.VUE_APP_IMAGE_API;
const Text_API = process.env.VUE_APP_TEXT_API;
const Media_API = process.env.VUE_APP_MEDIA_API;
export const searchImage = ( file, pageNumber = 1, pageSize = 20 ) => {
  const formData =new FormData();
  formData.append("file",file);
  formData.append("pageSize",pageSize);
  formData.append("pageNumber",pageNumber)
  return request({
    url: `${IMAGE_API}/upload`,
    method: "post",
    headers:{
      'Content-Type':'multipart/form-data'
    },
    data: formData,
  });
};
//data{keyword,pageNum,pageSize}
export const searchText = (keyword,pageNum,pageSize) => {
  console.log(`${Text_API}/searchText/${keyword}/${pageNum}/${pageSize}`)
  return request({
    url: `${Text_API}/searchText/${keyword}/${pageNum}/${pageSize}`,
    method: "get"
  });
};

export const searchAudio = ({ data }) => {
//todo
};

export const searchVideo = ({ data }) => {
  //todo
};
