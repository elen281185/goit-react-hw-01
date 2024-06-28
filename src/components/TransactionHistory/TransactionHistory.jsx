import css from "./TransactionHistory.module.css";
export default function TransactionHistory( props){
    return (
        <table className={css.table}>
        <thead className={css.tableHead}>
          <tr className={css.tableTr}>
            <th className={css.tableTitle}>Type</th>
            <th className={css.tableTitle}>Amount</th>
            <th className={css.tableTitle}> Currency</th>
          </tr>
        </thead>
      
        <tbody className={css.tableBody}>
          
         {props.items.map((item)=>(
            <tr key = {item.id}>
              <td className={css.tableText}>{item.type}</td>
            <td className={css.tableText}>{item.amount}</td>
            <td className={css.tableText}>{item.currency}</td>
            </tr> 
             ))}
        </tbody>
            </table>)
}