import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";

export const Clock = () => {
  const [time, setTime] = useState(DateTime.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(() => DateTime.now());
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {time.hour.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}
      :
      {time.minute.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}
      :
      {time.second.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}
    </div>
  );
};
