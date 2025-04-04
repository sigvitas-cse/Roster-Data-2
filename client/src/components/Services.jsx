const Services = () => {
    const services = [
      { title: "Patent Filing", description: "Secure legal protection for your invention." },
      { title: "IP Consultation", description: "Get expert advice on protecting your assets." },
      { title: "Trademark Registration", description: "Ensure brand identity security." },
    ];
  
    return (
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl text-gray-800 font-semibold">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Services;
  