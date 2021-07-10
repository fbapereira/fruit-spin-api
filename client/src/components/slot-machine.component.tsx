import "./slot-machine.component.scss";
import { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootReducer } from "../store";
import { spin } from "../actions/slot-machine.action";

import { ReactComponent as AppleCard } from "../assets/apple.svg";
import { ReactComponent as BananaCard } from "../assets/banana.svg";
import { ReactComponent as CherryCard } from "../assets/cherry.svg";
import { ReactComponent as LemonCard } from "../assets/lemon.svg";

export const SlotMachine = (): ReactElement => {
  const dispatch = useDispatch();
  const onSpinClick = () => dispatch(spin());

  const slotMachineItems = useSelector<RootReducer, RootReducer["slotMachineReducer"]["slotMachineItems"]>(
    ({ slotMachineReducer: { slotMachineItems } }) => {
      console.log(slotMachineItems);
      return slotMachineItems;
    }
  );

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
          {slotMachineItems &&
            slotMachineItems.map((slotMachineItem) => (
              <div className="card">
                {(() => {
                  if (slotMachineItem.toString() === "lemon") {
                    return <LemonCard />;
                  } else if (slotMachineItem.toString() === "apple") {
                    return <AppleCard />;
                  } else if (slotMachineItem.toString() === "banana") {
                    return <BananaCard />;
                  } else {
                    return <CherryCard />;
                  }
                })()}
              </div>
            ))}
        </div>
      </div>
      <div className="controls">
        <div className="control" onClick={onSpinClick}></div>
      </div>
    </div>
  );
};
