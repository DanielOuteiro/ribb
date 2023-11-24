import React, { forwardRef } from "react";

const Overlay = forwardRef(({ caption, scroll }, ref) => (
  <div
    ref={ref}
    onScroll={(e) => {
      scroll.current =
        e.target.scrollTop / (e.target.scrollHeight - window.innerHeight);
      caption.current.innerText = scroll.current.toFixed(2);
    }}
    className="scroll"
  >
    <div style={{ height: "300vh" }}>
      <div className="dot">
        <h1>From the smallest</h1>
        <p>
          <span style={{ opacity: 0.5 }}>ID:</span> RB12-FS-00663-02 <br />
          <span style={{ opacity: 0.5 }}>Status:</span> Serviceable <br />
          <span style={{ opacity: 0.5 }}>Location:</span> 37.39525° N -77.74875°W
        </p>
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>to the biggest</h1>
        <p>
          <span style={{ opacity: 0.5 }}>ID:</span> RB12-FS-00663-02 <br />
          <span style={{ opacity: 0.5 }}>Status:</span> Valid <br />
          <span style={{ opacity: 0.5 }}>Location:</span> 37.39525° N -77.74875°
          W
        </p>
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot-longer">
        <h1>Locate, manage, and schedule equipment</h1>{" "}
        <p>
          <span style={{ opacity: 0.5 }}>ID:</span> RB12-FS-00663-02 <br />
          <span style={{ opacity: 0.5 }}>Status:</span> Valid <br />
          <span style={{ opacity: 0.5 }}>Location:</span> 37.39525° N -77.74875°
          W
        </p>
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>— all in one platform.</h1>{" "}
        <p>
          <span style={{ opacity: 0.5 }}>ID:</span> RB12-FS-00663-02 <br />
          <span style={{ opacity: 0.5 }}>Status:</span> Valid <br />
          <span style={{ opacity: 0.5 }}>Location:</span> 37.39525° N -77.74875°
          W
        </p>
      </div>
    </div>
    <span class="caption" ref={caption}>
      0.00
    </span>
  </div>
));

Overlay.displayName = 'Overlay'; // Add this line at the end of your component


export default Overlay;
