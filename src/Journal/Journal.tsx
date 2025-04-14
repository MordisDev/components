import React from "react";
import { DateTime } from "luxon";

import { Box } from "../components/Box";
import { Button } from "../components/Button/Button";
import { Clock } from "../components/Clock";
import { Heading } from "../components/Heading";
import { Text, Highlight } from "../components/Text";
import { colors } from "../globals";

export const Journal = () => {
  const currentDate = DateTime.now();

  return (
    <main
      style={{
        backgroundColor: colors.background.main,
        color: colors.text.main,
        width: "1320px",
        padding: "1.5rem 3rem",
        fontFamily: '"Noto Sans", sans-serif',
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Box centered>
          <Heading type="main">Heading!!!</Heading>
          <Text fontType="medium">
            Its: <Highlight>{currentDate.weekdayLong}</Highlight>,{" "}
            <Highlight>
              {currentDate.day} {currentDate.monthLong} {currentDate.year}
            </Highlight>
            , week: <Highlight>{currentDate.weekNumber}</Highlight>
          </Text>
          <Text fontType="highlighted">
            <Clock />
          </Text>
        </Box>
        <Box>
          <p>Sun rise, sun set, day length</p>
          <Box>
            <p>Same for the next day</p>
            <div style={{ display: "flex", gap: "2rem" }}>
              <Button color="green">Example button</Button>
              <Button color="red">Example button</Button>
              <Button>Example button</Button>
            </div>
          </Box>
          <Box bordered>
            <p>
              Days left till next longest day if increasing, shortest if
              decreasing
            </p>
            <p>Set wakeup time and show days till you wake up after sunrise</p>
            <div style={{ display: "flex", gap: "2rem" }}>
              <Button color="green">Example button</Button>
              <Button color="red">Example button</Button>
              <Button>Example button</Button>
            </div>
          </Box>
        </Box>
        <Box paddingType="tight">
          <p>Own timers</p>
        </Box>
        <Box paddingType="tight">Birth days</Box>
        <Box>Quick check lists</Box>
        <Box>
          <Text fontType="highlighted">highlighted</Text>
          <Text fontType="large">large</Text>
          <Text fontType="medium">medium</Text>
          <Text fontType="small">small</Text>
          <Text fontType="muted">muted</Text>
        </Box>
      </div>
    </main>
  );
};

// Top bar #161616
// Dark background #161714
// Lighter background #252525

// Grey #6C6C6C
// red #E42237
// green #3EB359
