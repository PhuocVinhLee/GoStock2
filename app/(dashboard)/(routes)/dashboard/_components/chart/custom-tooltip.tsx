import { TooltipProps } from "recharts";

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    const date = new Date(label);
    const day = date.getDate();
    const month = date.toLocaleString('en-GB', { month: 'short' }); // Short month name
    const time = date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }); // 24-hour format

    return (
      <div className="  rounded-lg  bg-black/70 text-white p-3 border border-gray-200 shadow-md">
        <p className="text-xs">{`${day} ${month} on ${time}`}</p>
        <p className=" tetx-sm font-bold">{`$${
          payload[0]?.value?.toFixed(2)
        }`}</p>
      </div>
    );
  }
  return null;
};

export default CustomTooltip