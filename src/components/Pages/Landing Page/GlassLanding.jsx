import React from "react";
import GlassSurface from "../../Comp/GlassSurface";

const GlassLanding = () => {
  return (
    <div>
      <GlassSurface
        width={300}
        height={200}
        borderRadius={24}
        className="my-custom-class"
      >
        <h2>Glass Surface Content</h2>
      </GlassSurface>
    </div>
  );
};

export default GlassLanding;
