import SecondaryContainer from "./SecondaryContainer";
import styles from "../styles/CampsiteSelector.module.css";

export default function CampsiteSelector({ choices, selectedIndex, onSelectionChange }) {
  return (
    <div>
      <SecondaryContainer>
        <fieldset className={styles.campsiteChoiceContainer}>
          {choices.map(choice => {
            return <CampsiteOption key={choice.id} onSelectionChange={onSelectionChange} name="campsite-option" optionId={choice.id} optionValue={choice.type} checked={choice.id === selectedIndex} labelText={choice.text} />;
          })}
        </fieldset>
      </SecondaryContainer>
    </div>
  );
}

function CampsiteOption({ onSelectionChange, name, optionId, optionValue, labelText, checked }) {
  return (
    <div className={styles.campOption}>
      <input
        onChange={(e) => onSelectionChange(optionId)}
        className={styles.radio}
        type="radio"
        name={name}
        id={optionId}
        value={optionValue}
        checked={checked} />
      <label htmlFor={optionId}>{labelText}</label>
    </div>
  );
}