interface Payload {
  toAddress: string;
  fromAddress: string;
  amount: string;
}

const postJobcoinTransaction = async (data: Payload) => {
  const response = await fetch('/api/postJobcoinTransaction', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  });

  return response.json();
};

export { postJobcoinTransaction };
