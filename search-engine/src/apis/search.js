import request from "./request";
const IMAGE_API = process.env.VUE_APP_IMAGE_API;
const SEARCH_API = process.env.VUE_APP_SEARCH_API_API;
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
  return request({
    url: `${SEARCH_API}/searchText/${keyword}/${pageNum}/${pageSize}`,
    method: "get"
  });
};

export const searchAudio = (keyword,pageNum,pageSize)  => {
  return request({
    url: `${SEARCH_API}/searchAudio/${keyword}/${pageNum}/${pageSize}`,
    method: "get"
  });
};

export const searchVideo = ({ data }) => {
  //todo
};
