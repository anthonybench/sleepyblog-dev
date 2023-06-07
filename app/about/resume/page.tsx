import React, { useState } from 'react';



export default function Page() {
  return (
    <div>

      <a
        href="assets/resume.pdf"
        download="/assets/resume.pdf"
        target='_blank'
      >
          <button>download</button>
      </a>


      {/* TODO: embedded resume */}

      <h3>reach out</h3>
      <p>
        anthonthonybenchyep@gmail.com<br />
        <a href="https://www.linkedin.com/in/anthonybench/">LinkedIn</a>
      </p>
      
    </div>
  );
}