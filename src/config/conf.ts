const getEnvironmentConfig = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  if (!backendUrl) {
    throw new Error('Backend URL is not defined in environment variables');
  }

  return {
    backendUrl,
    apiUrl: `${backendUrl}/api/v1`
  };
};

export const ENV = getEnvironmentConfig();