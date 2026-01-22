import React from 'react';

const ImagePlaceholder = ({
  width = 'w-full',
  height = 'h-64',
  color = 'from-gray-200 to-gray-300',
  text = 'Image'
}) => {
  return (
    <div className={`${width} ${height} bg-gradient-to-br ${color} rounded-lg flex items-center justify-center text-gray-500`}>
      {text}
    </div>
  );
};

export default ImagePlaceholder;