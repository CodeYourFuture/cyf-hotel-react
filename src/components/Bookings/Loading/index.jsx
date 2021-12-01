import image from "./image.svg";
import { LoadingImg, LoadingText } from "./view";

function Loading() {
  return (
    <div>
      <LoadingImg src={image} alt="Loading" />
      <LoadingText>Loading...</LoadingText>
    </div>
  );
}

export default Loading;
