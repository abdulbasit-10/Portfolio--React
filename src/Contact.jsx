import React from 'react';

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 px-6">
      <h1 className="my-20 text-center text-4xl text-white font-bold">Get In Touch</h1>

      <div className="text-center tracking-tight text-neutral-500 space-y-4">
        {/* Phone with WhatsApp link */}
        <p>
          <strong className='text-white'>Phone:</strong>{' '}
          <a
            href="https://wa.me/923109783063"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            +92 310 9783063
          </a>
        </p>

        {/* Email with mailto and Gmail link */}
        <p>
          <strong className='text-white'>Email:</strong>{' '}
          <a
            href="mailto:abasit3110@gmail.com?subject=Hello%20Abasit&body=Hi%20there!"
            className="text-cyan-400 hover:underline"
          >
            abasit3110@gmail.com
          </a>
          <span className="mx-2">|</span>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=abasit3110@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            Gmail
          </a>
        </p>

        {/* Location */}
        <p>
          <strong className='text-white'>Location:</strong> Peshawar, Pakistan
        </p>
      </div>
    </div>
  );
};

export default Contact;
