import request from "./request";
const IMAGE_API = process.env.VUE_APP_IMAGE_API;
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
const searchAudio = ({ data }) => {
  //todo
};

const searchVideo = ({ data }) => {
  //todo
};
