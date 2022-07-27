import { format } from 'date-fns';
import { Box, render, Text } from 'ink';
import React, { useState, useEffect } from 'react';
import BigText from 'ink-big-text';

const App = () => {
  const [time, setTime] = useState<string>(
    format(new Date(), 'dd-MM-yyyy HH:mm:ss')
  );

  useEffect(() => {
    const timer = setInterval(() => {
      getTime();
    }, 1000);

    // always clear timers
    return () => {
      clearInterval(timer);
    };
  }, []);

  const getTime = () => {
    setTime(format(new Date(), 'dd-MM-yyyy HH:mm:ss'));
  };

  // !TODO fetch data from API to display inside Text

  return (
    <Box
      borderStyle='round'
      borderColor='magenta'
      padding={1}
      flexDirection='column'>
      <Text color='redBright'>
        <BigText text='My Timer' />
      </Text>
      <Text>{time}</Text>
    </Box>
  );
};

render(<App />);
