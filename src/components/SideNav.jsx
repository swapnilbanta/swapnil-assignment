import {
  ClipboardList,
  ContactRound,
  Gauge,
  Home,
  IndianRupee,
  MessageSquare,
} from "lucide-react";

import RoundButton from "./RoundButton";

export default function SideNav({ page, setPage }) {
  return (
    <>
      <nav
        className="side-nav left-nav"
        aria-label="Primary navigation"
      >
        <RoundButton
          label="Performance"
          active={page === "performance"}
          onClick={() => setPage("performance")}
        >
          <Gauge />
        </RoundButton>

        <RoundButton
          label="Home"
          active={page === "home"}
          onClick={() => setPage("home")}
        >
          <Home />
        </RoundButton>

        <RoundButton label="Price">
          <IndianRupee />
        </RoundButton>
      </nav>

      <nav
        className="side-nav right-nav"
        aria-label="Secondary navigation"
      >
        <RoundButton label="Messages">
          <MessageSquare />
        </RoundButton>

        <RoundButton
          label="Explore timeline"
          active={page === "timeline"}
          onClick={() => setPage("timeline")}
        >
          <ClipboardList />
        </RoundButton>

        <RoundButton
          label="Delivery"
          active={page === "delivery"}
          onClick={() => setPage("delivery")}
        >
          <ContactRound />
        </RoundButton>
      </nav>
    </>
  );
}