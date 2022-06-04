import { FC } from 'react'
import styled, { css } from 'styled-components'
import { TableData, TableHeaderItem } from './interfaces'

interface Props {
  headers: TableHeaderItem[]
  data: TableData[]
}

const Tr = styled.tr``

const Td = styled.td`
  padding: 21px 0;

  &:first-child {
    padding-left: 30px;
  }

  &:last-child {
    text-align: end;
    padding-right: 30px;
  }
`

const Th = styled.th`
  padding: 12px 15px;

  &:first-child {
    width: 225px;
    padding-left: 30px;
    text-align: left;
  }

  &:nth-of-type(2) {
    width: 94px;
  }

  &:nth-of-type(3) {
    width: 167px;
  }

  &:last-child {
    text-align: end;
    padding-right: 30px;
  }

  &:not(:first-child) {
    text-align: right;
  }
`

const Tbody = styled.tbody`
  tr {
    font-size: 14px;

    &:nth-of-type(even) {
      background-color: ${({ theme: { colors } }) => colors['white-002']};
    }

    td {
      ${({
        theme: {
          fontWeights: { bold, medium },
        },
      }) => css`
        :first-child {
          font-weight: ${bold};
          span {
            width: 225px;
            overflow: hidden;
            text-overflow: ellipsis;
            height: 18px;
            display: block;
          }
        }

        &:not(:first-child) {
          text-align: right;
        }

        :last-child {
          font-weight: ${medium};
        }
      `}
    }
  }
`

const Thead = styled.thead`
  tr {
    background-color: ${({ theme: { colors } }) => colors['white-005']};
    color: ${({
      theme: {
        colors: { white },
      },
    }) => white};
    font-size: 10px;

    th {
      padding: 23px 0;
    }
  }
`

const TableWrapper = styled.table`
  border-collapse: collapse;
  margin: 0 0 25px 0;
  font-size: 0.9em;
  width: 100%;
  box-shadow: ${({ theme: { boxShadows } }) => boxShadows.default};
  border: 2px solid ${({ theme: { colors } }) => colors['black-1']};
`

export const Table: FC<Props> = ({ headers, data }) => (
  <TableWrapper>
    <Thead>
      <Tr>
        {headers.map(({ title, key }) => (
          <Th key={key}>{title}</Th>
        ))}
      </Tr>
    </Thead>
    <Tbody>
      {data.map((item) => (
        <Tr key={`${item.id} + ${Math.random()}`}>
          {headers.map(({ key }) => {
            const data = item[key]
            if (!data) return null
            return (
              <Td key={key}>
                <span>{data}</span>
              </Td>
            )
          })}
        </Tr>
      ))}
    </Tbody>
  </TableWrapper>
)
