import Bill from "./Bill";
import TipPercentage from "./TipPercentage";
import Output from "./Output";
import ResetBtn from "./ResetBtn";
import { useState } from "react";

export default function TipCalculator() {
  //Pieces of state
  const [bill, setBill] = useState("");
  const [userPercentage, setUserPercentage] = useState(0);
  const [friendPercentage, setFriendPercentage] = useState(0);

  const tip = bill * ((userPercentage + friendPercentage) / 2 / 100);

  //handler functions
  function handleReset() {
    setBill("");
    setUserPercentage(0);
    setFriendPercentage(0);
  }

  return (
    <div>
      <Bill bill={bill} onSetBill={setBill} />
      <TipPercentage percentage={userPercentage} onSelect={setUserPercentage}>
        How did you like the service?
      </TipPercentage>
      <TipPercentage
        percentage={friendPercentage}
        onSelect={setFriendPercentage}
      >
        How did your friend like the service?
      </TipPercentage>
      <Output bill={bill} tip={tip} />
      <ResetBtn onReset={handleReset} />
    </div>
  );
}
