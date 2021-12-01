import image from "./image.svg";
import { LoadingImg, LoadingText } from "./view";

function Loading() {
  return (
    <div className="my-5 d-flex justify-content-center align-items-center">
      <LoadingImg src={image} alt="Loading" />
      <LoadingText className="mx-5">Loading ...</LoadingText>
    </div>
  );
}

export default Loading;
