import styles from "../styles/CampsitesTable.module.css";

export default function CampsitesTable({ sites }) {
  return (
    <table className={styles.campsitesTable}>
      <tbody>
        <tr className={styles.campsitesTableHeaderRow}>
          <th>Site Number</th>
          <th>Date Available</th>
          <th>Price Per Night</th>
        </tr>

        {sites.map(site => <CampsiteTableEntry key={site.site_number} site={site} />)}
      </tbody>
    </table>
  );
}

function CampsiteTableEntry({ site }) {
  return (
    <tr className={styles.campsitesTableRow}>
      <td className={`${styles.campsiteSelector}`}>
        <input type="radio" name="campsite-number" />
        Site {site.site_number}
      </td>
      <td className={styles.campsitesTableData}>{site.date_available}</td>
      <td className={`${styles.campsitesTableData} ${styles.campsitePrice}`}>
        ${site.price_per_night}
      </td>
    </tr>
  );
};