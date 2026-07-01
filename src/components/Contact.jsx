import { CONTACT_INFO } from '../data/siteData';
import SocialLinks from './SocialLinks';

export default function Contact() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-padding" id="contact-us">
      {/* Redesigned Card Container */}
      <div className="bg-white rounded-[2rem] border border-outline-variant/40 shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-6 sm:p-10 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column: Contact Information */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <h2 className="text-headline-md text-on-surface mb-3 font-bold">Contact information</h2>
            <p className="text-body-md text-on-surface-variant mb-8 leading-relaxed max-w-sm">
              Have questions about our mission or want to get involved? We&apos;d love to hear from you.
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-on-surface/70 mt-0.5" style={{ fontSize: '24px' }}>call</span>
                <div className="flex flex-col">
                  {CONTACT_INFO.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone.replace(/\s+/g, '')}`} className="text-body-md text-on-surface hover:text-primary transition-colors font-medium">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-on-surface/70 mt-0.5" style={{ fontSize: '24px' }}>mail</span>
                <div className="flex flex-col">
                  {CONTACT_INFO.emails.map((email) => (
                    <a key={email} href={`mailto:${email}`} className="text-body-md text-on-surface hover:text-primary transition-colors font-medium break-all">
                      {email}
                    </a>
                  ))}
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-on-surface/70 mt-0.5" style={{ fontSize: '24px' }}>location_on</span>
                <p className="text-body-md text-on-surface-variant leading-relaxed">
                  {CONTACT_INFO.address}
                </p>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-on-surface/70 mt-0.5" style={{ fontSize: '24px' }}>schedule</span>
                <p className="text-body-md text-on-surface-variant leading-relaxed">
                  Monday - Saturday, 10:00 AM - 6:00 PM (IST)
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Google Map & Social Links Side-by-Side */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch gap-6">
            {/* Map Container */}
            <div className="flex-1 min-h-[200px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.444983057135!2d73.88879657601275!3d18.463520182618995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eaaa894bf8c7%3A0xe9656a8efcd07e3c!2sSwadesh%20Heights!5e0!3m2!1sen!2sin!4v1719780000000!5m2!1sen!2sin"
                className="w-full h-full min-h-[200px] rounded-2xl border border-outline-variant/30 shadow-sm"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              />
            </div>

            {/* Social Links on the Right */}
            <div className="flex flex-col justify-center items-start border-t sm:border-t-0 sm:border-l border-outline-variant/20 pt-6 sm:pt-0 sm:pl-6 shrink-0 w-full sm:w-auto">
              <span className="text-label-lg text-on-surface-variant font-medium mb-3">Follow Our Journey</span>
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Right Column: Send Us a Message */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <h2 className="text-headline-md text-on-surface mb-3 font-bold">Send Us a Message</h2>
            <p className="text-body-md text-on-surface-variant mb-8 leading-relaxed">
              Fill up the form and our team will get back to you within 24 hours.
            </p>

            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              {/* Full Name */}
              <div className="relative sm:col-span-1">
                <label className="block text-label-lg text-on-surface mb-2 font-semibold">Full Name</label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-4 text-on-surface-variant/50 pointer-events-none" style={{ fontSize: '20px' }}>
                    person
                  </span>
                  <input
                    type="text"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-outline-variant bg-white focus:border-primary/80 focus:bg-white outline-none transition-all text-body-md text-on-surface placeholder:text-on-surface-variant/30 focus:ring-4 focus:ring-primary/5"
                    placeholder="Enter full name"
                    required
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="relative sm:col-span-1">
                <label className="block text-label-lg text-on-surface mb-2 font-semibold">Email Address</label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-4 text-on-surface-variant/50 pointer-events-none" style={{ fontSize: '20px' }}>
                    mail
                  </span>
                  <input
                    type="email"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-outline-variant bg-white focus:border-primary/80 focus:bg-white outline-none transition-all text-body-md text-on-surface placeholder:text-on-surface-variant/30 focus:ring-4 focus:ring-primary/5"
                    placeholder="Enter email address"
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div className="relative sm:col-span-2">
                <label className="block text-label-lg text-on-surface mb-2 font-semibold">Message</label>
                <textarea
                  rows="5"
                  className="w-full p-4 rounded-xl border border-outline-variant bg-white focus:border-primary/80 focus:bg-white outline-none transition-all text-body-md text-on-surface placeholder:text-on-surface-variant/30 focus:ring-4 focus:ring-primary/5 resize-none"
                  placeholder="Type here..."
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="sm:col-span-2 mt-2">
                <button
                  className="bg-[#242930] hover:bg-[#1a1e24] text-white text-label-lg px-8 py-3.5 rounded-xl transition-all active:scale-95 font-semibold cursor-pointer shadow-sm hover:shadow-md"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
