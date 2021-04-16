import request from "./request";
const IMAGE_API = process.env.VUE_APP_IMAGE_API;
export const searchImage = ( file, pageNumber = 1, pageSize = 20 ) => {
  const formData =new FormData();
  formData.append("file",file);
  formData.append("pageSize",pageSize);
  formData.append("pageNumber",pageNumber)
  return request({
    url: `http://127.0.0.1:5000/upload`,
    method: "post",
    headers:{
      'Content-Type':'multipart/form-data'
    },
    data: formData,
  });
};

// const searchAudio = ({ keyword }) => {
//   //todo
// };

// const searchVideo = ({ keyword }) => {
//   //todo
// };