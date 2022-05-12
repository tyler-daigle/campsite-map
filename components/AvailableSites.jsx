import SecondaryContainer from "./SecondaryContainer";
import CampsitesTable from "./CampsitesTable";

export default function AvailableSites({ sites }) {

  return (
    <SecondaryContainer>
      <CampsitesTable sites={sites} />
    </SecondaryContainer>
  );
}
