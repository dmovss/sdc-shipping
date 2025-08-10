const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="bg-blue-100 text-blue-800 rounded-lg p-3 inline-block mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <div className="mt-4">
          <h4 className="font-semibold text-sm text-gray-500 mb-1">Партнеры:</h4>
          <div className="flex flex-wrap gap-2">
            {service.partners.map((partner, index) => (
              <span key={index} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;