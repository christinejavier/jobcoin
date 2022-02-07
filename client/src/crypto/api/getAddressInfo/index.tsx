const getAddressInfo = async (address: string) => {
  const response = await fetch(`/api/getAddressInfo?address=${address}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    referrerPolicy: 'no-referrer',
  });

  return response.json();
};

export { getAddressInfo };
