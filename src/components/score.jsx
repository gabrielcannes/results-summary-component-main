import PropTypes from "prop-types";

export default function Score({ scoreItem }) {
  return (
    <div className={`flex p-4 ${scoreItem.bgColor} justify-between rounded-lg`}>
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={`${scoreItem.color}`}
          className="w-6 h-6 mr-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={`${scoreItem.icon}`}
          />
        </svg>

        

        <span className={`text-${scoreItem.colorText}`}>{scoreItem.title}</span>
      </div>
      <div>
        <p className="text-gray-400 font-bold">
          <span className="text-gray-900">{scoreItem.score}</span> / 100
        </p>
      </div>
    </div>
  );
}

Score.propTypes = {
  scoreItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    score: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    colorText: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }).isRequired,
};
