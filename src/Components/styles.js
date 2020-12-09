import stylist from 'styled-components';

export const Gray = stylist.span`
  background-color: #EBEDF0;
  display: inline-block;
  height: 10px;
  width: 10px;
  margin: -0.2px;
  border: 1px;
`;

export const GreenOne = stylist(Gray)`
  background-color: #C6E48B;
`

export const GreenTwo = stylist(Gray)`
  background-color: #7BC96F;
`

export const GreenThree = stylist(Gray)`
  background-color: #239A3B;
`
export const GreenFour = stylist(Gray)`
  background-color: #196127;
`
export const DivTable = stylist.div`
  border: 1px solid #D1D5DA;
  border-radius: 6px;
  margin: 10px;
  padding: 5px;
`

export const GraySpan = stylist(Gray)`
  margin: 2px;
`
export const GreenOneSpan = stylist(GreenOne)`
  margin: 2px;
`

export const GreenTwoSpan = stylist(GreenTwo)`
  margin: 2px;
`

export const GreenThreeSpan = stylist(GreenThree)`
  margin: 2px;
`

export const GreenFourSpan = stylist(GreenFour)`
  margin: 2px;
`
export const DivLabel = stylist.div`
  text-align: right;
`
export const Paragraph = stylist.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  color: #24292e;
  line-height: 15px;
`

export const TableHead = stylist.th`
  font-family: 'Open Sans', sans-serif;
  font-size: 11px;
  color: #24292e;
  line-height: 14px;
  font-weight: normal;
`

export const TableLateral = stylist.td`
  font-family: 'Open Sans', sans-serif;
  font-size: 11px;
  color: #24292e;
  line-height: 14px;
  font-weight: normal;
`

export const Scale = stylist.span`
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  color: #586069;
  line-height: 17px;
  font-weight: normal;
`

export const ButtonYear = stylist.button`
  background-color: #0366D6;
  border: none;
  border-radius: 4px;
  padding-left: 15px;
  padding-right: 40px;
  padding-bottom: 10px;
  padding-top: 10px;
  color: #ffffff;
`

export const ButtonDiv = stylist.div`
  text-align: right;
  margin-top: 20px;
`