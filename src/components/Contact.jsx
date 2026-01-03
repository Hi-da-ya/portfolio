import React, { useState } from 'react';
import { Mail, Send, MessageSquare, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '', 
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message Submitted');
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-[#0a192f] text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-6xl">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 md:gap-4 mb-10 md:mb-12">
          <MessageSquare className="text-cyan-400" size={28} />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100">Get In Touch</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* LEFT COLUMN: Text & Code Snippet */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold text-slate-100 mb-6">
                Let's Talk
              </h3>
              <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hello, I'll try my best to get back to you as soon as possible!
              </p>

              {/* Contact Info List */}
              <div className="space-y-4 mb-10">
                <div className="flex items-center text-slate-300">
                  <Mail className="text-cyan-400 mr-4" size={20} />
                  <a href="mailto:chidayawetsa@gmail.com" className="hover:text-cyan-400 transition-colors">
                    hidayawetsa@gmail.com
                  </a>
                </div>
                <div className="flex items-center text-slate-300">
                  <Clock className="text-cyan-400 mr-4" size={20} />
                  <span>Response time: within 24-48 hours</span>
                </div>
              </div>

              {/* The Visual "Code Snippet" Block */}
              <div className="bg-[#112240] p-6 rounded-lg font-mono text-sm shadow-xl border border-slate-800">
                <div className="text-slate-500 mb-2">// How to reach out</div>
                <div className="mb-1">
                  <span className="text-purple-400">const</span> <span className="text-yellow-200">contact</span> <span className="text-cyan-400">=</span> <span className="text-purple-400">{`{`}</span>
                </div>
                <div className="pl-4">
                  <span className="text-slate-300">email:</span> <span className="text-green-400">"hidayawetsa@gmail.com"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-300">github:</span> <span className="text-green-400">"github.com/Hi-da-ya"</span>,
                </div>
                <div className="pl-4 mb-1">
                  <span className="text-slate-300">linkedin:</span> <span className="text-green-400">"https://www.linkedin.com/in/hidaya-v-wetsakhulia-6a713a2b9/"</span>
                </div>
                <div className="mb-4">
                  <span className="text-purple-400">{`}`}</span>;
                </div>
                <div>
                  <span className="text-purple-400">await</span> <span className="text-blue-400">sendMessage</span>(<span className="text-yellow-200">contact</span>, <span className="text-yellow-200">yourMessage</span>);
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: The Clean Form */}
          <div className="bg-[#112240] p-6 md:p-8 rounded-xl border border-slate-800 shadow-2xl">
            <h3 className="text-lg md:text-xl font-bold text-slate-100 mb-5 md:mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-[#0a192f] border border-slate-700 rounded-lg p-3 text-slate-300 focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-slate-600"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full bg-[#0a192f] border border-slate-700 rounded-lg p-3 text-slate-300 focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-slate-600"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  className="w-full bg-[#0a192f] border border-slate-700 rounded-lg p-3 text-slate-300 focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-slate-600"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Your message here..."
                  className="w-full bg-[#0a192f] border border-slate-700 rounded-lg p-3 text-slate-300 focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-slate-600 resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;