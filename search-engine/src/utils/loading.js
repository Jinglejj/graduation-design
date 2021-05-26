const OPTIONS= { fullscreen: true, spinner: "loading", background:"rgba(0, 0, 0, 0.8)" }
export const loading=async (context,fn)=>{
  const loading=context.$loading(OPTIONS);
  const {data}=await fn();
  loading.close();
  return data;
}