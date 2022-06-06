import React, { useState } from 'react';
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
  Container,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
//done with imports**********************************************

function App() {
  const [limit, setLimit] = useState(0);
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Container>
            <RangeSlider
              defaultValue={[1926, 2021]}
              colorScheme="blue"
              size="lg"
              onChange="{}"
              onChangeEnd="{}"
              min={1926}
              max={2021}
              step={1}
              width="600px"
              height="50px"
            >
              <RangeSliderTrack
                height="20px"
                borderRadius="5px"
                border="1px solid #1F2023"
                bg="#FFFFFF"
              >
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <Tooltip
                label={limit[0]}
                bg="white"
                border="1px solid gray"
                color="black"
                placement="bottom"
                pl={3}
                pr={3}
                isOpen
              >
                <RangeSliderThumb
                  index={0}
                  w="15px"
                  h="35px"
                  borderColor="teal"
                  border="2px solid"
                  borderRadius="5px"
                  sx={{
                    ':focus': {
                      boxShadow: '0 0 3px #fff',
                    },
                  }}
                ></RangeSliderThumb>
              </Tooltip>
              <Tooltip
                label={limit[1]}
                bg="white"
                border="1px solid gray"
                color="black"
                placement="bottom"
                pl={3}
                pr={3}
                isOpen
              >
                <RangeSliderThumb
                  index={1}
                  w="15px"
                  h="35px"
                  borderColor="teal"
                  border="2px solid"
                  borderRadius="5px"
                  sx={{
                    ':focus': {
                      boxShadow: '0 0 3px #fff',
                    },
                  }}
                ></RangeSliderThumb>
              </Tooltip>
            </RangeSlider>
          </Container>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
