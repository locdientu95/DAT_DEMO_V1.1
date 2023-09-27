import React from 'react';

function Slider() {
    return (
        <div>
            <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay="on"
        step={1}
        marks
        min={0}
        max={100}
      />
      <Slider
        valueLabelDisplay="on"
        defaultValue={30}
        
        step={1}
        marks
        min={0}
        max={100}
        
      />
    </Box>
        </div>
    );
}

export default Slider;