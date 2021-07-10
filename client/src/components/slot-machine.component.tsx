import "./slot-machine.component.scss";
import { ReactComponent as AppleCard } from "../assets/apple.svg";
import { ReactComponent as BananaCard } from "../assets/banana.svg";
import { ReactComponent as CherryCard } from "../assets/cherry.svg";
import { ReactComponent as LemonCard } from "../assets/lemon.svg";
import { useDispatch, useSelector } from "react-redux";
import { spin } from "../actions/slot-machine.action";
import { RootReducer } from "../store";

export const SlotMachine = () => {
  const dispatch = useDispatch();

  const slotMachineItems = useSelector<
    RootReducer,
    RootReducer["slotMachineReducer"]["slotMachineItems"]
  >(({ slotMachineReducer: { slotMachineItems } }) => {
    console.log(slotMachineItems);
    return slotMachineItems;
  });

  const onSpinClick = () => {
    dispatch(spin());
  };

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
                    return <LemonCard />
                  } else if (slotMachineItem.toString() === "apple") {
                    return <AppleCard />
                  } else if (slotMachineItem.toString() === "banana") {
                    return <BananaCard />
                  } else {
                    return <CherryCard />
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
