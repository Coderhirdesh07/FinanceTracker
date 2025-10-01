function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-xl">
      <img src={icon} alt={`${title} icon`} className="w-14 h-14 mb-4" />
      <h4 className="text-xl font-semibold text-gray-800 mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

export default FeatureCard;
