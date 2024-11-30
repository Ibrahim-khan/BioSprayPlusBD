const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-10 space-y-10">
      {/* Contact Section */}
      <div className="space-y-6 bg-gray-100 p-5 w-fit rounded-xl border border-dashed border-slate-700 shadow-xl mx-auto">
        {/* Office Address */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Office Address:
          </h2>
          <p className="text-gray-600">
            Shadhin Online Public Ltd. <br />
            Ayesha Shopping Complex (3rd floor), <br />
            85, Siddeshwari road (Malibagh More), <br />
            Dhaka-1217.
          </p>
        </div>

        {/* Contact Details */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Contact:</h2>
          <p className="text-gray-600">
            Email: <i>ibrahim2013khan@gmail.com</i>
            <br />
            Phone: 01742 095 986.
            <br />
            WhatsApp & Imo Connect: +880 1742 095 986
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
