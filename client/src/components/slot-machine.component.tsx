import "./slot-machine.component.scss";
import { ReactComponent as AppleCard } from "../assets/apple.svg";
import { ReactComponent as BananaCard } from "../assets/banana.svg";
import { ReactComponent as CherryCard } from "../assets/cherry.svg";
import { ReactComponent as LemonCard } from "../assets/lemon.svg";

export const SlotMachine = () => {
  return (
    <div className="slot-machine">
      <div className="visor">
        <div className="top-dots">
          <div className="top-dot"></div>
          <div className="top-dot"></div>
          <div className="top-dot"></div>
          <div className="top-dot"></div>
        </div>
        <div className="cards">
          <div className="card">
            <AppleCard />
          </div>
          <div className="card">
            <CherryCard />
          </div>
          <div className="card">
            <LemonCard />
          </div>
        </div>
      </div>
      <div className="controls">
        <div className="control"></div>
      </div>
    </div>
  );
};
