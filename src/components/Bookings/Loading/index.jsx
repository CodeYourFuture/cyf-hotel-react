import image from "./image.svg";
import { LoadingImg } from "./view";

function Loading() {
  return (
    <div>
      <LoadingImg src={image} alt="Loading" />
      <span>Loading...</span>
    </div>
  );
}

export default Loading;
