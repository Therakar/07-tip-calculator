import Bill from "./Bill";
import TipPercentage from "./TipPercentage";
import Output from "./Output";
import ResetBtn from "./ResetBtn";

export default function TipCalculator() {
  return (
    <div>
      <Bill />
      <TipPercentage>How did you like the service?</TipPercentage>
      <TipPercentage>How did your friend like the service?</TipPercentage>
      <Output />
      <ResetBtn />
    </div>
  );
}
