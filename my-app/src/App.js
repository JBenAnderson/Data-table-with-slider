import React, { useState, useEffect } from 'react';
import JsonData from '../src/data/data.json';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Table,
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
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Divider,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import styles from '../src/index.css';
//formatted data from dataFormat.js
//import spIndexData from '../src/data/dataFormat';

//done with imports**********************************************

export default function App() {
  const [limit, setLimit] = useState(0);
  const startDate = limit[0] || 1926;
  const endDate = limit[1] || 2022;
  let total = 0;
  let i = 0;
  let tempArr = [];

  const onChange = val => {
    setLimit(val);
  };

  //filter through the start and end date data
  var resultData = JsonData.filter(a => {
    var date = new Date(a.year);
    return date >= startDate && date <= endDate;
  });

  //calculate the cumulative return sum between the start and end dates
  var rangeSum = () => {
    for (i = 0; i < resultData.length; i++) {
      let obj = resultData[i];
      let sum = parseFloat(obj.totalReturn);

      tempArr.push(sum);
      total += sum;
    }
    return (
      <>
        <Container className="totalContainer">
          <div className="total">
            <b style={{ color: '#66FF00' }}>{total.toFixed(2) + '%'}</b>
          </div>
        </Container>
      </>
    );
  };

  // useEffect(() => {
  //   const returnColor = document.querySelector('.totalReturn');
  //   console.log(returnColor);
  //   if (returnColor.includes('-')) {
  //     returnColor.style.color = 'red';
  //   } else {
  //     returnColor.style.color = 'white';
  //   }
  // }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" className="parentBox">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Container className="container">
            <Text>S&P 500 Index</Text>
            <RangeSlider
              defaultValue={[1926, 2022]}
              colorScheme="blue"
              size="lg"
              onChange={onChange}
              onChangeEnd={e => resultData}
              min={1926}
              max={2022}
              step={1}
              width="600px"
              height="50px"
              className="rangeSlider"
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
                pl={1}
                pr={1}
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
            <Divider />

            <TableContainer>
              <Table variant="striped" colorScheme="teal">
                <TableCaption placement="top">
                  {/* cumulative return from year {`${startDate} to ${endDate}`}
                  {rangeSum()} */}
                  <Stat>
                    <StatLabel>Cumulative Return Range</StatLabel>
                    <StatHelpText></StatHelpText>
                    <StatNumber>{rangeSum()}</StatNumber>

                    <StatHelpText>{`${startDate} to ${endDate}`}</StatHelpText>
                  </Stat>
                </TableCaption>

                <Thead>
                  <Tr>
                    <Th>Year</Th>
                    <Th>Return</Th>
                    <Th>Cumulative Return</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {React.Children.toArray(
                    resultData
                      .map(info => {
                        return (
                          <>
                            <Tr>
                              <Td>{info.year}</Td>
                              <Td className="totalReturn" id="totalReturn">
                                {info.totalReturn}%
                              </Td>
                              <Td>{info.cumulativeReturn}%</Td>
                            </Tr>
                          </>
                        );
                      })
                      .reverse()
                  )}
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>Year</Th>
                    <Th>Return</Th>
                    <Th>Cumulative Return</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </Container>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}
