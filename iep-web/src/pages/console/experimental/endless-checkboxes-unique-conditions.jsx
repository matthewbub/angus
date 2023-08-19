import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import { ConsoleLayout } from '../../../components/ConsoleLayout';
import { consoleNavigation as navigation } from '../../../constants';

function generateStressTest(numberOfOptions = 10) {
  // Function to generate random boolean values for conditionA and conditionB
  function getRandomBoolean() {
    return Math.random() < 0.5; // 50% chance of true, 50% chance of false
  }

  // Function to create checkboxOptionsData dynamically
  function createCheckboxOptionsData(optionCount) {
    const checkboxOptionsData = {};
    for (let i = 1; i <= optionCount; i++) {
      const optionId = `ID-${i}`;
      checkboxOptionsData[optionId] = {
        conditionA: getRandomBoolean(),
        conditionB: getRandomBoolean(),
      };
    }
    return checkboxOptionsData;
  }

  const checkboxOptionsData = createCheckboxOptionsData(numberOfOptions);


  return {
    checkboxOptions: ['all', ...Object.keys(checkboxOptionsData)],
    checkboxOptionsData,
  }
}
// Mock data for stress testing
const { checkboxOptions, checkboxOptionsData } = generateStressTest(10000);

const Checkbox = ({ checked, onChange, value, name }) => {
  return (
    <div className='checkbox-wrapper'>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        value={value}
        name={name}
        style={{ display: 'none' }} // Hide the default input
      />
      <div className={`custom-checkbox${checked ? ' checked' : ''}`}>
        {/* Insert the custom SVG here */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="custom-svg"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
    </div>
  );
};

const FormControlLabel = ({ control, label }) => {
  return (
    <label>
      {control}
      {label}
    </label>
  );
};

const Primary = () => {
  const { handleSubmit, control, watch, setValue } = useForm();
  const onSubmit = (data) => console.log("SUBMIT: ", data);
  const [touchedCheckbox, setTouchedCheckbox] = useState({
    name: null,
    value: null,
  });
  const watchedCheckboxes = watch("checkboxes");

  useEffect(() => {
    if (!touchedCheckbox.name) {
      return;
    }

    const checkboxesToSet = [];

    // Conditional logic for checkbox options
    if (touchedCheckbox.value && checkboxOptionsData[touchedCheckbox.name]?.conditionA) {

      // Collect all checkboxes that meet the conditional criteria
      const checkboxesWithConditionA = Object.keys(checkboxOptionsData).filter(
        (key) => checkboxOptionsData[key].conditionA || watchedCheckboxes.includes(key)
      );

      // Add all checkboxes that meet the conditional criteria to the array of checkboxes to set
      checkboxesToSet.push(...checkboxesWithConditionA);

      // Create a new array of unique checkboxes to set
      const uniqueCheckboxesToSet = [...new Set(checkboxesToSet)];

      // Set the checkboxes via batch updates
      setValue("checkboxes", uniqueCheckboxesToSet);

      // Reset the touched checkbox
      setTouchedCheckbox({
        name: null,
        value: null,
      });
    } else if (touchedCheckbox.name !== 'all' && !touchedCheckbox.value) {
      // If the checkbox doesn't meet the conditional criteria, remove it from the array of checkboxes
      const filteredCheckboxes = watchedCheckboxes.filter(
        (checkbox) => checkbox !== touchedCheckbox
      );

      setValue("checkboxes", filteredCheckboxes);

      // Reset the touched checkbox
      setTouchedCheckbox({
        name: null,
        value: null,
      });
    }
  }, [touchedCheckbox]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="checkboxes"
        defaultValue={[]}
        render={({ field }) => {
          const handleAllOptionChange = (checked, field) => {
            if (checked) {
              field.onChange(checkboxOptions);
            } else {
              field.onChange([]);
            }
          };

          const handleSingleOptionChange = (event, field) => {
            setTouchedCheckbox({
              name: event.target.value,
              value: event.target.checked,
            });
            const { value, checked } = event.target;
            let newFieldValue = checked
              ? [...field.value, value]
              : field.value.filter((v) => v !== value);

            // If every other checkbox except the 'all' checkbox is checked, include 'all'.
            if (newFieldValue.includes('all')) {
              newFieldValue = newFieldValue.filter((v) => v !== 'all');
            }

            if (newFieldValue.length === checkboxOptions.length - 1) {
              newFieldValue = [...newFieldValue, 'all'];
            }

            field.onChange(newFieldValue);
          };

          const onChange = (event) => {
            const { value, checked } = event.target;

            if (value === "all") {
              handleAllOptionChange(checked, field);
            } else {
              handleSingleOptionChange(event, field);
            }
          };


          return (
            <div>
              <h2>Checkboxes</h2>
              <div className='flex flex-col'>
                {checkboxOptions.map((checkboxOption) => (
                  <FormControlLabel
                    key={checkboxOption}
                    control={
                      <Checkbox
                        checked={field.value && field.value.some(
                          (value) => checkboxOption === value
                        )}
                        onChange={onChange}
                        value={checkboxOption}
                        name={checkboxOption}
                      />
                    }
                    label={checkboxOption}
                  />
                ))}
              </div>
            </div>
          );
        }}
      />
      <button type="submit">Submit</button>
      <style jsx global>{`
        label {
          display: flex;
          align-items: center;
          margin: 10px 0;
        }

        .checkbox-wrapper {
          margin-right: 10px;
        }

        .custom-checkbox {
          display: inline-block;
          width: 24px;
          height: 24px;
          border: 2px solid #000; /* Customize border color */
          border-radius: 4px; /* Customize border radius */
          cursor: pointer;
        }
        
        .custom-checkbox.checked {
          background-color: #000; /* Customize checked background color */
        }
        
        .custom-svg {
          width: 100%;
          height: 100%;
          visibility: hidden;
        }
        
        input[type="checkbox"]:checked + .custom-checkbox .custom-svg {
          visibility: visible;
        }
      `}</style>
    </form>
  );
}


const Page = ({ primaryTitle, secondaryTitle }) => {
  return (
    <ConsoleLayout
      primaryTitle={primaryTitle}
      secondaryTitle={secondaryTitle}
      navigation={navigation}
      primary={Primary}
      breadcrumbs={[
        { name: 'Experimental', href: '/experimental', current: false },
        { name: 'Endless Checkboxes', href: '/experimental/endless-checkboxes', current: true }
      ]}
    />
  )
}

export { getServerSideProps } from '../../../ssp/console/hosting/hosting__home';
export default Page;