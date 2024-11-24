import styles from "./page.css";
import InfoPageBubble from "../components/whitepagebubbles/infobubble/infobubble";
import { fetchMembers } from "../lib/data";
import seacology_Logo from "../../../assets/seacology_logo.png";
import { WhitepagesRenderer } from "./whitepagesRender";
import { MemberList } from "./memberListRetriever";

export default async function Whitepages(props) {
  return (
    <WhitepagesRenderer whiteList={<MemberList />}/>
  );
}