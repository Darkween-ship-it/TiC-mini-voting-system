import { useState } from "react";
import VotingOption from "./votingoption";

function VotingOptions( { options, onOptionselect} )  {
    const [selectedOption, setSelectedOption] useState(null);

    const handleSelect = (option) => {
        setSelectedOption(option);
        onOptionselect(option);
    };

    return (
        <div className="voting-options">
            {options.map( (option) => (
               <VotingOption 
                  key={option.id}
                  option={option}
                  isSelected={selectedOption?.id === option.id}
                  onSelect={handleSelect}
            />
            ))}
        </div>
    );
}

export default VotingOptions;