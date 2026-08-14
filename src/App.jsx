import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Check,
  ClipboardList,
  ContactRound,
  Download,
  Gauge,
  Home,
  IndianRupee,
  MessageSquare,
  Moon,
  Share2,
  Sun,
} from "lucide-react";
import { laps, process } from "./utils/constants";
import RoundButton from "./components/RoundButton";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import HomeView from "./components/HomeView";
import HeroTitle from "./components/HeroTitle";
import TimelineView from "./components/TimelineView";
import DeliveryView from "./components/DeliveryView";
import Track from "./components/Track";

export default function App() {
  const [page, setPage] = useState("home");
  const [timelineStep, setTimelineStep] = useState(0);
  const [deliveryStep, setDeliveryStep] = useState(0);
  const [light, setLight] = useState(false);

  const next = () => {
    if (page === "home") {
      setPage("performance");
      return;
    }

    if (page === "performance") {
      setPage("timeline");
      return;
    }

    if (page === "timeline") {
      if (timelineStep < process.length - 1) {
        setTimelineStep((currentStep) => currentStep + 1);
      } else {
        setPage("delivery");
      }

      return;
    }

    if (page === "delivery") {
      setDeliveryStep((currentStep) => Math.min(3, currentStep + 1));
    }
  };

  const back = () => {
    if (page === "delivery") {
      if (deliveryStep > 0) {
        setDeliveryStep((currentStep) => currentStep - 1);
      } else {
        setPage("timeline");
      }

      return;
    }

    if (page === "timeline") {
      if (timelineStep > 0) {
        setTimelineStep((currentStep) => currentStep - 1);
      } else {
        setPage("performance");
      }

      return;
    }

    if (page === "performance") {
      setPage("home");
    }
  };

  const goHome = () => {
    setPage("home");
    setTimelineStep(0);
    setDeliveryStep(0);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        next();
      }

      if (event.key === "ArrowLeft") {
        back();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [page, timelineStep, deliveryStep]);

  return (
    <div className={`experience ${light ? "light" : "dark"}`}>
      <Header
        onBack={back}
        onComplete={next}
        light={light}
        setLight={setLight}
      />

      <HeroTitle />

    <SideNav page={page} setPage={setPage} />

      {page === "home" && <HomeView />}

      {page === "performance" && <HomeView performance />}

      {page === "timeline" && (
        <TimelineView step={timelineStep} />
      )}

      {page === "delivery" && (
        <DeliveryView step={deliveryStep} onHome={goHome} />
      )}

      <Track />

      <div className="hint">
        Use the red ✓ button or arrow keys to continue
      </div>
    </div>
  );
}