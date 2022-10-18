export const request = async (uri: string, options = {}) => {
  try {
    const response = await fetch(uri, options);
    if (response.status === 204) {
      return;
    }
    if (response.ok) {
      const json = await response.json();
      return json;
    }
    throw new Error('API통신 실패 => response.ok :' + response.ok);
  } catch (error: any) {
    console.error('API통신 실패 :' + error.message);
  }
};
