import errorImage from "./error.gif";
import loadingImage from "./loading.svg";
import { Image, Text } from "./view";

function StatusHandler({ loading, error }) {
  return (
    <div className="my-5 d-flex justify-content-center align-items-center">
      <Image src={loading ? loadingImage : errorImage} alt="Status" />
      <Text className="mx-5" isLoad={loading}>
        {loading ? "loading ..." : error}
      </Text>
    </div>
  );
}

export default StatusHandler;
