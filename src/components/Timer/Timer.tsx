import React from "react";

import { DateTime } from "luxon";

type TimerProps = {
  scope?: "exact" | "day";
  targetTime: DateTime;
};

export const Timer = ({ targetTime }: TimerProps) => {
  const [time, setTime] = React.useState(DateTime.now());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(() => DateTime.now().minus({ minute: 10 }));
    }, 500);

    return () => clearInterval(interval);
  }, []);
  const remaining = targetTime
    .diff(time, [
      "months",
      "days",
      "hours",
      "minutes",
      "seconds",
      "milliseconds",
    ])
    .toObject();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        Timer:{" "}
        {`${remaining.months} m, ${remaining.days} d, ${remaining.hours} h, ${remaining.minutes} min, ${remaining.seconds} s`}
      </div>
      <div>{`Target: ${targetTime.toString()}`}</div>
    </div>
  );
};
