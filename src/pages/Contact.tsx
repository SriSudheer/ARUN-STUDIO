import React, { useState } from 'react';
import { Phone, Mail, MapPin, Camera, Calendar, Clock } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { useInView } from '../hooks/useInView';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [formRef, formInView] = useInView({ threshold: 0.1 });
  const [infoRef, infoInView] = useInView({ threshold: 0.1 });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.service) {
      setFormError('Please fill out all required fields');
      return;
    }
    
    // In a real application, you would send the form data to a server here
    console.log('Form submitted:', formData);
    
    // Simulate successful submission
    setFormSubmitted(true);
    setFormError('');
  };
  
  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="Let's discuss your photography needs"
        backgroundImage="https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg"
      />
      
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div ref={formRef}>
              <div className={formInView ? 'fade-in' : 'opacity-0'}>
                <h2 className="font-serif text-3xl mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below to inquire about a session or check availability. 
                  I'll get back to you within 24-48 hours.
                </p>
                
                {formSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-sm">
                    <h3 className="font-serif text-xl mb-2">Thank You!</h3>
                    <p>
                      Your message has been received. I'll be in touch with you shortly 
                      to discuss your photography needs.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {formError && (
                      <div className="bg-red-50 border border-red-200 text-red-700 p-4 mb-6 rounded-sm">
                        {formError}
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 mb-2">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 outline-none transition"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-700 mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 outline-none transition"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone" 
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 outline-none transition"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-gray-700 mb-2">
                          Service Interested In <span className="text-red-500">*</span>
                        </label>
                        <select 
                          id="service" 
                          name="service" 
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 outline-none transition"
                          required
                        >
                          <option value="">Select a service</option>
                          <option value="wedding">Wedding Photography</option>
                          <option value="pre-wedding">Pre-Wedding / Engagement</option>
                          <option value="family">Family Session</option>
                          <option value="kids">Kids Photography</option>
                          <option value="maternity">Maternity Session</option>
                          <option value="newborn">Newborn Session</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="date" className="block text-gray-700 mb-2">
                        Preferred Date (if applicable)
                      </label>
                      <input 
                        type="date" 
                        id="date" 
                        name="date" 
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 outline-none transition"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 mb-2">
                        Your Message
                      </label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows={5} 
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 outline-none transition"
                        placeholder="Tell me about your vision or any questions you have..."
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="btn-primary w-full md:w-auto"
                    >
                      Submit Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
            
            {/* Contact Information */}
            <div ref={infoRef}>
              <div className={infoInView ? 'fade-in delay-200' : 'opacity-0'}>
                <h2 className="font-serif text-3xl mb-6">Contact Information</h2>
                
                <div className="space-y-6 mb-12">
                  <div className="flex items-start">
                    <MapPin size={20} className="text-primary-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Studio Location</h3>
                      <p className="text-gray-600">
                        123 Photography Studio, Creative District<br />
                        San Francisco, CA 94103
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone size={20} className="text-primary-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-gray-600">
                        <a href="tel:+14155550123" className="hover:text-primary-600 transition-colors">
                          (415) 555-0123
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail size={20} className="text-primary-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:hello@emmareeedphoto.com" className="hover:text-primary-600 transition-colors">
                          hello@emmareeedphoto.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <h3 className="font-serif text-xl mb-4">Business Hours</h3>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <Clock size={18} className="text-primary-600 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">
                      <span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Clock size={18} className="text-primary-600 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">
                      <span className="font-medium">Saturday:</span> 10:00 AM - 4:00 PM
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Clock size={18} className="text-primary-600 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">
                      <span className="font-medium">Sunday:</span> Closed (Shooting Days Only)
                    </p>
                  </div>
                </div>
                
                <div className="p-6 bg-primary-50 border border-primary-100">
                  <div className="flex items-start">
                    <Calendar size={20} className="text-primary-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Booking Information</h3>
                      <p className="text-gray-600 mb-2">
                        Wedding dates often book 12-18 months in advance, especially for peak season (May-October).
                      </p>
                      <p className="text-gray-600">
                        Family and portrait sessions typically book 4-8 weeks in advance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section (Would be a real map in production) */}
      <section className="mt-12 h-96 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-500">
            Interactive map would be displayed here in production
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;