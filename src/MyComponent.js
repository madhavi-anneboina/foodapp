import React, { useState, useEffect } from 'react';
import Loader from './Loader'; // Import your loader component

const MyComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or any asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {/* Render your content */}
      {isLoading ? (
        <Loader loading={isLoading} />
      ) : (
        /* Render your actual content when loading is complete */
        <div>
          <h1>Hello World!</h1>
          {/* Your actual content */}
        </div>
      )}
    </div>
  );
};

export default MyComponent;
