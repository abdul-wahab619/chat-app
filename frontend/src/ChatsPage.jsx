import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background" style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="91352e6b-6293-4c94-bd97-675e31832fc6"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};
export default ChatsPage;

/*const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    "91352e6b-6293-4c94-bd97-675e31832fc6",
    props.user.username,
    props.user.secret
  );
  return (
    <div className="background" style={{ height: "100vh" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
    </div>
  );
};*/
