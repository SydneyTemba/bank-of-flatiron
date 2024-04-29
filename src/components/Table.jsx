
function Table({transactions}) {

    const data = transactions.map((transfer, index) => {
        return (
            <tr key={index+1}>
              <td>{transfer.Date}</td>
              <td>{transfer.Description}</td>
              <td>{transfer.Category}</td>
              <td>{transfer.Amount}</td>
            </tr>
          );
    })
    return (<>{data}</>)

}

export default Table

