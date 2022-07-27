import { format } from 'date-fns';
import { Box, render, Text } from 'ink';
import React, { useState, useEffect } from 'react';
import BigText from 'ink-big-text';
import axios from 'axios';
import 'dotenv/config';

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
      // clearInterval(timer2);
    };

    //   const timer2 = setInterval(() => {
    //     getStat();
    //   }, 5000);
    // }, []);
  }, []);

  const getTime = () => {
    setTime(format(new Date(), 'dd-MM-yyyy HH:mm:ss'));
  };

  // !TODO fetch data from API (youtube) to display inside Text
  // const [stat, setStat] = useState();
  // const getStat = async () => {
  //   const { data } = await axios.get('api url', {
  //     params: {
  //       part: 'statistics',
  //       id: 'youtubeChannelID',
  //       key: process.env.KEY,
  //     },
  //   });

  //   setStat(data.items[0].statistics);

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
