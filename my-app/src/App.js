import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Tooltip,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}></VStack>
          <RangeSlider
            defaultValue={[0, 30]}
            colorScheme="blue"
            size="lg"
            onChange="{}"
            onChangeEnd="{}"
            min="{}"
            max="{}"
            step={1}
            width="600px"
            height="50px"
          >
            <RangeSliderTrack index={0}>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
          </RangeSlider>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
