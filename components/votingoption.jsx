function VotingOption( { option, isSelected, onSelect } ) {
    return (
        <div
           onClick={ () => onSelect(option)}
           className={ 'voting-option ${isSelected ? "selected" : " "}'}
           >
            <h3>{option.title}</h3>
           </div>
    );
}

export default VotingOption;