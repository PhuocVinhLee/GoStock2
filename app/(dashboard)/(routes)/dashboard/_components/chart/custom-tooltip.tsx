import React from "react";
import { TooltipProps } from "recharts";

interface CustomTooltipProps extends TooltipProps<number, string> {
  coordinate?: { x: number; y: number };
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
  coordinate,
}) => {
  if (active && payload && payload.length && coordinate) {
    const date = new Date(label);
    const day = date.getDate();
    const month = date.toLocaleString('en-GB', { month: 'short' });
    const time = date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

    return (
      <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            left: coordinate.x - 100, // Adjust this value as needed
            top: coordinate.y - 50,
            transform: 'translateX(-100%)',
            backgroundColor: 'black',
            color: 'white',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
            pointerEvents: 'none',
          }}
        >
          <p className="text-sm">{`${day} ${month} on ${time}`}</p>
          <p className="text-sm font-bold">{`$${
            payload[0]?.value?.toFixed(2)
          }`}</p>
        </div>
        <svg
          style={{
            position: 'absolute',
            left: coordinate.x,
            top: 0,
            width: '1px',
            height: '100%',
            transform: 'translateX(-50%)',
            stroke: '#8884d8',
            strokeWidth: '2',
            pointerEvents: 'none',
          }}
        />
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
