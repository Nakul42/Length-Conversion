import { useState } from 'react';
const Convertor = () => {  //mm to centimeter , inches to centimeter , feets to centimeter (vise verca)
    const [leftValue, setLeftValue] = useState(1);
    const [leftUnit, setLeftUnit] = useState("meter");
    const [rightValue, setRightValue] = useState(100);
    const [rightUnit, setRightUnit] = useState("centimeter");

    const conversionRates = {
        meter: { meter: 1, centimeter: 100, millimeter: 1000, inch: 39.3701 },
        centimeter: { meter: 0.01, centimeter: 1, millimeter: 10, inch: 0.393701 },
        millimeter: { meter: 0.001, centimeter: 0.1, millimeter: 1, inch: 0.0393701 },
        inch: { meter: 0.0254, centimeter: 2.54, millimeter: 25.4, inch: 1 },
    };

    const convert = (value, fromUnit, toUnit) => {
        const rate = conversionRates[fromUnit][toUnit];
        return value * rate;
    };

    const handleLeftValueChange = (e) => {
        const newValue = e.target.value;
        setLeftValue(newValue);
        setRightValue(convert(newValue, leftUnit, rightUnit)); // Update right value
    };

    const handleRightValueChange = (e) => {
        const newValue = e.target.value;
        setRightValue(newValue);
        setLeftValue(convert(newValue, rightUnit, leftUnit)); // Update left value
    };

    const handleLeftUnitChange = (e) => {
        const newUnit = e.target.value;
        setLeftUnit(newUnit);
        setRightValue(convert(leftValue, newUnit, rightUnit)); // Update right value
    };

    const handleRightUnitChange = (e) => {
        const newUnit = e.target.value;
        setRightUnit(newUnit);
        setRightValue(convert(leftValue, leftUnit, newUnit)); // Update right value
    };


    return (
        <div className="container">
          <div className="convert">
            <div className="left-div">
              <input
                type="number"
                min={1}
                max={100}
                value={leftValue}
                onChange={handleLeftValueChange}
              />
              <select value={leftUnit} onChange={handleLeftUnitChange}>
                <option value="meter">Meter</option>
                <option value="centimeter">Centimeter</option>
                <option value="millimeter">Millimeter</option>
                <option value="inch">Inch</option>
              </select>
            </div>
            <div className="equal-sign">=</div>
            <div className="right-div">
              <input
                type="number"
                min={1}
                max={100}
                value={rightValue}
                onChange={handleRightValueChange}
              />
              <select value={rightUnit} onChange={handleRightUnitChange}>
                <option value="meter">Meter</option>
                <option value="centimeter">Centimeter</option>
                <option value="millimeter">Millimeter</option>
                <option value="inch">Inch</option>
              </select>
            </div>
          </div>
        </div>
      );
    };
    
export default Convertor;